import React, { useEffect, useState } from "react";

const FLAGS = [
  { key: "hc", label: "High contrast", attr: "data-hc" },
  { key: "dys", label: "Dyslexia-friendly", attr: "data-dys" },
  { key: "lw", label: "Wider line spacing", attr: "data-lw" },
];

const A11yToggle = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("a11y") || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    FLAGS.forEach((f) => {
      if (state[f.key]) document.documentElement.setAttribute(f.attr, "on");
      else document.documentElement.removeAttribute(f.attr);
    });
    localStorage.setItem("a11y", JSON.stringify(state));
  }, [state]);

  return (
    <>
      <button
        type="button"
        aria-label="Accessibility options"
        title="Accessibility options"
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          right: 20,
          bottom: 80,
          zIndex: 48,
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "var(--p3-bg-1)",
          border: "1px solid var(--p3-line)",
          color: "var(--p3-ink)",
          cursor: "pointer",
          boxShadow: "var(--shadow-md)",
          fontFamily: "var(--font-mono)",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        ♿
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          style={{
            position: "fixed",
            right: 20,
            bottom: 132,
            zIndex: 48,
            width: 240,
            background: "var(--p3-bg-1)",
            border: "1px solid var(--p3-line)",
            borderRadius: "var(--radius-md)",
            padding: 14,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--p3-ink-mut)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              marginBottom: 8,
            }}
          >
            a11y options
          </div>
          {FLAGS.map((f) => (
            <label
              key={f.key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 0",
                color: "var(--p3-ink)",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              <span>{f.label}</span>
              <input
                type="checkbox"
                checked={!!state[f.key]}
                onChange={(e) => setState((s) => ({ ...s, [f.key]: e.target.checked }))}
                style={{ accentColor: "var(--p3-accent)" }}
              />
            </label>
          ))}
        </div>
      )}
    </>
  );
};

export default A11yToggle;
