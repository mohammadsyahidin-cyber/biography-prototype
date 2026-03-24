"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export function BackHeader({
  title,
  subtitle,
  rightAction,
  titleClassName,
}: {
  title: string;
  subtitle?: string;
  rightAction?: React.ReactNode;
  titleClassName?: string;
}) {
  const router = useRouter();

  return (
    <div
      className="shrink-0 flex items-center font-outfit"
      style={{
        height: subtitle ? 60 : 52,
        paddingLeft: 4,
        paddingRight: 16,
        backgroundColor: "var(--bg-page)",
      }}
    >
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center"
        style={{ width: 44, height: 44 }}
      >
        <ChevronLeft size={24} style={{ color: "var(--text-primary)" }} />
      </button>
      <div className="flex-1 flex flex-col">
        <span
          className={titleClassName}
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: "22px",
          }}
        >
          {title}
        </span>
        {subtitle && (
          <span
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              lineHeight: "16px",
            }}
          >
            {subtitle}
          </span>
        )}
      </div>
      {rightAction && <div>{rightAction}</div>}
    </div>
  );
}
