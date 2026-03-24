"use client";

import React from "react";
import Link from "next/link";
import { House, ListTree, FileText, Users } from "lucide-react";

const tabs = [
  { key: "home", label: "首页", icon: House, href: "/home" },
  { key: "outline", label: "大纲", icon: ListTree, href: "/topics" },
  { key: "articles", label: "文章", icon: FileText, href: "/articles" },
  { key: "family", label: "家人", icon: Users, href: "/members" },
];

export function TabBar({ activeTab = "home" }: { activeTab?: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-around font-outfit"
      style={{
        height: 64,
        paddingTop: 8,
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.key}
            href={tab.href}
            className="flex flex-col items-center gap-1"
            style={{ minWidth: 56 }}
          >
            <Icon
              size={22}
              strokeWidth={isActive ? 2.2 : 1.6}
              style={{
                color: isActive ? "var(--accent-green)" : "var(--tab-inactive)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--accent-green)" : "var(--tab-inactive)",
              }}
            >
              {tab.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
