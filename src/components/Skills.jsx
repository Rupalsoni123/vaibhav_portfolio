import React, { useState, useMemo } from "react";
import skills from "../data/skills";

const Skills = () => {
  const [active, setActive] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(skills.map((s) => s.category)))],
    []
  );

  const grouped = useMemo(() => {
    const list = active === "All" ? skills : skills.filter((s) => s.category === active);
    return list.reduce((acc, s) => {
      (acc[s.category] = acc[s.category] || []).push(s);
      return acc;
    }, {});
  }, [active]);

  const proficiencyDots = (level) => {
    const filled = Math.round((level || 0) / 20); // 5-dot scale
    return (
      <span style={{ display: "inline-flex", gap: 3 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: i < filled ? "var(--p3-ok)" : "var(--p3-bg-2)",
              border: "1px solid var(--p3-line)",
            }}
          />
        ))}
      </span>
    );
  };

  return (
    <section
      id="skills"
      style={{
        padding: "96px 24px",
        background: "var(--p3-bg-0)",
        borderTop: "1px solid var(--p3-line)",
        color: "var(--p3-ink)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
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
            ~/skills
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Technical arsenal
          </h2>
          <p style={{ color: "var(--p3-ink-mut)", margin: "8px 0 0", maxWidth: 600 }}>
            Tools I reach for. Proficiency dots = years × depth, not vanity.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
          {categories.map((c) => {
            const on = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  background: on ? "var(--p3-accent)" : "transparent",
                  color: on ? "var(--p3-bg-0)" : "var(--p3-ink-mut)",
                  border: on ? "1px solid var(--p3-accent)" : "1px solid var(--p3-line)",
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div style={{ display: "grid", gap: 32 }}>
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-ink-mut)",
                  textTransform: "uppercase",
                  letterSpacing: ".15em",
                  marginBottom: 12,
                }}
              >
                {cat} · {items.length}
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: 10,
                }}
              >
                {items.map((s) => (
                  <div
                    key={s.id}
                    style={{
                      background: "var(--p3-bg-1)",
                      border: "1px solid var(--p3-line)",
                      borderRadius: "var(--radius-md)",
                      padding: 14,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      transition: "border-color .2s, transform .2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--p3-accent)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--p3-line)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "var(--p3-bg-2)",
                        borderRadius: 8,
                        fontSize: 24,
                      }}
                    >
                      {s.icon || s.name.charAt(0)}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--p3-ink)",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.name}
                    </div>
                    {proficiencyDots(s.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
