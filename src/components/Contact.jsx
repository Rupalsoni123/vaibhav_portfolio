import React, { useState } from "react";

const CHANNELS = [
  { label: "Email", value: "vaibhavsoni5567@gmail.com", link: "mailto:vaibhavsoni5567@gmail.com" },
  { label: "Phone / WhatsApp", value: "+91 8890944027", link: "tel:+918890944027" },
  { label: "Location", value: "Ahmedabad, India", link: "https://maps.google.com/?q=Ahmedabad" },
  { label: "LinkedIn", value: "linkedin.com/in/vaibhavsonii21", link: "https://linkedin.com/in/vaibhavsonii21" },
  { label: "GitHub", value: "github.com/vaibhav21soni", link: "https://github.com/vaibhav21soni" },
];

const fieldStyle = {
  width: "100%",
  background: "var(--p3-bg-0)",
  border: "1px solid var(--p3-line)",
  borderRadius: "var(--radius-md)",
  padding: "10px 12px",
  color: "var(--p3-ink)",
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  outline: "none",
  transition: "border-color .15s",
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  color: "var(--p3-ink-mut)",
  textTransform: "uppercase",
  letterSpacing: ".1em",
  marginBottom: 6,
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("https://getform.io/f/bjjowvwb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _gotcha: "" }),
      });
      if (!res.ok) throw new Error("HTTP");
      setStatus({ type: "success", message: "Message sent. Reply within 24h." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch {
      setStatus({ type: "error", message: "Send failed. Try email: vaibhavsoni5567@gmail.com" });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "96px 24px",
        background: "var(--p3-bg-0)",
        borderTop: "1px solid var(--p3-line)",
        color: "var(--p3-ink)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
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
            ~/contact
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
            Page on-call
          </h2>
          <p style={{ color: "var(--p3-ink-mut)", margin: "8px 0 0", maxWidth: 600 }}>
            Infra question, role, or migration plan? Send a short note. I reply within 24h.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.4fr)",
            gap: 24,
          }}
          className="contact-grid"
        >
          {/* Channels */}
          <div
            style={{
              background: "var(--p3-bg-1)",
              border: "1px solid var(--p3-line)",
              borderRadius: "var(--radius-lg)",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--p3-ink-mut)",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                paddingBottom: 8,
                borderBottom: "1px solid var(--p3-line)",
              }}
            >
              channels
            </div>
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.link}
                target={c.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  display: "block",
                  padding: 10,
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  border: "1px solid var(--p3-line)",
                  background: "var(--p3-bg-2)",
                  transition: "border-color .15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--p3-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--p3-line)")}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--p3-ink-mut)",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    color: "var(--p3-ink)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    marginTop: 2,
                    wordBreak: "break-all",
                  }}
                >
                  {c.value}
                </div>
              </a>
            ))}
            <div
              style={{
                marginTop: "auto",
                paddingTop: 12,
                borderTop: "1px solid var(--p3-line)",
              }}
            >
              <span className="p3-pill p3-pill--ok">available · open to roles</span>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            style={{
              background: "var(--p3-bg-1)",
              border: "1px solid var(--p3-line)",
              borderRadius: "var(--radius-lg)",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  style={fieldStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@domain.com"
                  style={fieldStyle}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Migration plan / role / infra question"
                style={fieldStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="Drop context. Stack, scale, timeline."
                style={{ ...fieldStyle, resize: "vertical", fontFamily: "var(--font-sans)" }}
              />
            </div>

            {status.message && (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: "10px 12px",
                  borderRadius: "var(--radius-md)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: status.type === "success" ? "var(--p3-ok)" : "var(--p3-err)",
                  background: "var(--p3-bg-2)",
                  border: `1px solid ${status.type === "success" ? "var(--p3-ok)" : "var(--p3-err)"}`,
                }}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={busy}
              style={{
                padding: "12px 20px",
                background: busy ? "var(--p3-bg-2)" : "var(--p3-accent)",
                color: busy ? "var(--p3-ink-mut)" : "var(--p3-bg-0)",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                fontSize: 14,
                fontFamily: "var(--font-mono)",
                textTransform: "uppercase",
                letterSpacing: ".12em",
                cursor: busy ? "not-allowed" : "pointer",
              }}
            >
              {busy ? "$ sending…" : "$ git commit && send"}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
