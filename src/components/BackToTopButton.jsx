import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: "fixed",
        right: 20,
        bottom: 140,
        zIndex: 47,
        width: 44,
        height: 44,
        borderRadius: 12,
        border: "1px solid var(--p3-line)",
        background: "var(--p3-bg-1)",
        color: "var(--p3-ink)",
        cursor: "pointer",
        boxShadow: "var(--shadow-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform .15s, color .15s, border-color .15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.color = "var(--p3-accent)";
        e.currentTarget.style.borderColor = "var(--p3-accent)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.color = "var(--p3-ink)";
        e.currentTarget.style.borderColor = "var(--p3-line)";
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
