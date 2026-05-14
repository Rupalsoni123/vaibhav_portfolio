import React, { lazy, Suspense } from "react";

const Contribs = lazy(() => import("./Contribs"));

const Stats = () => (
  <section
    id="stats"
    style={{
      padding: "96px 24px",
      background: "var(--p3-bg-1)",
      borderTop: "1px solid var(--p3-line)",
      color: "var(--p3-ink)",
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
          ~/github
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Activity
        </h2>
        <p style={{ color: "var(--p3-ink-mut)", margin: "6px 0 0", maxWidth: 560 }}>
          Public contributions over the last 12 months.
        </p>
      </div>
      <Suspense
        fallback={
          <div style={{ color: "var(--p3-ink-mut)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
            loading heatmap…
          </div>
        }
      >
        <Contribs />
      </Suspense>
    </div>
  </section>
);

export default Stats;
