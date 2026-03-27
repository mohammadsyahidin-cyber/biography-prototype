"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const topics = [
  { title: "清水河摸鱼", chapter: "第一章", stats: "5次对话 · 已生成文章" },
  { title: "老家的土灶饭", chapter: "第二章", stats: "2次对话 · 草稿" },
];

export default function MemberDetailPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="成员详情" />

      <div className="flex-1 overflow-auto font-outfit" style={{ padding: "20px 24px" }}>
        {/* Avatar + Name */}
        <div className="flex flex-col items-center" style={{ marginBottom: 28 }}>
          <div className="flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: 36, backgroundColor: "var(--accent-coral)", marginBottom: 10 }}>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>爸</span>
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>李建国</span>
          <span style={{ fontSize: 12, backgroundColor: "var(--accent-coral-light)", color: "var(--accent-coral)", padding: "2px 10px", borderRadius: 6, fontWeight: 500 }}>传记主人公</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8" style={{ marginBottom: 28, padding: "16px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
          {[
            { num: "4", label: "参与话题" },
            { num: "8", label: "对话次数" },
            { num: "2", label: "生成文章" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>{s.num}</span>
              <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Topics */}
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", display: "block", marginBottom: 12 }}>参与的话题</span>
        <div className="flex flex-col gap-3">
          {topics.map((t, i) => (
            <Link key={i} href="/topic-detail" className="flex items-center" style={{ backgroundColor: "var(--bg-card)", borderRadius: 14, border: "1px solid var(--border-subtle)", padding: "14px 16px" }}>
              <div className="flex-1">
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", display: "block", marginBottom: 3 }}>{t.title}</span>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{t.chapter} · {t.stats}</span>
              </div>
              <ChevronRight size={16} style={{ color: "var(--text-tertiary)" }} />
            </Link>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
