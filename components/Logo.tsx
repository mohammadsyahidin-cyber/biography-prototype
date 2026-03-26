"use client";

/**
 * 江河传记 Logo
 * A single river stream rises from below, splits into two flowing curves
 * that mirror each other — forming an open book silhouette.
 * Simple enough to read at 18px, distinctive at 44px.
 */
export function Logo({ size = 40, color = "#FFFDF8" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* River source — vertical stem */}
      <path
        d="M24 40V26"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* Left book page — river branch curving left */}
      <path
        d="M24 26C24 20 20 14 10 9"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right book page — river branch curving right */}
      <path
        d="M24 26C24 20 28 14 38 9"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left wave accent */}
      <path
        d="M15 17C13.5 18.5 11 16.5 9.5 18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Right wave accent */}
      <path
        d="M33 17C34.5 18.5 37 16.5 38.5 18"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
