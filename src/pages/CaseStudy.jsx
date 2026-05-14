import React, { useEffect, lazy, Suspense } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import caseStudies from "../data/caseStudies";

const Mermaid = lazy(() => import("../components/Mermaid"));

const Section = ({ label, children }) => (
  <section style={{ marginBottom: 40 }}>
    <div
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--p3-accent)",
        textTransform: "uppercase",
        letterSpacing: ".15em",
        marginBottom: 12,
      }}
    >
      {label}
    </div>
    <div style={{ color: "var(--p3-ink)", lineHeight: 1.7, fontSize: 16 }}>{children}</div>
  </section>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  useEffect(() => {
    document.body.setAttribute("data-mode", "scroll");
    if (study) document.title = `${study.title} — Vaibhav Soni`;
    return () => document.body.removeAttribute("data-mode");
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  return (
    <main
      style={{
        padding: "120px 24px 96px",
        background: "var(--p3-bg-0)",
        color: "var(--p3-ink)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
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
          ~/case-studies/{study.slug}
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          {study.title}
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 32,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--p3-ink-mut)",
          }}
        >
          <span>{study.role}</span>
          <span>·</span>
          <span>{study.duration}</span>
        </div>

        {/* Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${study.metrics.length}, 1fr)`,
            gap: 8,
            marginBottom: 48,
          }}
        >
          {study.metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "var(--p3-bg-1)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-md)",
                padding: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--p3-ink-mut)",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 600,
                  color: `var(--p3-${m.tone})`,
                }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>

        <Section label="problem">
          <p>{study.problem}</p>
        </Section>

        <Section label="stack">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {study.stack.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--p3-ink)",
                  background: "var(--p3-bg-1)",
                  border: "1px solid var(--p3-line)",
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        <Section label="architecture">
          {study.mermaid ? (
            <Suspense
              fallback={
                <div
                  style={{
                    color: "var(--p3-ink-mut)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    padding: 16,
                    background: "var(--p3-bg-1)",
                    border: "1px solid var(--p3-line)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  rendering diagram…
                </div>
              }
            >
              <Mermaid chart={study.mermaid} />
            </Suspense>
          ) : (
            <pre
              style={{
                background: "var(--p3-bg-1)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-md)",
                padding: 16,
                overflowX: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--p3-ink)",
                margin: 0,
              }}
            >
              {study.architecture}
            </pre>
          )}
        </Section>

        <Section label="decisions">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {study.decisions.map((d, i) => (
              <li key={i} style={{ marginBottom: 8 }}>{d}</li>
            ))}
          </ul>
        </Section>

        <Section label="outcome">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {study.outcome.map((d, i) => (
              <li key={i} style={{ marginBottom: 8 }}>{d}</li>
            ))}
          </ul>
        </Section>

        <Section label="lessons">
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {study.lessons.map((d, i) => (
              <li key={i} style={{ marginBottom: 8 }}>{d}</li>
            ))}
          </ul>
        </Section>
      </div>
    </main>
  );
};

export default CaseStudy;
