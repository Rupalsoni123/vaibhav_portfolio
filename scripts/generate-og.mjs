import sharp from "sharp";
import { writeFileSync } from "node:fs";

const W = 1200, H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6EE7FF"/>
      <stop offset="1" stop-color="#A78BFA"/>
    </linearGradient>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#6EE7FF" opacity="0.10"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="#0B1020"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>

  <!-- Status pill -->
  <g transform="translate(80, 90)">
    <rect x="0" y="0" width="180" height="36" rx="18" fill="#121933" stroke="rgba(230,236,255,0.08)"/>
    <circle cx="22" cy="18" r="6" fill="#3DDC97"/>
    <text x="40" y="24" font-family="JetBrains Mono, monospace" font-size="14" font-weight="600" fill="#3DDC97" letter-spacing="1">AVAILABLE</text>
  </g>

  <!-- Title -->
  <text x="80" y="280" font-family="Space Grotesk, sans-serif" font-size="84" font-weight="600" fill="#E6ECFF" letter-spacing="-2">DevOps engineer.</text>
  <text x="80" y="380" font-family="Space Grotesk, sans-serif" font-size="84" font-weight="600" fill="url(#g)" letter-spacing="-2">Ship faster, page less.</text>

  <!-- Sub -->
  <text x="80" y="450" font-family="Inter, sans-serif" font-size="26" fill="#8A95C2">Vaibhav Soni · AWS · GCP · Azure · Kubernetes · Terraform</text>

  <!-- Pipeline strip -->
  <g transform="translate(80, 510)" font-family="JetBrains Mono, monospace" font-size="13" font-weight="600" letter-spacing="1">
    ${["COMMIT","BUILD","TEST","SCAN","DEPLOY","OBSERVE"].map((s,i) => {
      const x = i * 175;
      return `<g transform="translate(${x},0)">
        <rect x="0" y="0" width="148" height="32" rx="16" fill="#121933" stroke="rgba(110,231,255,0.4)"/>
        <circle cx="18" cy="16" r="5" fill="#3DDC97"/>
        <text x="34" y="21" fill="#3DDC97">${s}</text>
      </g>`;
    }).join("")}
  </g>

  <!-- URL -->
  <text x="80" y="600" font-family="JetBrains Mono, monospace" font-size="16" fill="#6B7399">vaibhavsoni21.vercel.app</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
writeFileSync("public/og-image.png", png);
console.log(`✓ public/og-image.png · ${(png.length/1024).toFixed(1)} KB`);
