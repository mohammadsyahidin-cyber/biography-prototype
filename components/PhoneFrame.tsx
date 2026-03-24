"use client";

import React, { useEffect, useState } from "react";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 500);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div
        className="flex flex-col"
        style={{
          width: "100vw",
          height: "100dvh",
          backgroundColor: "var(--bg-page)",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-col overflow-hidden shadow-2xl"
      style={{
        width: 390,
        height: 844,
        borderRadius: 44,
        backgroundColor: "var(--bg-page)",
        border: "8px solid #1A1918",
        boxShadow:
          "0 0 0 2px #333, 0 25px 60px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* Notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-50"
        style={{
          width: 126,
          height: 34,
          backgroundColor: "#1A1918",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      {children}
    </div>
  );
}
