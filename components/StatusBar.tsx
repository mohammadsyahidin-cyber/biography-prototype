"use client";

import React, { useEffect, useState } from "react";

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

  return (
    <div
      className="flex items-center justify-between shrink-0 font-outfit"
      style={{
        height: 54,
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 14,
        color: "var(--text-primary)",
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 600 }}>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.3" />
          <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.5" />
          <rect x="9" y="0.5" width="3" height="11.5" rx="1" opacity="0.7" />
          <rect x="13.5" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.4C10.6 2.4 12.9 3.5 14.5 5.2L15.6 4C13.7 2 11 0.8 8 0.8C5 0.8 2.3 2 0.4 4L1.5 5.2C3.1 3.5 5.4 2.4 8 2.4ZM8 5.6C9.7 5.6 11.2 6.3 12.3 7.4L13.4 6.2C12 4.8 10.1 4 8 4C5.9 4 4 4.8 2.6 6.2L3.7 7.4C4.8 6.3 6.3 5.6 8 5.6ZM8 8.8C8.9 8.8 9.7 9.2 10.2 9.8L8 12L5.8 9.8C6.3 9.2 7.1 8.8 8 8.8Z" />
        </svg>
        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
          <rect x="0" y="0.5" width="23" height="12" rx="3.5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.35" />
          <rect x="1.5" y="2" width="17" height="9" rx="2" />
          <rect x="24.5" y="4" width="2" height="5" rx="1" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
