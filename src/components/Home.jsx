import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import CursorGrid from "./CursorGrid";
import contactInfo from "../data/contactInfo";
import resume from "../assets/resume.pdf";

const STACK = [
  "AWS", "GCP", "Azure",
  "Kubernetes", "Terraform", "Terragrunt",
  "Docker", "Jenkins", "GitHub Actions",
  "Istio", "Prometheus", "Grafana",
];

const SLO = [
  { label: "Status", value: "shipping", tone: "ok" },
  { label: "Projects owned", value: "14+", tone: "ok" },
  { label: "AI PoCs deployed", value: "7", tone: "ok" },
  { label: "Scope", value: "infra + CI/CD", tone: "ok" },
];

const Sparkline = () => (
  <svg viewBox="0 0 120 32" width="100%" height="32" aria-hidden="true">
    <polyline
      fill="none"
      stroke="var(--p3-ok)"
      strokeWidth="1.5"
      points="0,22 12,18 24,24 36,16 48,20 60,12 72,14 84,8 96,12 108,6 120,10"
    />
    <polyline
      fill="none"
      stroke="var(--p3-ok)"
      strokeWidth="1.5"
      opacity="0.25"
      points="0,28 12,28 24,28 36,28 48,28 60,28 72,28 84,28 96,28 108,28 120,28"
    />
  </svg>
);

const SLOTile = ({ label, value, tone }) => (
  <div
    style={{
      background: "var(--p3-bg-2)",
      border: "1px solid var(--p3-line)",
      borderRadius: "var(--radius-md)",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--p3-ink-mut)",
        textTransform: "uppercase",
        letterSpacing: ".08em",
      }}
    >
      <span>{label}</span>
      <span
        className={`p3-pill p3-pill--${tone}`}
        style={{ padding: "2px 6px", fontSize: 9 }}
      >
        live
      </span>
    </div>
    <div
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 600,
        color: "var(--p3-ink)",
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <Sparkline />
  </div>
);

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const downloadCV = (e) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = resume;
    a.download = "Vaibhav_Soni_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "120px 24px 80px",
        display: "flex",
        alignItems: "center",
        background: "var(--p3-bg-0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CursorGrid height="100%" />
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gap: "48px",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          <span className="p3-pill p3-pill--ok" style={{ marginBottom: 24 }}>
            available · ahmedabad, IST
          </span>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--p3-ink)",
              margin: "0 0 16px",
            }}
          >
            DevOps engineer.
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--p3-accent), var(--p3-accent-2))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ship faster, page less.
            </span>
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--p3-ink-mut)",
              margin: "0 0 32px",
              maxWidth: 540,
            }}
          >
            I'm <strong style={{ color: "var(--p3-ink)" }}>Vaibhav Soni</strong> —
            I build the reliability layer. Production K8s on AWS/GCP/Azure,
            Terraform-first infra, CI/CD pipelines that actually catch bugs,
            observability that wakes the right person.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <button
              onClick={scrollTo("contact")}
              style={{
                padding: "12px 20px",
                background: "var(--p3-accent)",
                color: "var(--p3-bg-0)",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
              }}
            >
              Hire me →
            </button>
            <button
              onClick={scrollTo("projects")}
              style={{
                padding: "12px 20px",
                background: "transparent",
                color: "var(--p3-ink)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-md)",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
              }}
            >
              View work
            </button>
            <button
              onClick={downloadCV}
              style={{
                padding: "12px 20px",
                background: "transparent",
                color: "var(--p3-accent-2)",
                border: "1px solid var(--p3-accent-2)",
                borderRadius: "var(--radius-md)",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
              }}
            >
              ↓ Résumé
            </button>
          </div>

          {/* Stack chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              fontFamily: "var(--font-mono)",
            }}
          >
            {STACK.map((s) => (
              <span
                key={s}
                style={{
                  padding: "4px 10px",
                  fontSize: 12,
                  color: "var(--p3-ink-mut)",
                  background: "var(--p3-bg-1)",
                  border: "1px solid var(--p3-line)",
                  borderRadius: 6,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right: SLO board */}
        <div
          style={{
            background: "var(--p3-bg-1)",
            border: "1px solid var(--p3-line)",
            borderRadius: "var(--radius-lg)",
            padding: 20,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
              paddingBottom: 12,
              borderBottom: "1px solid var(--p3-line)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar
                size={36}
                alt=""
                eager
                style={{ border: "2px solid var(--p3-accent)" }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "var(--p3-ink-mut)",
                  }}
                >
                  ~/status
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--p3-ink)",
                  }}
                >
                  Vaibhav Soni · SRE/DevOps
                </div>
              </div>
            </div>
            <span className="p3-pill p3-pill--ok">all systems go</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            {SLO.map((s) => (
              <SLOTile key={s.label} {...s} />
            ))}
          </div>

          <div
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: "1px solid var(--p3-line)",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--p3-ink-mut)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              {contactInfo.socialLinks?.length || 0} channels ·{" "}
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                style={{ color: "var(--p3-accent)" }}
              >
                page on-call
              </a>
            </span>
            <span>
              {time.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              IST
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Home;
