import React, { useState, useMemo } from "react";
import projectsData from "../data/projects";

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 28);

const WindowChrome = ({ title }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      background: "var(--p3-bg-2)",
      borderBottom: "1px solid var(--p3-line)",
    }}
  >
    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#D9646F" }} />
    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E8B339" }} />
    <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#5FB67A" }} />
    <span
      style={{
        marginLeft: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        color: "var(--p3-ink-mut)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {title}
    </span>
  </div>
);

const MetricRow = ({ metrics = [] }) => {
  if (!metrics.length) return null;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${Math.min(metrics.length, 3)}, 1fr)`,
        gap: 8,
        margin: "12px 0",
      }}
    >
      {metrics.slice(0, 3).map((m) => (
        <div
          key={m.label}
          style={{
            background: "var(--p3-bg-0)",
            border: "1px solid var(--p3-line)",
            borderRadius: 8,
            padding: "8px 10px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--p3-ink-mut)",
              textTransform: "uppercase",
              letterSpacing: ".06em",
            }}
          >
            {m.label}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 18,
              fontWeight: 600,
              color: `var(--p3-${m.tone || "ok"})`,
              lineHeight: 1.2,
            }}
          >
            {m.value}
          </div>
        </div>
      ))}
    </div>
  );
};

const TerminalCard = ({ project, onOpen }) => (
  <article
    style={{
      background: "var(--p3-bg-1)",
      border: "1px solid var(--p3-line)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      boxShadow: "var(--shadow-md)",
      transition: "transform .2s ease-out, border-color .2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.borderColor = "var(--p3-accent)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.borderColor = "var(--p3-line)";
    }}
  >
    <WindowChrome
      title={`~/${(project.org || "projects").toLowerCase()}/${slug(project.title)}`}
    />

    <div style={{ padding: "16px 18px 18px", flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--p3-ink-mut)",
            textTransform: "uppercase",
            letterSpacing: ".08em",
          }}
        >
          {project.category}
        </span>
        {project.org && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--p3-accent)",
              border: "1px solid var(--p3-line)",
              padding: "2px 8px",
              borderRadius: 4,
            }}
          >
            {project.org}
          </span>
        )}
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 20,
          fontWeight: 600,
          color: "var(--p3-ink)",
          margin: "0 0 8px",
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          color: "var(--p3-ink-mut)",
          lineHeight: 1.55,
          margin: "0 0 4px",
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {project.role && (
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--p3-warn)",
            background: "rgba(232, 179, 57, 0.08)",
            border: "1px solid rgba(232, 179, 57, 0.3)",
            padding: "4px 8px",
            borderRadius: 6,
            marginTop: 8,
            marginBottom: 4,
          }}
        >
          scope: {project.role}
        </div>
      )}

      <MetricRow metrics={project.metrics} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
        {project.technologies.slice(0, 5).map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--p3-ink-mut)",
              background: "var(--p3-bg-2)",
              padding: "2px 8px",
              borderRadius: 4,
              border: "1px solid var(--p3-line)",
            }}
          >
            {t}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--p3-ink-mut)" }}>
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onOpen(project)}
        style={{
          marginTop: "auto",
          padding: "8px 12px",
          background: "transparent",
          color: "var(--p3-accent)",
          border: "1px solid var(--p3-accent)",
          borderRadius: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          fontWeight: 600,
          cursor: "pointer",
          textTransform: "lowercase",
          letterSpacing: ".05em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--p3-accent)";
          e.currentTarget.style.color = "var(--p3-bg-0)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "var(--p3-accent)";
        }}
        aria-label={`View details for ${project.title}`}
      >
        $ cat details →
      </button>
    </div>
  </article>
);

const DetailsModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(14, 17, 22, 0.75)",
        backdropFilter: "blur(6px)",
        zIndex: 2000,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "stretch",
      }}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(600px, 100%)",
          background: "var(--p3-bg-1)",
          borderLeft: "1px solid var(--p3-line)",
          overflowY: "auto",
          boxShadow: "var(--shadow-xl)",
        }}
      >
        <WindowChrome
          title={`~/${(project.org || "projects").toLowerCase()}/${slug(project.title)}`}
        />
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16 }}>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-accent)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                {project.category} · {project.org}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "var(--p3-ink)",
                  margin: "6px 0 0",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close details"
              style={{
                background: "transparent",
                color: "var(--p3-ink-mut)",
                border: "1px solid var(--p3-line)",
                borderRadius: 6,
                padding: "4px 10px",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
              }}
            >
              esc
            </button>
          </div>

          {project.role && (
            <div
              style={{
                marginTop: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--p3-warn)",
                background: "rgba(232, 179, 57, 0.08)",
                border: "1px solid rgba(232, 179, 57, 0.3)",
                padding: "8px 12px",
                borderRadius: 8,
              }}
            >
              scope: {project.role}
            </div>
          )}

          <p
            style={{
              marginTop: 16,
              color: "var(--p3-ink)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            {project.longDescription || project.description}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-ink-mut)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  marginTop: 24,
                  marginBottom: 8,
                }}
              >
                metrics
              </div>
              <MetricRow metrics={project.metrics} />
            </>
          )}

          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--p3-ink-mut)",
              textTransform: "uppercase",
              letterSpacing: ".1em",
              marginTop: 24,
              marginBottom: 8,
            }}
          >
            stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {project.technologies.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--p3-ink)",
                  background: "var(--p3-bg-2)",
                  padding: "3px 10px",
                  borderRadius: 4,
                  border: "1px solid var(--p3-line)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {project.evidenceStatus && (
            <div
              style={{
                marginTop: 24,
                padding: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--p3-ink-mut)",
                background: "var(--p3-bg-0)",
                border: "1px dashed var(--p3-line)",
                borderRadius: 8,
              }}
            >
              evidence: {project.evidenceStatus}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    const base = active === "All" ? projectsData : projectsData.filter((p) => p.category === active);
    const featured = base.filter((p) => p.featured);
    const rest = base.filter((p) => !p.featured);
    return showAll ? [...featured, ...rest] : featured;
  }, [active, showAll]);

  React.useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section
      id="projects"
      style={{
        padding: "96px 24px",
        background: "var(--p3-bg-0)",
        borderTop: "1px solid var(--p3-line)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            marginBottom: 32,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 24,
          }}
        >
          <div>
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
              ~/projects
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 600,
                color: "var(--p3-ink)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Selected work
            </h2>
            <p style={{ color: "var(--p3-ink-mut)", margin: "8px 0 0", maxWidth: 560 }}>
              Production systems on AWS, GCP, Azure, DigitalOcean. Click any tile for stack and scope.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {categories.slice(0, 7).map((c) => {
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
        </div>

        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {filtered.map((p) => (
            <TerminalCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>

        {!showAll && projectsData.some((p) => !p.featured) && (
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                padding: "10px 18px",
                background: "transparent",
                color: "var(--p3-accent)",
                border: "1px solid var(--p3-accent)",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              $ ls -la projects/ &nbsp;→&nbsp; show all
            </button>
          </div>
        )}
      </div>

      <DetailsModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
