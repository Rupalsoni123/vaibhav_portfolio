import React from "react";

const ROWS = [
  ["⌘K  /  Ctrl K", "Open command palette"],
  ["?", "Show this help"],
  ["g h", "Go Home"],
  ["g a", "Go About"],
  ["g s", "Go Skills"],
  ["g p", "Go Projects"],
  ["g d", "Pipeline demo"],
  ["g b", "Go Blog"],
  ["g c", "Go Contact"],
  ["g l", "Open /lab"],
  ["g u", "Open /uses"],
  ["g n", "Open /now"],
  ["t", "Toggle theme"],
  ["esc", "Close modal"],
];

const HelpModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Keyboard shortcuts"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(11, 16, 32, 0.7)",
        backdropFilter: "blur(6px)",
        zIndex: 2000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px, 100%)",
          background: "var(--p3-bg-1)",
          border: "1px solid var(--p3-line)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--p3-accent)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
              }}
            >
              ~/help
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                color: "var(--p3-ink)",
                fontSize: 22,
              }}
            >
              Keyboard shortcuts
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "transparent",
              color: "var(--p3-ink-mut)",
              border: "1px solid var(--p3-line)",
              borderRadius: 6,
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              padding: "4px 8px",
            }}
          >
            esc
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "8px 16px",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
          }}
        >
          {ROWS.map(([k, v]) => (
            <React.Fragment key={k}>
              <span
                style={{
                  color: "var(--p3-accent)",
                  background: "var(--p3-bg-0)",
                  padding: "2px 8px",
                  borderRadius: 4,
                  border: "1px solid var(--p3-line)",
                  whiteSpace: "nowrap",
                }}
              >
                {k}
              </span>
              <span style={{ color: "var(--p3-ink)" }}>{v}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
