import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://vaibhavsoni21.vercel.app";

const mod = await import("../src/data/blogData.js");
const posts = mod.blogPosts || [];

const sorted = [...posts].sort(
  (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
);

const esc = (s) =>
  String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const items = sorted
  .map(
    (p) => `  <item>
    <title>${esc(p.title)}</title>
    <link>${SITE}/#blog</link>
    <guid isPermaLink="false">${SITE}/blog/${esc(p.slug)}</guid>
    <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
    <description>${esc(p.excerpt)}</description>
    <category>${esc(p.category)}</category>
  </item>`
  )
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Vaibhav Soni — Notes from the trenches</title>
  <link>${SITE}</link>
  <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
  <description>DevOps engineering notes: K8s, Terraform, CI/CD, SRE.</description>
  <language>en-us</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>
`;

const outDir = "public";
if (!existsSync(outDir)) mkdirSync(outDir);
writeFileSync(join(outDir, "rss.xml"), rss);
console.log(`✓ public/rss.xml · ${sorted.length} posts`);

// Atom 1.0
const atomEntries = sorted
  .map(
    (p) => `  <entry>
    <title>${esc(p.title)}</title>
    <link href="${SITE}/#blog"/>
    <id>${SITE}/blog/${esc(p.slug)}</id>
    <updated>${new Date(p.publishDate).toISOString()}</updated>
    <summary>${esc(p.excerpt)}</summary>
    <category term="${esc(p.category)}"/>
    <author><name>${esc(p.author || "Vaibhav Soni")}</name></author>
  </entry>`
  )
  .join("\n");

const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Vaibhav Soni — Notes from the trenches</title>
  <link href="${SITE}"/>
  <link href="${SITE}/atom.xml" rel="self"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${SITE}/</id>
  <author><name>Vaibhav Soni</name></author>
${atomEntries}
</feed>
`;
writeFileSync(join(outDir, "atom.xml"), atom);
console.log(`✓ public/atom.xml · ${sorted.length} posts`);
