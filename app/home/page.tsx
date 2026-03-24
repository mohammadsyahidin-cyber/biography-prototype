"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { TabBar } from "@/components/TabBar";
import Link from "next/link";
import { Flame, Mic } from "lucide-react";

export default function HomePage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "8px 20px 24px" }}>
          {/* header */}
          <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
            <div className="flex-1">
              <p style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 2 }}>用文字，留住家人的故事</p>
            </div>
            <div className="flex items-center gap-2.5">
              <Link href="/memorial" className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "var(--bg-muted)" }}>
                <Flame size={18} fill="var(--accent-coral)" style={{ color: "var(--accent-coral)" }} />
              </Link>
              <Link href="/settings" className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "var(--accent-warm)", color: "var(--white)", fontSize: 15, fontWeight: 600 }}>明</Link>
            </div>
          </div>

          {/* 进行中 label */}
          <div className="flex items-center gap-1.5" style={{ margin: "20px 0 10px" }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: "var(--accent-warm)" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>进行中的故事</span>
          </div>

          {/* project card */}
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(44,36,25,0.08)" }}>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img src="/biography-prototype/images/card-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(90,65,35,0.82) 0%, rgba(60,45,25,0.72) 100%)" }} />
              <div style={{ position: "relative", padding: "24px 20px 20px" }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginBottom: 6, letterSpacing: 1 }}>家族传记</p>
                <h2 className="font-serif-sc" style={{ fontSize: 24, fontWeight: 700, color: "var(--white)", lineHeight: "30px" }}>父亲的岁月</h2>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>主角：李建国</p>
              </div>
            </div>
            <div style={{ backgroundColor: "var(--bg-card)", padding: "16px 20px 20px" }}>
              <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>整体进度</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-green)" }}>40%</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, backgroundColor: "var(--accent-green-light)", marginBottom: 16, overflow: "hidden" }}>
                <div style={{ width: "40%", height: "100%", borderRadius: 3, backgroundColor: "var(--accent-green)" }} />
              </div>
              <div className="flex items-center justify-around">
                {[{ num: "5", label: "话题" }, { num: "1", label: "文章" }, { num: "3", label: "家人" }].map((s) => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>{s.num}</span>
                    <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/interview" className="flex items-center justify-center gap-2" style={{ height: 44, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 15, fontWeight: 600, width: "100%", marginTop: 16 }}>
                <Mic size={18} />继续采访
              </Link>
            </div>
          </div>

          {/* 最近动态 */}
          <div style={{ margin: "28px 0 12px" }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>最近动态</span>
          </div>
          <div className="flex flex-col gap-3" style={{ paddingBottom: 8 }}>
            {[
              { avatar: "妈", avatarBg: "var(--accent-coral)", text: "妈妈补充了「清水河摸鱼」的回忆", time: "2小时前" },
              { avatar: "叙", avatarBg: "var(--accent-green)", text: "小叙已生成「童年生活」章节草稿", time: "昨天" },
              { avatar: "爸", avatarBg: "var(--accent-warm)", text: "爸爸讲述了求学路上的故事", time: "3天前" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3" style={{ backgroundColor: "var(--bg-card)", borderRadius: 14, padding: "14px 16px", border: "1px solid var(--border-subtle)" }}>
                <div className="flex items-center justify-center shrink-0" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: item.avatarBg, color: "var(--white)", fontSize: 13, fontWeight: 600 }}>{item.avatar}</div>
                <div className="flex-1">
                  <p style={{ fontSize: 14, color: "var(--text-primary)", lineHeight: "20px" }}>{item.text}</p>
                  <p style={{ fontSize: 12, color: "var(--text-tertiary)", marginTop: 4 }}>{item.time}</p>
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
