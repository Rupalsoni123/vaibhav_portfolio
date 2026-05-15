// Vite dev server bridge for Vercel-style /api functions.
// In production, Vercel serves these directly from api/*.js.
import { loadEnv } from "vite";

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (c) => (raw += c));
    req.on("end", () => resolve(raw));
    req.on("error", reject);
  });

// Adapter so the same handler signature works under Vite middleware as
// under Vercel (req.body parsed, res.status().json() / res.setHeader exist).
const adapt = (req, res) => {
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (obj) => {
    if (!res.getHeader("Content-Type")) {
      res.setHeader("Content-Type", "application/json");
    }
    res.end(JSON.stringify(obj));
    return res;
  };
  return { req, res };
};

export default function apiPlugin() {
  return {
    name: "api-plugin",
    configResolved(config) {
      // Load .env into process.env so /api handlers can read GROQ_API_KEY etc.
      // (Vite only injects VITE_* into client; we want the non-prefixed vars
      // available to our Node-side dev middleware.)
      const env = loadEnv(config.mode || "development", process.cwd(), "");
      for (const [k, v] of Object.entries(env)) {
        if (process.env[k] === undefined) process.env[k] = v;
      }
    },
    configureServer(server) {
      server.middlewares.use("/api", async (req, res, next) => {
        // Health endpoint
        if (req.url === "/health" && req.method === "GET") {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              status: "healthy",
              service: "Portfolio API",
              timestamp: new Date().toISOString(),
              version: "1.0.0",
              environment: "local",
            })
          );
          return;
        }

        // AI chat proxy
        if (req.url === "/ai" || req.url?.startsWith("/ai?")) {
          try {
            if (req.method === "POST") {
              const raw = await readBody(req);
              try {
                req.body = raw ? JSON.parse(raw) : {};
              } catch {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Bad JSON" }));
                return;
              }
            }
            adapt(req, res);
            const mod = await server.ssrLoadModule("/api/ai.js").catch(async () => {
              return await import(/* @vite-ignore */ "./api/ai.js");
            });
            const handler = mod.default || mod;
            await handler(req, res);
          } catch (err) {
            console.error("[api-plugin /ai] error:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Dev proxy crash" }));
          }
          return;
        }

        next();
      });
    },
  };
}
