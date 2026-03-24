"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import { MessageCircle, Users, ChevronRight } from "lucide-react";

export default function TopicDetailPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="清水河摸鱼" subtitle="第一章 · 童年生活与成长环境" />

      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "4px 20px 24px" }}>
          {/* Stats row */}
          <div className="flex items-center gap-4" style={{ marginBottom: 20 }}>
            <div className="flex items-center gap-1.5">
              <MessageCircle size={14} style={{ color: "var(--text-secondary)" }} />
              <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>8条对话</span>
            </div>
            <div style={{ width: 1, height: 14, backgroundColor: "var(--border-subtle)" }} />
            <div className="flex items-center gap-1.5">
              <Users size={14} style={{ color: "var(--text-secondary)" }} />
              <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>2人参与</span>
            </div>
          </div>

          {/* Section header */}
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", display: "block", marginBottom: 12 }}>对话记录</span>

          {/* Card 1 - 爸爸 */}
          <div style={{ backgroundColor: "var(--bg-card)", borderRadius: 16, border: "1px solid var(--border-subtle)", padding: "16px", marginBottom: 12 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
              <div className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "var(--accent-coral)", color: "var(--white)", fontSize: 15, fontWeight: 600 }}>爸</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>爸爸（主讲人）</span>
                  <span style={{ fontSize: 11, backgroundColor: "var(--accent-green-light)", color: "var(--accent-green)", padding: "1px 6px", borderRadius: 4, fontWeight: 500 }}>5条</span>
                </div>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>3月20日 14:30</span>
              </div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>
              <p>“小时候我们那儿有条清水河，水特别清亮，能看见河底的石头…”</p>
              <p style={{ marginTop: 4 }}>“我和弟弟每天放学后都会去河边摸鱼，有时候一摸就是一下午…”</p>
            </div>
            <Link href="/chat-history" className="flex items-center gap-1" style={{ fontSize: 13, fontWeight: 500, color: "var(--accent-green)" }}>
              查看完整对话<ChevronRight size={14} />
            </Link>
          </div>

          {/* Card 2 - 妈妈 */}
          <div style={{ backgroundColor: "var(--bg-card)", borderRadius: 16, border: "1px solid var(--border-subtle)", padding: "16px", marginBottom: 12 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
              <div className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "var(--accent-coral)", color: "var(--white)", fontSize: 15, fontWeight: 600 }}>妈</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>妈妈（补充）</span>
                  <span style={{ fontSize: 11, backgroundColor: "var(--accent-coral-light)", color: "var(--accent-coral)", padding: "1px 6px", borderRadius: 4, fontWeight: 500 }}>3条</span>
                </div>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>3月21日 09:15</span>
              </div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>
              <p>“他小时候可调皮了，每次去摸鱼回来都浑身湿透…”</p>
            </div>
            <Link href="/mom-chat" className="flex items-center gap-1" style={{ fontSize: 13, fontWeight: 500, color: "var(--accent-green)" }}>
              查看完整对话<ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* bottom buttons */}
      <div className="shrink-0 font-outfit flex gap-3" style={{ padding: "12px 20px 28px", backgroundColor: "var(--bg-page)" }}>
        <Link href="/style-select" className="flex items-center justify-center flex-1" style={{ height: 48, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 15, fontWeight: 600 }}>
          生成文章
        </Link>
        <Link href="/supplement" className="flex items-center justify-center flex-1" style={{ height: 48, borderRadius: 12, backgroundColor: "var(--bg-card)", color: "var(--text-primary)", fontSize: 15, fontWeight: 600, border: "1.5px solid var(--border-strong)" }}>
          我来补充
        </Link>
      </div>
    </PhoneFrame>
  );
}
