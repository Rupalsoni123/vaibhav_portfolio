import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LiveStatus from "./LiveStatus";

const COLS = [
  {
    label: "navigate",
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#blog", label: "Blog" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    label: "pages",
    links: [
      { to: "/uses", label: "/uses" },
      { to: "/now", label: "/now" },
      { to: "/lab", label: "/lab" },
      { to: "/case-studies/k8s-kafka-zookeeper-do", label: "case study" },
    ],
  },
  {
    label: "social",
    links: [
      { ext: "https://github.com/vaibhav21soni", label: "GitHub" },
      { ext: "https://linkedin.com/in/vaibhavsonii21", label: "LinkedIn" },
      { ext: "mailto:vaibhavsoni5567@gmail.com", label: "Email" },
      { ext: "/rss.xml", label: "RSS" },
    ],
  },
];

const linkStyle = {
  color: "var(--p3-ink-mut)",
  textDecoration: "none",
  fontSize: 13,
  display: "block",
  padding: "2px 0",
  transition: "color .15s",
};

const Footer = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer
      style={{
        padding: "48px 24px 32px",
        background: "var(--p3-bg-1)",
        borderTop: "1px solid var(--p3-line)",
        color: "var(--p3-ink-mut)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 32,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontWeight: 700,
                color: "var(--p3-ink)",
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 12,
              }}
            >
              <span>vaibhav</span>
              <span style={{ color: "var(--p3-accent)" }}>/</span>
              <span>soni</span>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.6,
                color: "var(--p3-ink-mut)",
                margin: "0 0 16px",
                maxWidth: 320,
              }}
            >
              DevOps engineer building the reliability layer. CI/CD, container
              orchestration, cloud infrastructure.
            </p>
            <LiveStatus />
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.label}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--p3-ink-mut)",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  marginBottom: 12,
                }}
              >
                {col.label}
              </div>
              {col.links.map((l) => {
                if (l.to) {
                  return (
                    <Link key={l.label} to={l.to} style={linkStyle}>
                      {l.label}
                    </Link>
                  );
                }
                if (l.ext) {
                  return (
                    <a
                      key={l.label}
                      href={l.ext}
                      target={l.ext.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={linkStyle}
                    >
                      {l.label}
                    </a>
                  );
                }
                return (
                  <a key={l.label} href={l.href} style={linkStyle}>
                    {l.label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            paddingTop: 20,
            borderTop: "1px solid var(--p3-line)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--p3-ink-mut)",
          }}
        >
          <span>© {now.getFullYear()} Vaibhav Soni · Ahmedabad, India</span>
          <span>built w/ React · Vite · Tailwind · Vercel</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
