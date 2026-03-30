import React from "react";
import { OSProvider, useOS } from "./system/OSContext";
import BootSequence from "./system/boot/BootSequence";
import Desktop from "./system/Desktop";
import "./system/system.css";

const OSShell = () => {
  const { booted } = useOS();

  if (!booted) {
    return <BootSequence />;
  }

  return <Desktop />;
};

const App = () => {
  return (
    <OSProvider>
      <OSShell />
    </OSProvider>
  );
};

export default App;
