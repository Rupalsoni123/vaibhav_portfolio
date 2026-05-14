import { writeFileSync } from "node:fs";

const USER = process.env.GITHUB_USER || "vaibhav21soni";
const URL = `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`;
const OUT = "public/contribs.json";

try {
  const res = await fetch(URL, { headers: { "User-Agent": "p3-build" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const contributions = (data.contributions || []).map((c) => ({
    date: c.date,
    count: c.count,
    level: c.level,
  }));
  const total = (data.total && (data.total.lastYear || data.total[Object.keys(data.total)[0]])) || 0;
  writeFileSync(OUT, JSON.stringify({ user: USER, total, contributions, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`✓ ${OUT} · ${contributions.length} days · ${total} contribs`);
} catch (e) {
  console.warn(`⚠ contrib fetch failed: ${e.message}. Writing empty stub.`);
  writeFileSync(OUT, JSON.stringify({ user: USER, total: 0, contributions: [], generatedAt: new Date().toISOString() }, null, 2));
}
