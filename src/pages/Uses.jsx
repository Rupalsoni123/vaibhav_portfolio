import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const SECTIONS = [
  {
    label: "editor",
    items: [
      ["VS Code", "Primary, with Vim mode"],
      ["JetBrains Mono", "Mono font everywhere"],
      ["Tokyo Night", "Color theme"],
    ],
  },
  {
    label: "cli",
    items: [
      ["zsh + starship", "Shell + prompt"],
      ["kubectl + k9s", "K8s ops"],
      ["terraform + tflint", "IaC + linting"],
      ["aws-cli + gcloud + az", "Cloud CLIs"],
      ["ripgrep + fd + jq", "Search + filter"],
      ["lazygit", "Git TUI"],
    ],
  },
  {
    label: "infra daily",
    items: [
      ["Terraform / Terragrunt", "IaC"],
      ["Kubernetes (GKE/EKS)", "Orchestration"],
      ["Istio", "Service mesh"],
      ["ArgoCD", "GitOps deploys"],
      ["Prometheus + Grafana", "Metrics + dashboards"],
      ["Loki + Tempo", "Logs + traces"],
    ],
  },
  {
    label: "ci/cd",
    items: [
      ["GitHub Actions", "Default pipeline"],
      ["Jenkins", "Legacy + multi-stage"],
      ["SonarQube", "Static analysis"],
      ["Trivy", "Image scanning"],
    ],
  },
  {
    label: "hardware",
    items: [
      ["Linux laptop", "Primary dev box"],
      ["External 27\" monitor", "Vertical split"],
      ["Mechanical kbd", "Tactile switches"],
    ],
  },
];

const Uses = () => {
  useEffect(() => {
    document.body.setAttribute("data-mode", "scroll");
    return () => document.body.removeAttribute("data-mode");
  }, []);

  return (
    <>
      <SEO 
        title="Uses"
        description="The tools, software, and hardware I use for DevOps engineering and software development."
        url="/uses"
      />
      <main
      style={{
        padding: "120px 24px 96px",
        background: "var(--p3-bg-0)",
        color: "var(--p3-ink)",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Link
          to="/"
          style={{
            display: "inline-block",
            color: "var(--p3-accent)",
            textDecoration: "none",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            marginBottom: 24,
          }}
        >
          ← back to /
        </Link>
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
          ~/uses
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          What I use
        </h1>
        <p style={{ color: "var(--p3-ink-mut)", margin: "0 0 40px", lineHeight: 1.6 }}>
          Tools I reach for daily. Updated as my stack changes.
        </p>

        {SECTIONS.map((s) => (
          <section key={s.label} style={{ marginBottom: 40 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--p3-accent)",
                textTransform: "uppercase",
                letterSpacing: ".15em",
                marginBottom: 12,
              }}
            >
              {s.label}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "8px 24px",
              }}
            >
              {s.items.map(([k, v]) => (
                <React.Fragment key={k}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--p3-ink)" }}>{k}</span>
                  <span style={{ color: "var(--p3-ink-mut)", fontSize: 14 }}>{v}</span>
                </React.Fragment>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
    </>
  );
};

export default Uses;
