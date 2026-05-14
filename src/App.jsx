import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollLayout from "./ScrollLayout";
import CommandPalette from "./components/CommandPalette";
import HelpModal from "./components/HelpModal";
import A11yToggle from "./components/A11yToggle";

const LabShell = lazy(() => import("./LabShell"));
const Uses = lazy(() => import("./pages/Uses"));
const Now = lazy(() => import("./pages/Now"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));

const GlobalShortcuts = ({ onOpenPalette, onOpenHelp }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let chord = null;
    let chordTimer = null;

    const goSection = (id) => {
      const el = document.getElementById(id);
      if (el) {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" }), 30);
      } else {
        navigate("/");
        setTimeout(() => {
          const el2 = document.getElementById(id);
          if (el2) window.scrollTo({ top: el2.offsetTop - 72, behavior: "smooth" });
        }, 80);
      }
    };

    const onKey = (e) => {
      const tag = (e.target.tagName || "").toLowerCase();
      const inField = tag === "input" || tag === "textarea" || e.target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenPalette();
        return;
      }
      if (inField) return;

      if (e.key === "?") {
        e.preventDefault();
        onOpenHelp();
        return;
      }
      if (e.key === "t") {
        window.dispatchEvent(new Event("p3:theme-cycle"));
        return;
      }
      if (e.key === "g") {
        chord = "g";
        if (chordTimer) clearTimeout(chordTimer);
        chordTimer = setTimeout(() => (chord = null), 1200);
        return;
      }
      if (chord === "g") {
        const m = {
          h: "home", a: "about", s: "skills", p: "projects",
          d: "pipeline", b: "blog", c: "contact",
        };
        if (m[e.key]) {
          e.preventDefault();
          goSection(m[e.key]);
        } else if (e.key === "l") {
          navigate("/lab");
        } else if (e.key === "u") {
          navigate("/uses");
        } else if (e.key === "n") {
          navigate("/now");
        }
        chord = null;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onOpenPalette, onOpenHelp]);

  return null;
};

const Shell = () => {
  const [palette, setPalette] = useState(false);
  const [help, setHelp] = useState(false);

  return (
    <>
      <GlobalShortcuts onOpenPalette={() => setPalette(true)} onOpenHelp={() => setHelp(true)} />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
      <HelpModal open={help} onClose={() => setHelp(false)} />
      <Routes>
        <Route
          path="/"
          element={
            <ScrollLayout
              onOpenPalette={() => setPalette(true)}
              onOpenHelp={() => setHelp(true)}
            />
          }
        />
        <Route
          path="/lab"
          element={
            <Suspense fallback={<div style={{ color: "#fff", padding: 24 }}>Booting lab…</div>}>
              <LabShell />
            </Suspense>
          }
        />
        <Route path="/uses" element={<Suspense fallback={null}><Uses /></Suspense>} />
        <Route path="/now" element={<Suspense fallback={null}><Now /></Suspense>} />
        <Route path="/case-studies/:slug" element={<Suspense fallback={null}><CaseStudy /></Suspense>} />
        <Route
          path="*"
          element={
            <ScrollLayout
              onOpenPalette={() => setPalette(true)}
              onOpenHelp={() => setHelp(true)}
            />
          }
        />
      </Routes>
      <A11yToggle />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Shell />
    <Analytics />
    <SpeedInsights />
  </BrowserRouter>
);

export default App;
