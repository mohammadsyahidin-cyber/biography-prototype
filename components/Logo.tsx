"use client";

/**
 * 江河传记 Logo
 * Concept: flowing river lines emerging from an open book
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
      {/* Open book base */}
      <path
        d="M8 36V14C8 14 12 11 24 11C36 11 40 14 40 14V36C40 36 36 33 24 33C12 33 8 36 8 36Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Center spine */}
      <line x1="24" y1="11" x2="24" y2="33" stroke={color} strokeWidth="1.5" opacity="0.5" />
      {/* River wave 1 */}
      <path
        d="M13 20C15.5 18 18 22 21 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* River wave 2 */}
      <path
        d="M14 26C16.5 24 19 28 22 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* River wave 3 (right page) */}
      <path
        d="M27 20C29.5 18 32 22 35 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />
      {/* River wave 4 (right page) */}
      <path
        d="M26 26C28.5 24 31 28 34 26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
