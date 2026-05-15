import React, { lazy, Suspense } from "react";
import { talks, oss } from "../data/talks";

const Contribs = lazy(() => import("./Contribs"));

const Header = ({ label, title, blurb }) => (
  <div style={{ marginBottom: 24 }}>
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
      {label}
    </div>
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(24px, 3vw, 32px)",
        fontWeight: 600,
        margin: 0,
        letterSpacing: "-0.02em",
        color: "var(--p3-ink)",
      }}
    >
      {title}
    </h2>
    {blurb && (
      <p style={{ color: "var(--p3-ink-mut)", margin: "6px 0 0", maxWidth: 560 }}>{blurb}</p>
    )}
  </div>
);

const Row = ({ children, href }) => {
  const inner = (
    <div
      style={{
        background: "var(--p3-bg-2)",
        border: "1px solid var(--p3-line)",
        borderRadius: "var(--radius-md)",
        padding: "14px 16px",
        display: "flex",
        gap: 16,
        alignItems: "center",
        transition: "border-color .15s, transform .15s",
      }}
      onMouseEnter={(e) => {
        if (!href) return;
        e.currentTarget.style.borderColor = "var(--p3-accent)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--p3-line)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {children}
    </div>
  );
  if (!href) return inner;
  return (
    <a href={href} style={{ textDecoration: "none", display: "block" }} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {inner}
    </a>
  );
};

const Pill = ({ children, tone = "accent" }) => (
  <span
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: `var(--p3-${tone === "accent" ? "accent" : "ink-mut"})`,
      background: "var(--p3-bg-1)",
      border: "1px solid var(--p3-line)",
      padding: "2px 8px",
      borderRadius: 4,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

const TalksAndOSS = () => (
  <section
    id="talks"
    style={{
      padding: "96px 24px",
      background: "var(--p3-bg-1)",
      borderTop: "1px solid var(--p3-line)",
      color: "var(--p3-ink)",
    }}
  >
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 32,
      }}
      className="talks-grid"
    >
      <div>
        <Header label="~/talks" title="Talks" blurb="Public + internal sessions." />
        {talks.length === 0 ? (
          <div
            style={{
              background: "var(--p3-bg-2)",
              border: "1px dashed var(--p3-line)",
              borderRadius: "var(--radius-md)",
              padding: "16px 18px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--p3-ink-mut)",
            }}
          >
            $ ls talks/ — empty. Recordings coming soon.
          </div>
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {talks.map((t, i) => (
              <Row key={i} href={t.link}>
                <Pill>{t.tag}</Pill>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      color: "var(--p3-ink)",
                      fontSize: 15,
                      lineHeight: 1.3,
                    }}
                  >
                    {t.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--p3-ink-mut)",
                      marginTop: 2,
                    }}
                  >
                    {t.venue} · {t.year}
                  </div>
                </div>
              </Row>
            ))}
          </div>
        )}
      </div>

      <div>
        <Header label="~/oss" title="Open source" blurb="What I ship in public." />
        <div style={{ display: "grid", gap: 10 }}>
          {oss.map((o, i) => (
            <Row key={i} href={o.link}>
              <Pill>{o.tag}</Pill>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "var(--p3-ink)",
                    fontSize: 15,
                    lineHeight: 1.3,
                  }}
                >
                  {o.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--p3-ink-mut)",
                    marginTop: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {o.repo}
                </div>
                <div style={{ color: "var(--p3-ink-mut)", fontSize: 13, marginTop: 4 }}>{o.desc}</div>
              </div>
            </Row>
          ))}
        </div>
      </div>
    </div>
    <div style={{ maxWidth: 1100, margin: "32px auto 0" }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--p3-accent)",
          textTransform: "uppercase",
          letterSpacing: ".15em",
          marginBottom: 12,
        }}
      >
        ~/github · contributions
      </div>
      <Suspense fallback={<div style={{ color: "var(--p3-ink-mut)", fontFamily: "var(--font-mono)", fontSize: 12 }}>loading heatmap…</div>}>
        <Contribs />
      </Suspense>
    </div>
    <style>{`@media (max-width: 760px) { .talks-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

export default TalksAndOSS;
