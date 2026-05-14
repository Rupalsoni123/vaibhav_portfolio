import React, { useEffect, useState } from "react";
import { OSProvider, useOS } from "./system/OSContext";
import BootSequence from "./system/boot/BootSequence";
import Desktop from "./system/Desktop";
import "./system/system.css";

const OSShell = () => {
  const { booted } = useOS();
  const [powerState, setPowerState] = useState("off");

  useEffect(() => {
    if (booted) setPowerState("on");
    else if (powerState === "on") setPowerState("off");
  }, [booted, powerState]);

  if (powerState === "off") {
    return (
      <div className="os-power-off">
        <div className="power-button-wrapper">
          <button
            className="power-on-btn"
            onClick={() => setPowerState("booting")}
            title="Power On System"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0M12 2v10" />
            </svg>
          </button>
          <span className="power-text">System Offline</span>
        </div>
      </div>
    );
  }

  if (powerState === "booting") return <BootSequence />;
  return <Desktop />;
};

const LabShell = () => {
  useEffect(() => {
    document.body.removeAttribute("data-mode");
  }, []);
  return (
    <OSProvider>
      <OSShell />
    </OSProvider>
  );
};

export default LabShell;
