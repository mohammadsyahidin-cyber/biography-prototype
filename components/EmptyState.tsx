"use client";

import React from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center font-outfit"
      style={{ padding: "48px 32px", textAlign: "center" }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: "var(--bg-muted)",
          marginBottom: 20,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: 8,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          marginBottom: action ? 24 : 0,
        }}
      >
        {description}
      </p>
      {action}
    </div>
  );
}
