import React, { useEffect, useRef, useState } from "react";

const STAGES = [
  { id: "commit", label: "commit", logs: ["[git] HEAD → 9f3a2c1", "[scm] author: vaibhav"] },
  { id: "build", label: "build", logs: ["[npm] install...", "[vite] build complete · 9.6s"] },
  { id: "test", label: "test", logs: ["[vitest] 42 passed", "[coverage] 87%"] },
  { id: "scan", label: "scan", logs: ["[sonar] 0 blockers", "[trivy] 0 critical"] },
  { id: "deploy", label: "deploy", logs: ["[k8s] rolling update", "[k8s] 3/3 ready"] },
  { id: "observe", label: "observe", logs: ["[grafana] p95 142ms", "[slo] burn rate 0.04"] },
];

const PipelineDemo = () => {
  const [stageIdx, setStageIdx] = useState(-1);
  const [logs, setLogs] = useState([]);
  const [failure, setFailure] = useState(false);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);
  const logRef = useRef(null);

  const stop = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setRunning(false);
  };

  const run = () => {
    stop();
    setLogs([]);
    setStageIdx(-1);
    setRunning(true);
    let i = 0;
    const tick = () => {
      if (i >= STAGES.length) {
        setRunning(false);
        return;
      }
      const s = STAGES[i];
      const isFail = failure && s.id === "test";
      setStageIdx(i);
      const lines = isFail
        ? [`[${s.label}] ✗ FAIL · expected 200, got 500`, "[ci] aborting · rollback"]
        : s.logs.map((l) => `[${s.label}] ${l}`);
      lines.forEach((line, j) =>
        setTimeout(() => {
          setLogs((prev) => [...prev, line]);
          if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
        }, j * 220)
      );
      i += 1;
      if (isFail) {
        timer.current = setTimeout(() => setRunning(false), 800);
        return;
      }
      timer.current = setTimeout(tick, 900);
    };
    tick();
  };

  useEffect(() => () => stop(), []);

  const stageState = (idx) => {
    if (stageIdx < idx) return "pending";
    if (failure && STAGES[idx]?.id === "test" && stageIdx >= idx) return "err";
    if (failure && stageIdx >= idx && idx > STAGES.findIndex((s) => s.id === "test")) return "pending";
    if (stageIdx === idx && running) return "warn";
    return "ok";
  };

  const dotColor = (state) =>
    ({ pending: "var(--p3-bg-2)", warn: "var(--p3-warn)", err: "var(--p3-err)", ok: "var(--p3-ok)" }[state]);

  return (
    <section
      id="pipeline"
      style={{
        padding: "96px 24px",
        background: "var(--p3-bg-1)",
        borderTop: "1px solid var(--p3-line)",
        color: "var(--p3-ink)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
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
            ~/pipeline.demo
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
            See it run
          </h2>
          <p style={{ color: "var(--p3-ink-mut)", margin: "8px 0 0", maxWidth: 560 }}>
            Click <strong>run</strong>. Watch stages flow. Toggle <strong>inject failure</strong> to see rollback.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)",
            gap: 20,
          }}
          className="pipeline-grid"
        >
          {/* Stage rail */}
          <div
            style={{
              background: "var(--p3-bg-2)",
              border: "1px solid var(--p3-line)",
              borderRadius: "var(--radius-lg)",
              padding: 16,
            }}
          >
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
              <button
                onClick={running ? stop : run}
                style={{
                  padding: "8px 14px",
                  background: running ? "var(--p3-warn)" : "var(--p3-accent)",
                  color: "var(--p3-bg-0)",
                  border: "none",
                  borderRadius: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                }}
              >
                {running ? "■ stop" : "▶ run"}
              </button>
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 12px",
                  border: "1px solid var(--p3-line)",
                  borderRadius: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--p3-ink-mut)",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={failure}
                  onChange={(e) => setFailure(e.target.checked)}
                  style={{ accentColor: "var(--p3-err)" }}
                />
                inject failure
              </label>
            </div>

            {STAGES.map((s, i) => {
              const state = stageState(i);
              return (
                <div
                  key={s.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "8px 10px",
                    borderRadius: 8,
                    background: stageIdx === i ? "var(--p3-bg-1)" : "transparent",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: dotColor(state),
                      boxShadow: state === "ok" || state === "err" ? `0 0 8px ${dotColor(state)}` : "none",
                      transition: "background .2s",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: state === "pending" ? "var(--p3-ink-mut)" : "var(--p3-ink)",
                      textTransform: "lowercase",
                    }}
                  >
                    {s.label}
                  </span>
                  {state === "warn" && (
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--p3-warn)",
                      }}
                    >
                      running…
                    </span>
                  )}
                  {state === "err" && (
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "var(--p3-err)",
                      }}
                    >
                      failed
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Log feed */}
          <div
            style={{
              background: "var(--p3-bg-0)",
              border: "1px solid var(--p3-line)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: 280,
            }}
          >
            <div
              style={{
                padding: "8px 14px",
                background: "var(--p3-bg-2)",
                borderBottom: "1px solid var(--p3-line)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--p3-ink-mut)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5C7A" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB454" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3DDC97" }} />
              <span style={{ marginLeft: 12 }}>~/pipeline.log</span>
            </div>
            <pre
              ref={logRef}
              aria-live="polite"
              style={{
                margin: 0,
                padding: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--p3-ink)",
                whiteSpace: "pre-wrap",
                overflowY: "auto",
                flex: 1,
                maxHeight: 360,
              }}
            >
              {logs.length === 0 ? (
                <span style={{ color: "var(--p3-ink-mut)" }}>
                  $ awaiting run...
                </span>
              ) : (
                logs.map((l, i) => (
                  <div key={i}>
                    <span style={{ color: "var(--p3-ink-mut)" }}>
                      {new Date().toLocaleTimeString("en-US", { hour12: false })}
                    </span>{" "}
                    <span
                      style={{
                        color: l.includes("FAIL") || l.includes("aborting") ? "var(--p3-err)" : "var(--p3-ink)",
                      }}
                    >
                      {l}
                    </span>
                  </div>
                ))
              )}
            </pre>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .pipeline-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default PipelineDemo;
