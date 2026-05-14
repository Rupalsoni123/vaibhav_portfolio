import React, { useState, useMemo } from "react";
import { blogPosts } from "../data/blogData";

const Blog = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const posts = useMemo(
    () => (active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active]
  );

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  if (selected) {
    return (
      <section
        id="blog"
        style={{
          padding: "96px 24px",
          background: "var(--p3-bg-1)",
          borderTop: "1px solid var(--p3-line)",
          color: "var(--p3-ink)",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <button
            onClick={() => setSelected(null)}
            style={{
              background: "transparent",
              color: "var(--p3-accent)",
              border: "1px solid var(--p3-line)",
              borderRadius: "var(--radius-md)",
              padding: "6px 12px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              cursor: "pointer",
              marginBottom: 24,
            }}
          >
            ← back to /blog
          </button>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--p3-ink-mut)",
              marginBottom: 8,
            }}
          >
            {formatDate(selected.publishDate)} · {selected.readTime}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 600,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            {selected.title}
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
            {selected.tags?.map((t) => (
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
                #{t}
              </span>
            ))}
          </div>
          <pre
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--p3-ink-mut)",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              margin: 0,
              background: "transparent",
            }}
          >
            {selected.content}
          </pre>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog"
      style={{
        padding: "96px 24px",
        background: "var(--p3-bg-1)",
        borderTop: "1px solid var(--p3-line)",
        color: "var(--p3-ink)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 32, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "end", gap: 24 }}>
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
              ~/blog
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
              Notes from the trenches
            </h2>
            <p style={{ color: "var(--p3-ink-mut)", margin: "8px 0 0", maxWidth: 560 }}>
              Field notes on migrations, K8s, IaC, and incident lessons.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
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
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {posts.map((p) => (
            <article
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                background: "var(--p3-bg-2)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-lg)",
                padding: 20,
                cursor: "pointer",
                transition: "border-color .2s, transform .2s",
                display: "flex",
                flexDirection: "column",
                gap: 12,
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
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-ink-mut)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{formatDate(p.publishDate)}</span>
                <span>{p.readTime}</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "var(--p3-ink)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--p3-ink-mut)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.excerpt}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: "auto" }}>
                {p.tags?.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: "var(--p3-ink-mut)",
                      background: "var(--p3-bg-1)",
                      padding: "2px 6px",
                      borderRadius: 4,
                      border: "1px solid var(--p3-line)",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--p3-accent)",
                  marginTop: 4,
                }}
              >
                read →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
