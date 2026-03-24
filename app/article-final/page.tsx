"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ChevronLeft, Share2, BookOpen, Heart, List, X, Check, PenLine, Lock } from "lucide-react";

type SectionStatus = "done" | "draft" | "todo";
type Section = { title: string; status: SectionStatus };

const chapters: { num: number; title: string; sections: Section[] }[] = [
  {
    num: 1, title: "童年生活与成长环境",
    sections: [
      { title: "老家的记忆", status: "done" },
      { title: "清水河摸鱼", status: "done" },
      { title: "家庭成员", status: "done" },
    ],
  },
  {
    num: 2, title: "求学与启蒙",
    sections: [
      { title: "十里山路上学", status: "draft" },
      { title: "恩师记忆", status: "draft" },
      { title: "中学时光", status: "todo" },
    ],
  },
  {
    num: 3, title: "工作与事业",
    sections: [
      { title: "进入工厂", status: "draft" },
      { title: "同事与友情", status: "todo" },
      { title: "职业变迁", status: "todo" },
    ],
  },
  {
    num: 4, title: "婚姻与家庭",
    sections: [
      { title: "恋爱故事", status: "todo" },
      { title: "子女教育", status: "todo" },
    ],
  },
  {
    num: 5, title: "人生感悟与寄语",
    sections: [
      { title: "人生哲学", status: "todo" },
      { title: "对后代寄语", status: "todo" },
    ],
  },
];

const articleBody = [
  "小时候，家门口不远处就是清水河。那条河不宽，但河水清澈见底，能看到水底的鹅卵石和游来游去的小鱼。每到夏天，河边就成了孩子们的天堂。",
  "建国和他的三个兄弟，几乎每天下午都会结伴去河边。四个男孩卷起裤腿，赤着脚踩进凉丝丝的河水里，弯着腰，瞪大眼睛在石头缝里摸鱼。每次谁摸到一条，岸上就会响起一阵欢呼。",
  "建国记得最清楚的，是有一次他摸到了一条足有巴掌大的鲤鱼，那条鱼劲儿特别大，差点从手里滑走。他用力攥住，高高举过头顶，兄弟几个都围上来看，那是他整个夏天最骄傲的时刻。",
  "后来秀芳嫁过来后，也听公公婆婆讲过许多清水河的故事。她说，建国每次说起摸鱼的事，眼睛里都放着光，好像又回到了那个无忧无虑的夏天。",
  "那条清水河，不只是一条河，更是一家人童年记忆里最温暖的地方。",
];

