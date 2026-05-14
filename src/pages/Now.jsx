import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Now = () => {
  useEffect(() => {
    document.body.setAttribute("data-mode", "scroll");
    document.title = "Now — Vaibhav Soni";
    return () => document.body.removeAttribute("data-mode");
  }, []);

  const lastUpdated = "May 2026";

  return (
    <main
      style={{
        padding: "120px 24px 96px",
        background: "var(--p3-bg-0)",
        color: "var(--p3-ink)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            color: "var(--p3-accent)",
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            marginBottom: 24,
          }}
        >
          ← back to /
        </Link>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--p3-accent)",
            textTransform: "uppercase",
            letterSpacing: ".15em",
            marginBottom: 8,
          }}
        >
          ~/now
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          What I'm doing now
        </h1>
        <p style={{ color: "var(--p3-ink-mut)", margin: "0 0 32px" }}>
          Snapshot of current focus. <em>Last updated: {lastUpdated}.</em>
        </p>

        <section style={{ lineHeight: 1.8, color: "var(--p3-ink)", fontSize: 16 }}>
          <p>
            <span className="p3-pill p3-pill--ok">work</span>{" "}
            DevOps engineer at <strong>Inexture Solutions</strong>. Running
            production GKE Autopilot + managed Istio for a microservices
            platform. CI/CD across 10+ services in Jenkins and GitHub Actions.
          </p>
          <p>
            <span className="p3-pill p3-pill--ok">learning</span>{" "}
            Going deeper on eBPF observability and Cilium networking. Reading
            Google's SRE Workbook for the second time.
          </p>
          <p>
            <span className="p3-pill p3-pill--warn">side</span>{" "}
            Building this portfolio in public. Tokenized design system,
            interactive pipeline demo, command palette.
          </p>
          <p>
            <span className="p3-pill p3-pill--ok">availability</span>{" "}
            Open to senior DevOps / SRE / Platform roles —{" "}
            <a href="mailto:vaibhavsoni5567@gmail.com" style={{ color: "var(--p3-accent)" }}>
              email
            </a>
            .
          </p>
        </section>

        <p
          style={{
            marginTop: 48,
            color: "var(--p3-ink-mut)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
          }}
        >
          Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noreferrer" style={{ color: "var(--p3-accent)" }}>nownownow.com</a>.
        </p>
      </div>
    </main>
  );
};

export default Now;
