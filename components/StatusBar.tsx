"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return <div style={{ height: "env(safe-area-inset-top, 0px)" }} />;
  }

  // Desktop: just a spacer for visual top padding (no time/battery)
  return <div className="shrink-0" style={{ height: 44 }} />;
}
