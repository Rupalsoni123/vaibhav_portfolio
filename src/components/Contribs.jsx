import React, { useEffect, useState } from "react";

const LEVEL_BG = [
  "rgba(230,236,255,0.05)",
  "rgba(61, 220, 151, 0.25)",
  "rgba(61, 220, 151, 0.5)",
  "rgba(61, 220, 151, 0.75)",
  "rgba(61, 220, 151, 1)",
];

const Contribs = () => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("/contribs.json", { cache: "force-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject("HTTP " + r.status)))
      .then(setData)
      .catch((e) => setErr(String(e)));
  }, []);

  if (err || !data) {
    return (
      <div
        style={{
          color: "var(--p3-ink-mut)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          padding: 12,
        }}
      >
        {err ? `contribs unavailable` : `loading…`}
      </div>
    );
  }

  // group into weeks (7 days)
  const weeks = [];
  const days = data.contributions || [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--p3-ink-mut)",
        }}
      >
        <span>
          <span style={{ color: "var(--p3-ok)" }}>{data.total}</span> contributions · last 12 months
        </span>
        <a
          href={`https://github.com/${data.user}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--p3-accent)", textDecoration: "none" }}
        >
          @{data.user} →
        </a>
      </div>
      <div
        role="img"
        aria-label={`${data.total} GitHub contributions in the last year`}
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateRows: "repeat(7, 11px)",
          gap: 2,
          padding: 12,
          background: "var(--p3-bg-1)",
          border: "1px solid var(--p3-line)",
          borderRadius: "var(--radius-md)",
          overflowX: "auto",
        }}
      >
        {weeks.flatMap((w, wi) =>
          Array.from({ length: 7 }).map((_, di) => {
            const d = w[di];
            const bg = d ? LEVEL_BG[d.level] : "transparent";
            return (
              <span
                key={`${wi}-${di}`}
                title={d ? `${d.date}: ${d.count}` : ""}
                style={{
                  width: 11,
                  height: 11,
                  background: bg,
                  borderRadius: 2,
                  border: d ? "1px solid rgba(230,236,255,0.04)" : "none",
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Contribs;
