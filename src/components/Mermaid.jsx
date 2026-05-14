import React, { useEffect, useRef, useState } from "react";

let initPromise = null;

const loadMermaid = () => {
  if (initPromise) return initPromise;
  initPromise = import("mermaid").then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        background: "#121933",
        primaryColor: "#1A2244",
        primaryTextColor: "#E6ECFF",
        primaryBorderColor: "#6EE7FF",
        lineColor: "#8A95C2",
        secondaryColor: "#1A2244",
        tertiaryColor: "#0B1020",
        fontFamily: "JetBrains Mono, monospace",
      },
      flowchart: { curve: "basis", htmlLabels: true },
      securityLevel: "strict",
    });
    return mermaid;
  });
  return initPromise;
};

let counter = 0;

const Mermaid = ({ chart }) => {
  const ref = useRef(null);
  const [error, setError] = useState(null);
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let cancelled = false;
    setError(null);
    loadMermaid()
      .then((mermaid) => {
        const id = `mmd-${++counter}-${Date.now()}`;
        return mermaid.render(id, chart);
      })
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e?.message || e));
      });
    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    return (
      <pre
        style={{
          background: "var(--p3-bg-1)",
          border: "1px solid var(--p3-err)",
          color: "var(--p3-err)",
          padding: 16,
          borderRadius: "var(--radius-md)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          margin: 0,
        }}
      >
        mermaid render failed: {error}
      </pre>
    );
  }

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Architecture diagram"
      style={{
        background: "var(--p3-bg-1)",
        border: "1px solid var(--p3-line)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        overflowX: "auto",
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Mermaid;
