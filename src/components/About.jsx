import React from "react";

const EXPERIENCE = [
  {
    period: "May 2025 — Present",
    title: "DevOps Engineer",
    company: "Inexture Solutions",
    location: "Ahmedabad, India",
    points: [
      "Owned CI/CD pipelines, Dockerized services, and deployment ops across 11 projects + 7 AI PoCs (GKE, AWS, GCP).",
      "Worked on GKE deployments for Helpr — multi-environment support, prod/staging issue resolution.",
      "Designed a test-gated Jenkins pipeline for ADCA Collab that blocks broken merges into Dev; also produced client-side cloud cost estimations.",
      "For AI PoCs: built Jenkins pipelines with SonarQube quality gates + automated test stages, conditional monorepo stages (FE/BE), Docker runtime, Nginx reverse proxy, Certbot TLS.",
      "AI PoC scope was deployment + infrastructure only — application and model development were handled by other teams.",
      "Multi-tenant Nginx routing for Solvere; Elasticsearch + CI/CD for MassAI; GCP account setup for NextGen Global.",
    ],
  },
    {
    period: "Mar 2024 — May 2025",
    title: "Professional Development (Sabbatical)",
    company: "Independent",
    location: "India",
    points: [
      "HashiCorp Terraform Associate (003).",
      "Deep AWS architecture + Kubernetes internals labs.",
      "Managed family healthcare responsibilities while staying technically sharp.",
    ],
  },
  {
    period: "Feb 2023 — Feb 2024",
    title: "DevOps Engineer",
    company: "Highskyit Solutions",
    location: "Ahmedabad, India",
    points: [
      "Designed and deployed a Kubernetes cluster on DigitalOcean hosting Apache Kafka + ZooKeeper for distributed messaging.",
      "Built and maintained a version-pinned custom Docker image for an Asterisk calling server; pushed to client infrastructure for deploy consistency.",
      "Owned deploy + ops for the Metropolis project on AWS: frequent deploys, infra reporting, DB-server tracking, environment management.",
    ],
  },

];

const CORE = [
  { label: "Cloud", items: ["AWS", "GCP", "Azure", "DigitalOcean"] },
  { label: "Orchestration", items: ["Kubernetes", "Docker", "Helm", "Istio"] },
  { label: "IaC", items: ["Terraform", "Terragrunt", "Ansible", "AWS CDK"] },
  { label: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI", "Bitbucket"] },
];

const CERTS = [
  { name: "HashiCorp Terraform Associate (003)", issuer: "HashiCorp", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", year: "2022" },
];

const sectionLabel = (s) => (
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
    {s}
  </div>
);

const About = () => (
  <section
    id="about"
    style={{
      padding: "96px 24px",
      background: "var(--p3-bg-1)",
      borderTop: "1px solid var(--p3-line)",
      color: "var(--p3-ink)",
    }}
  >
    <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 64 }}>
      {/* Header */}
      <div>
        {sectionLabel("~/about")}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          About
        </h2>
        <p
          style={{
            marginTop: 12,
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--p3-ink-mut)",
            maxWidth: 760,
          }}
        >
          DevOps engineer, 2+ yrs production experience across AWS, Azure, GCP.
          Strong on IaC (Terraform, Terragrunt), container orchestration
          (Kubernetes, Istio), CI/CD automation. Migrated legacy systems to
          containerized microservices in SaaS, fintech, AI workloads. Non-CS
          background, built up through practical work + top-tier certs.
        </p>
      </div>

      {/* Core skills */}
      <div>
        {sectionLabel("core_stack")}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {CORE.map((c) => (
            <div
              key={c.label}
              style={{
                background: "var(--p3-bg-2)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-md)",
                padding: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-ink-mut)",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  marginBottom: 12,
                }}
              >
                {c.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {c.items.map((i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--p3-ink)",
                      background: "var(--p3-bg-1)",
                      border: "1px solid var(--p3-line)",
                      padding: "3px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience timeline */}
      <div>
        {sectionLabel("experience.log")}
        <div
          style={{
            position: "relative",
            paddingLeft: 24,
            borderLeft: "1px solid var(--p3-line)",
          }}
        >
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: 32 }}>
              <span
                style={{
                  position: "absolute",
                  left: -32,
                  top: 6,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: i === 0 ? "var(--p3-ok)" : "var(--p3-bg-2)",
                  border: `2px solid ${i === 0 ? "var(--p3-ok)" : "var(--p3-line)"}`,
                  boxShadow: i === 0 ? "0 0 12px var(--p3-ok)" : "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--p3-ink-mut)",
                  marginBottom: 4,
                }}
              >
                {e.period} · {e.location}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--p3-ink)",
                  marginBottom: 2,
                }}
              >
                {e.title}
              </div>
              <div style={{ fontSize: 14, color: "var(--p3-accent)", marginBottom: 12 }}>
                {e.company}
              </div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--p3-ink-mut)", lineHeight: 1.65 }}>
                {e.points.map((p, j) => (
                  <li key={j} style={{ fontSize: 14, marginBottom: 4 }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        {sectionLabel("certifications")}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
          }}
        >
          {CERTS.map((c) => (
            <div
              key={c.name}
              style={{
                background: "var(--p3-bg-2)",
                border: "1px solid var(--p3-line)",
                borderRadius: "var(--radius-md)",
                padding: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span className="p3-pill p3-pill--ok" style={{ padding: "4px 8px", fontSize: 10 }}>
                ✓ verified
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    color: "var(--p3-ink)",
                    fontSize: 14,
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--p3-ink-mut)",
                    marginTop: 2,
                  }}
                >
                  {c.issuer} · {c.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
