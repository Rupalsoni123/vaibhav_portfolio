import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects";
import { blogPosts } from "../data/blogData";
import resume from "../assets/resume.pdf";

const buildItems = (navigate) => {
  const goto = (id) => () => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  const route = (path) => () => navigate(path);

  return [
    { group: "nav", label: "Home", keys: "g h", run: goto("home") },
    { group: "nav", label: "About", keys: "g a", run: goto("about") },
    { group: "nav", label: "Skills", keys: "g s", run: goto("skills") },
    { group: "nav", label: "Projects", keys: "g p", run: goto("projects") },
    { group: "nav", label: "Pipeline demo", keys: "g d", run: goto("pipeline") },
    { group: "nav", label: "Blog", keys: "g b", run: goto("blog") },
    { group: "nav", label: "Contact", keys: "g c", run: goto("contact") },
    { group: "pages", label: "/uses", run: route("/uses") },
    { group: "pages", label: "/now", run: route("/now") },
    { group: "pages", label: "/lab (OS shell)", run: route("/lab") },
    { group: "pages", label: "Download résumé", run: () => window.open(resume, "_blank") },
    { group: "external", label: "GitHub →", run: () => window.open("https://github.com/vaibhav21soni", "_blank") },
    { group: "external", label: "LinkedIn →", run: () => window.open("https://linkedin.com/in/vaibhavsonii21", "_blank") },
    { group: "external", label: "Email →", run: () => (window.location.href = "mailto:vaibhavsoni5567@gmail.com") },
    ...projectsData.slice(0, 8).map((p) => ({
      group: "projects",
      label: p.title,
      run: goto("projects"),
    })),
    ...blogPosts.map((p) => ({
      group: "blog",
      label: p.title,
      run: goto("blog"),
    })),
  ];
};

const CommandPalette = ({ open, onClose }) => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const items = useMemo(() => buildItems(navigate), [navigate]);

  const filtered = useMemo(() => {
    if (!q) return items;
    const t = q.toLowerCase();
    return items.filter((i) => i.label.toLowerCase().includes(t) || i.group.includes(t));
  }, [items, q]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQ("");
      setIdx(0);
    }
  }, [open]);

  useEffect(() => {
    setIdx(0);
  }, [q]);

  const onKey = (e) => {
    if (e.key === "Escape") return onClose();
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => Math.min(filtered.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[idx];
      if (item) {
        item.run();
        onClose();
      }
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(11, 16, 32, 0.7)",
        backdropFilter: "blur(6px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "10vh",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(640px, 92vw)",
          background: "var(--p3-bg-1)",
          border: "1px solid var(--p3-line)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          overflow: "hidden",
        }}
      >
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={onKey}
          placeholder="$ search nav, pages, projects, posts…"
          aria-label="Search commands"
          style={{
            width: "100%",
            border: "none",
            borderBottom: "1px solid var(--p3-line)",
            background: "transparent",
            padding: "16px 18px",
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            color: "var(--p3-ink)",
            outline: "none",
          }}
        />
        <div
          style={{
            maxHeight: 360,
            overflowY: "auto",
            padding: 6,
          }}
        >
          {filtered.length === 0 && (
            <div
              style={{
                padding: 16,
                color: "var(--p3-ink-mut)",
                fontFamily: "var(--font-mono)",
                fontSize: 13,
              }}
            >
              no matches.
            </div>
          )}
          {filtered.map((item, i) => (
            <button
              key={`${item.group}-${item.label}-${i}`}
              onClick={() => {
                item.run();
                onClose();
              }}
              onMouseEnter={() => setIdx(i)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px 14px",
                background: idx === i ? "var(--p3-bg-2)" : "transparent",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "var(--p3-ink)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: "var(--p3-accent)",
                  letterSpacing: ".1em",
                  minWidth: 60,
                }}
              >
                {item.group}
              </span>
              <span style={{ flex: 1, color: "var(--p3-ink)" }}>{item.label}</span>
              {item.keys && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--p3-ink-mut)",
                    background: "var(--p3-bg-0)",
                    padding: "2px 6px",
                    borderRadius: 4,
                    border: "1px solid var(--p3-line)",
                  }}
                >
                  {item.keys}
                </span>
              )}
            </button>
          ))}
        </div>
        <div
          style={{
            padding: "8px 14px",
            borderTop: "1px solid var(--p3-line)",
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--p3-ink-mut)",
          }}
        >
          <span>↑↓ navigate · ↵ select · esc close</span>
          <span>? for shortcuts</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
