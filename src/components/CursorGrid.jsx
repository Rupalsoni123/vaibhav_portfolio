import React, { useEffect, useRef } from "react";

const CursorGrid = ({ height = "100vh" }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let cw = 0, ch = 0;
    let mx = -9999, my = -9999;
    const spacing = 28;
    const radius = 130;

    const resize = () => {
      cw = canvas.clientWidth;
      ch = canvas.clientHeight;
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      ctx.scale(dpr, dpr);
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      for (let y = spacing / 2; y < ch; y += spacing) {
        for (let x = spacing / 2; x < cw; x += spacing) {
          const dx = x - mx;
          const dy = y - my;
          const d = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - d / radius);
          const alpha = 0.06 + t * 0.5;
          const r = 1 + t * 1.4;
          ctx.beginPath();
          ctx.fillStyle = `rgba(110, 231, 255, ${alpha})`;
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height,
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
};

export default CursorGrid;