export default function ArticleFinalPage() {
  const [showToc, setShowToc] = useState(false);
  const statusMap: Record<string, { label: string; bg: string; color: string; Icon: typeof Check }> = {
    done: { label: "已完成", bg: "var(--accent-green-light)", color: "var(--accent-green)", Icon: Check },
    draft: { label: "草稿", bg: "var(--accent-coral-light)", color: "var(--accent-coral)", Icon: PenLine },
    todo: { label: "未开始", bg: "var(--bg-muted)", color: "var(--text-tertiary)", Icon: Lock },
  };

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Minimal header with back + share */}
      <div
        className="shrink-0 flex items-center justify-between font-outfit"
        style={{ height: 52, padding: "0 16px" }}
      >
        <Link
          href="/home"
          className="flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "var(--bg-muted)",
          }}
        >
          <ChevronLeft size={20} style={{ color: "var(--text-primary)" }} />
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowToc(true)}
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--bg-muted)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <List size={18} style={{ color: "var(--text-secondary)" }} />
          </button>
          <button
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--bg-muted)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Heart size={18} style={{ color: "var(--text-secondary)" }} />
          </button>
          <button
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--accent-green)",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Share2 size={18} style={{ color: "var(--white)" }} />
          </button>
        </div>
      </div>

      {/* Article content */}
      <div className="flex-1 overflow-auto" style={{ backgroundColor: "var(--bg-card)" }}>
        <div style={{ padding: "8px 24px 40px" }}>
          {/* Category tag */}
          <div className="flex items-center gap-2 font-outfit" style={{ marginBottom: 16 }}>
            <BookOpen size={14} style={{ color: "var(--accent-green)" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-green)", letterSpacing: 1 }}>
              第一章 · 童年生活
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-serif-sc"
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.3,
              marginBottom: 12,
            }}
          >
            清水河边的少年时光
          </h1>

          {/* Meta info */}
          <div className="flex items-center gap-3 font-outfit" style={{ marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>温情叙事</span>
            <div style={{ width: 3, height: 3, borderRadius: "50%", backgroundColor: "var(--text-tertiary)" }} />
            <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>爸爸、妈妈讲述</span>
          </div>
          <div className="font-outfit" style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 24 }}>
            2024年3月 · 定稿
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-3" style={{ marginBottom: 28 }}>
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--border-subtle)" }} />
            <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "var(--accent-green)", opacity: 0.5 }} />
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--border-subtle)" }} />
          </div>

          {/* Drop cap first paragraph */}
          <p
            className="font-serif-sc"
            style={{
              fontSize: 16,
              lineHeight: 2,
              color: "var(--text-primary)",
              marginBottom: 20,
              textIndent: "2em",
            }}
          >
            {articleBody[0]}
          </p>

          {/* Remaining paragraphs */}
          {articleBody.slice(1).map((p, i) => (
            <p
              key={i}
              className="font-serif-sc"
              style={{
                fontSize: 16,
                lineHeight: 2,
                color: "var(--text-primary)",
                marginBottom: 20,
                textIndent: "2em",
              }}
            >
              {p}
            </p>
          ))}

          {/* End ornament */}
          <div className="flex justify-center" style={{ marginTop: 12, marginBottom: 24 }}>
            <div className="flex items-center gap-2">
              <div style={{ width: 20, height: 1, backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
              <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
              <div style={{ width: 20, height: 1, backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
            </div>
          </div>

          {/* Contributors */}
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              borderRadius: 14,
              padding: "14px 16px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span className="font-outfit" style={{ fontSize: 12, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 10 }}>
              参与讲述
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: "var(--accent-coral)", color: "var(--white)", fontSize: 12, fontWeight: 600 }}>爸</div>
                <span className="font-outfit" style={{ fontSize: 13, color: "var(--text-primary)" }}>爸爸</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center" style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: "var(--accent-coral)", color: "var(--white)", fontSize: 12, fontWeight: 600 }}>妈</div>
                <span className="font-outfit" style={{ fontSize: 13, color: "var(--text-primary)" }}>妈妈</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom share bar */}
      <div
        className="shrink-0 flex items-center justify-between font-outfit"
        style={{
          padding: "12px 20px 28px",
          borderTop: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-card)",
        }}
      >
        <div className="flex items-center gap-2">
          <Heart size={16} style={{ color: "var(--accent-coral)" }} />
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>这段回忆，值得珍藏</span>
        </div>
        <button
          className="flex items-center gap-1.5"
          style={{
            height: 36,
            padding: "0 16px",
            borderRadius: 18,
            backgroundColor: "var(--accent-green)",
            border: "none",
            cursor: "pointer",
            color: "var(--white)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <Share2 size={14} />
          分享
        </button>
      </div>

      {/* TOC Drawer overlay */}
      {showToc && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* Backdrop */}
          <div
            onClick={() => setShowToc(false)}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          />
          {/* Panel */}
          <div
            className="font-outfit"
            style={{
              position: "relative",
              backgroundColor: "var(--bg-card)",
              borderRadius: "20px 20px 0 0",
              maxHeight: "75%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Handle */}
            <div className="flex justify-center" style={{ padding: "10px 0 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-subtle)" }} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between" style={{ padding: "12px 20px 16px" }}>
              <div>
                <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>全书目录</span>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)", marginLeft: 8 }}>
                  {chapters.flatMap(c => c.sections).filter(s => s.status === "done").length}/{chapters.flatMap(c => c.sections).length} 小节已完成
                </span>
              </div>
              <button
                onClick={() => setShowToc(false)}
                className="flex items-center justify-center"
                style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)", border: "none", cursor: "pointer" }}
              >
                <X size={16} style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>

            {/* Progress bar */}
            <div style={{ padding: "0 20px 16px" }}>
              <div style={{ height: 4, borderRadius: 2, backgroundColor: "var(--bg-muted)", overflow: "hidden" }}>
                <div style={{ width: `${(chapters.flatMap(c => c.sections).filter(s => s.status === "done").length / chapters.flatMap(c => c.sections).length) * 100}%`, height: "100%", borderRadius: 2, backgroundColor: "var(--accent-green)" }} />
              </div>
            </div>

            {/* Section list grouped by chapter */}
            <div className="flex-1 overflow-auto" style={{ padding: "0 20px 28px" }}>
              <div className="flex flex-col gap-4">
                {chapters.map((ch) => (
                  <div key={ch.num}>
                    {/* Chapter header */}
                    <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: 11,
                          backgroundColor: "var(--accent-green)",
                          color: "var(--white)",
                          fontSize: 11,
                          fontWeight: 700,
                        }}
                      >
                        {ch.num}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>
                        {ch.title}
                      </span>
                    </div>
                    {/* Sections */}
                    <div className="flex flex-col gap-2">
                      {ch.sections.map((sec, si) => {
                        const s = statusMap[sec.status];
                        const StatusIcon = s.Icon;
                        const isActive = ch.num === 1 && si === 1;
                        return (
                          <div
                            key={si}
                            className="flex items-center gap-3"
                            style={{
                              padding: "12px 14px",
                              borderRadius: 12,
                              backgroundColor: sec.status === "done" ? "var(--accent-green-light)" : "var(--bg-surface)",
                              border: isActive ? "1.5px solid var(--accent-green)" : "1px solid var(--border-subtle)",
                              cursor: "pointer",
                              opacity: sec.status === "todo" ? 0.6 : 1,
                            }}
                          >
                            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)", flex: 1 }}>
                              {sec.title}
                            </span>
                            <span
                              className="flex items-center gap-1 shrink-0"
                              style={{
                                fontSize: 11,
                                fontWeight: 500,
                                padding: "2px 8px",
                                borderRadius: 6,
                                backgroundColor: s.bg,
                                color: s.color,
                              }}
                            >
                              <StatusIcon size={10} />
                              {s.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
