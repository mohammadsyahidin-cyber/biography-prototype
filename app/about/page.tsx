"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { Logo } from "@/components/Logo";
import { ChevronRight } from "lucide-react";

const links = [
  { label: "官方网站", href: "#" },
  { label: "用户协议", href: "#" },
  { label: "隐私政策", href: "#" },
];

export default function AboutPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="关于我们" />

      <div className="flex-1 overflow-auto font-outfit flex flex-col items-center" style={{ padding: "40px 24px" }}>
        {/* Logo + Version */}
        <div className="flex flex-col items-center" style={{ marginBottom: 32 }}>
          <div style={{ width: 72, height: 72, marginBottom: 12 }}>
            <Logo />
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>江河传记</span>
          <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>版本 1.0.0</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", textAlign: "center", marginBottom: 32 }}>
          江河传记致力于帮助每个家庭记录长辈的人生故事，让珍贵的记忆不再随时间流逝，代代相传。
        </p>

        {/* Links */}
        <div className="w-full" style={{ backgroundColor: "var(--bg-card)", borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
          {links.map((l, i) => (
            <div key={i}>
              <a href={l.href} className="flex items-center justify-between" style={{ padding: "14px 16px" }}>
                <span style={{ fontSize: 15, color: "var(--text-primary)" }}>{l.label}</span>
                <ChevronRight size={16} style={{ color: "var(--text-tertiary)" }} />
              </a>
              {i < links.length - 1 && <div style={{ height: 1, backgroundColor: "var(--border-subtle)", marginLeft: 16 }} />}
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
