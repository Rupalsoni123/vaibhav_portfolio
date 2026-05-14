import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/ThemeContext";
import navLinks from "../data/navlinks";

const SECTIONS = navLinks.map((n) => n.link.toLowerCase());

const Navbar = ({ onOpenPalette }) => {
  const { theme, mode, setMode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const cycleMode = () => {
    const next = mode === "dark" ? "light" : mode === "light" ? "system" : "dark";
    setMode(next);
  };
  const modeIcon = mode === "system" ? "◐" : theme === "dark" ? "☾" : "☀";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => (e) => {
    e?.preventDefault();
    const el = document.getElementById(id.toLowerCase());
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      aria-label="Primary"
      className={`p3-nav${scrolled ? " is-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "10px 0",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        transition: "background .25s ease, border-color .25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a href="#home" onClick={go("home")} className="p3-nav-logo" aria-label="Vaibhav Soni - home">
          <span>vaibhav</span>
          <span className="slash">/</span>
          <span>soni</span>
        </a>

        <div className="nav-desk" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {navLinks.map((n) => {
            const id = n.link.toLowerCase();
            return (
              <a
                key={n.id}
                href={`#${id}`}
                onClick={go(id)}
                className="p3-nav-link"
                data-active={active === id}
              >
                {n.link}
              </a>
            );
          })}
          <Link to="/lab" className="p3-nav-pill p3-nav-pill--accent" style={{ marginLeft: 8 }} title="Open Lab (OS shell)">
            /lab
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            title="Command palette (⌘K)"
            className="p3-nav-pill nav-desk-only"
          >
            ⌘K
          </button>

          <button
            type="button"
            onClick={cycleMode}
            aria-label={`Theme: ${mode}`}
            title={`Theme: ${mode} (click to cycle)`}
            className="p3-nav-pill"
            style={{ minWidth: 36, height: 36, justifyContent: "center" }}
          >
            <span aria-hidden="true">{modeIcon}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p3-nav-pill nav-mobile-only"
            style={{ display: "none", justifyContent: "center", width: 36, height: 36, fontSize: 16 }}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div
          className="nav-mobile-open"
          style={{
            background: "var(--p3-bg-1)",
            borderTop: "1px solid var(--p3-line)",
            padding: 12,
          }}
        >
          {navLinks.map((n) => {
            const id = n.link.toLowerCase();
            return (
              <a
                key={n.id}
                href={`#${id}`}
                onClick={go(id)}
                style={{
                  display: "block",
                  padding: "10px 12px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  color: active === id ? "var(--p3-accent)" : "var(--p3-ink)",
                  textDecoration: "none",
                }}
              >
                {n.link}
              </a>
            );
          })}
          <Link
            to="/lab"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "10px 12px",
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              color: "var(--p3-accent)",
              textDecoration: "none",
            }}
          >
            /lab
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .nav-desk { display: none !important; }
          .nav-desk-only { display: none !important; }
          .nav-mobile-only { display: inline-flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
