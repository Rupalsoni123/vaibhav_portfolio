import React, { useEffect, useState } from "react";

const LiveStatus = () => {
  const [status, setStatus] = useState({ tone: "warn", label: "checking…" });

  useEffect(() => {
    let mounted = true;
    const ping = async () => {
      const t0 = performance.now();
      try {
        const r = await fetch("/api/health", { cache: "no-store" });
        const ms = Math.round(performance.now() - t0);
        if (!mounted) return;
        if (r.ok) setStatus({ tone: "ok", label: `operational · ${ms}ms` });
        else setStatus({ tone: "warn", label: `degraded · ${r.status}` });
      } catch {
        if (mounted) setStatus({ tone: "err", label: "unreachable" });
      }
    };
    ping();
    const id = setInterval(ping, 60000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return <span className={`p3-pill p3-pill--${status.tone}`}>site · {status.label}</span>;
};

export default LiveStatus;
