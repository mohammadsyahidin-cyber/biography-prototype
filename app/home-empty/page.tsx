"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { TabBar } from "@/components/TabBar";
import Link from "next/link";
import { Mic, Users, Compass, Plus, PenLine } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function HomeEmptyPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "8px 20px 24px" }}>
          {/* header */}
          <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
            <div className="flex items-center gap-2">
              <Logo size={28} />
              <span className="font-serif-sc" style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>江河传记</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/settings" className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "var(--bg-muted)" }}>
                <Users size={18} style={{ color: "var(--text-secondary)" }} />
              </Link>
            </div>
          </div>

          {/* Explore label */}
          <div className="flex items-center gap-1.5" style={{ margin: "20px 0 10px" }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "#C8A96E" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>发现好故事</span>
          </div>

          {/* Explore card */}
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
            <div style={{ position: "relative", height: 130, overflow: "hidden" }}>
              <img src="/biography-prototype/images/card-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(42,28,14,0.6)" }} />
              <div style={{ position: "relative", padding: "24px 20px 20px", display: "flex", flexDirection: "column", gap: 4, height: "100%" }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>精选传记</span>
                <span className="font-serif-sc" style={{ fontSize: 22, fontWeight: 700, color: "var(--white)" }}>看看其他人的故事</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>真实的家庭记忆，温暖的文字传承</span>
              </div>
            </div>
            <div style={{ backgroundColor: "var(--bg-card)", padding: "16px 20px 20px" }}>
              <div className="flex items-center justify-around" style={{ marginBottom: 14 }}>
                {[{ num: "12", label: "本传记" }, { num: "86", label: "篇文章" }, { num: "1.2万", label: "人在记录" }].map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-0.5">
                    <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{s.num}</span>
                    <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/featured" className="flex items-center justify-center gap-2" style={{ height: 44, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 15, fontWeight: 600, width: "100%" }}>
                <Compass size={18} />
                去看看
              </Link>
            </div>
          </div>

          {/* Create button */}
          <Link href="/login" className="flex items-center justify-center gap-2" style={{ height: 48, borderRadius: 14, backgroundColor: "var(--bg-muted)", border: "1.5px solid var(--border-strong)", color: "var(--accent-green)", fontSize: 15, fontWeight: 600, width: "100%", marginTop: 16 }}>
            <Plus size={18} />
            创建我的传记
          </Link>

          {/* Divider */}
          <div style={{ height: 1, backgroundColor: "var(--border-subtle)", margin: "24px 0", opacity: 0.6 }} />

          {/* Xiao Xu intro */}
          <div className="flex items-center gap-2.5" style={{ marginBottom: 8 }}>
            <div className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "var(--accent-green)" }}>
              <span style={{ fontSize: 15, fontWeight: 600, color: "var(--white)" }}>叙</span>
            </div>
            <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>你好，我是小叙</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 16 }}>我是你的传记助手，陪你一起用文字留住家人的故事</p>

          {/* Feature cards */}
          <div className="flex flex-col gap-3">
            {[
              { icon: Mic, title: "我来问，家人来讲", desc: "我会用轻松的问题引导家人打开话匣子，聊聊那些年的故事" },
              { icon: PenLine, title: "聊完我来写", desc: "对话结束后，我帮你把零散的回忆整理成温暖的文章" },
              { icon: Users, title: "全家一起记", desc: "邀请家人一起补充，让每段回忆都更丰满、更真实" },
            ].map((feat) => (
              <div key={feat.title} className="flex items-start gap-3" style={{ backgroundColor: "var(--bg-card)", borderRadius: 14, padding: "14px 16px", border: "1px solid var(--border-subtle)" }}>
                <div className="flex items-center justify-center shrink-0" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)" }}>
                  <feat.icon size={16} style={{ color: "var(--accent-green)" }} />
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{feat.title}</p>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar activeTab="home" />
    </PhoneFrame>
  );
}
