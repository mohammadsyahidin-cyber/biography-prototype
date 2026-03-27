"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import {
  GripVertical,
  Plus,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  Trash2,
  ArrowUp,
  ArrowDown,
  BookOpen,
  FileText,
  X,
  Copy,
  UserPlus,
  Check,
  MessageCircle,
  Forward,
  CircleDot,
} from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface Chapter {
  id: string;
  num: number;
  title: string;
  sections: Section[];
}

const initialChapters: Chapter[] = [
  {
    id: "c1",
    num: 1,
    title: "童年生活与成长环境",
    sections: [
      { id: "s1", title: "老家的记忆" },
      { id: "s2", title: "家庭成员" },
      { id: "s3", title: "清水河摸鱼" },
    ],
  },
  {
    id: "c2",
    num: 2,
    title: "求学与启蒙",
    sections: [
      { id: "s4", title: "十里山路上学" },
      { id: "s5", title: "恩师记忆" },
      { id: "s6", title: "中学时光" },
    ],
  },
  {
    id: "c3",
    num: 3,
    title: "工作与事业",
    sections: [
      { id: "s7", title: "进入工厂" },
      { id: "s8", title: "同事与友情" },
      { id: "s9", title: "职业变迁" },
    ],
  },
  {
    id: "c4",
    num: 4,
    title: "婚姻与家庭",
    sections: [
      { id: "s10", title: "恋爱故事" },
      { id: "s11", title: "子女教育" },
    ],
  },
  {
    id: "c5",
    num: 5,
    title: "人生感悟与寄语",
    sections: [
      { id: "s12", title: "人生哲学" },
      { id: "s13", title: "对后代寄语" },
    ],
  },
];

let sectionCounter = 14;
let chapterCounter = 6;

export default function OutlinePage() {
  const router = useRouter();
  const [chapters, setChapters] = useState<Chapter[]>(initialChapters);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(["c1", "c2"])
  );
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalSections = chapters.reduce(
    (sum, ch) => sum + ch.sections.length,
    0
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addSection = (chapterId: string) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.id === chapterId
          ? {
              ...ch,
              sections: [
                ...ch.sections,
                { id: `s${sectionCounter++}`, title: "新小节" },
              ],
            }
          : ch
      )
    );
  };

  const deleteSection = (chapterId: string, sectionId: string) => {
    setChapters((prev) =>
      prev.map((ch) =>
        ch.id === chapterId
          ? {
              ...ch,
              sections: ch.sections.filter((s) => s.id !== sectionId),
            }
          : ch
      )
    );
  };

  const deleteChapter = (chapterId: string) => {
    setChapters((prev) => {
      const filtered = prev.filter((ch) => ch.id !== chapterId);
      return filtered.map((ch, i) => ({ ...ch, num: i + 1 }));
    });
  };

  const addChapter = () => {
    const newId = `c${chapterCounter++}`;
    setChapters((prev) => [
      ...prev,
      {
        id: newId,
        num: prev.length + 1,
        title: "新章节",
        sections: [],
      },
    ]);
    setExpandedIds((prev) => new Set(prev).add(newId));
  };

  const moveChapter = (index: number, direction: "up" | "down") => {
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= chapters.length) return;
    setChapters((prev) => {
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next.map((ch, i) => ({ ...ch, num: i + 1 }));
    });
  };

  const moveSection = (
    chapterId: string,
    secIndex: number,
    direction: "up" | "down"
  ) => {
    setChapters((prev) =>
      prev.map((ch) => {
        if (ch.id !== chapterId) return ch;
        const target = direction === "up" ? secIndex - 1 : secIndex + 1;
        if (target < 0 || target >= ch.sections.length) return ch;
        const next = [...ch.sections];
        [next[secIndex], next[target]] = [next[target], next[secIndex]];
        return { ...ch, sections: next };
      })
    );
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="传记大纲" />
      <div
        className="flex-1 overflow-auto font-outfit"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <div style={{ padding: "0 20px 24px" }}>
          {/* Stats overview */}
          <div
            className="flex items-center justify-between"
            style={{
              padding: "14px 18px",
              borderRadius: 14,
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              marginBottom: 16,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  backgroundColor: "var(--accent-green-light)",
                }}
              >
                <BookOpen size={18} style={{ color: "var(--accent-green)" }} />
              </div>
              <div>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", display: "block" }}>
                  父亲的岁月
                </span>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
                  李建国 · 自传
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span style={{ fontSize: 18, fontWeight: 700, color: "var(--accent-green)" }}>{chapters.length}</span>
                <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>章</span>
              </div>
              <div style={{ width: 1, height: 24, backgroundColor: "var(--border-subtle)" }} />
              <div className="flex flex-col items-center">
                <span style={{ fontSize: 18, fontWeight: 700, color: "var(--accent-green)" }}>{totalSections}</span>
                <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>节</span>
              </div>
            </div>
          </div>

          {/* Hint banner */}
          <div
            className="flex items-start gap-2"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              backgroundColor: "var(--accent-green-light)",
              marginBottom: 16,
            }}
          >
            <Lightbulb
              size={14}
              style={{ color: "var(--accent-green)", marginTop: 2, flexShrink: 0 }}
            />
            <p style={{ fontSize: 12, lineHeight: 1.5, color: "var(--accent-green)" }}>
              点击章节展开小节，可增删、调整顺序
            </p>
          </div>

          {/* Chapters list */}
          <div className="flex flex-col gap-3">
            {chapters.map((ch, chIdx) => {
              const isExpanded = expandedIds.has(ch.id);
              return (
                <div
                  key={ch.id}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderRadius: 16,
                    border: `1.5px solid ${isExpanded ? "var(--accent-green)" : "var(--border-subtle)"}`,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Chapter header */}
                  <button
                    onClick={() => toggleExpand(ch.id)}
                    className="flex items-center gap-3"
                    style={{
                      width: "100%",
                      padding: "16px 14px 16px 16px",
                      background: isExpanded ? "var(--accent-green-light)" : "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.2s",
                    }}
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        backgroundColor: "var(--accent-green)",
                        color: "var(--white)",
                        fontSize: 15,
                        fontWeight: 700,
                      }}
                    >
                      {ch.num}
                    </div>
                    <div className="flex-1">
                      <span
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          display: "block",
                        }}
                      >
                        {ch.title}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-tertiary)",
                          marginTop: 2,
                          display: "block",
                        }}
                      >
                        {ch.sections.length} 个小节
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown size={18} style={{ color: "var(--accent-green)" }} />
                    ) : (
                      <ChevronRight size={18} style={{ color: "var(--text-tertiary)" }} />
                    )}
                  </button>

                  {/* Expanded sections */}
                  {isExpanded && (
                    <div style={{ padding: "4px 16px 12px" }}>
                      {ch.sections.map((sec, secIdx) => (
                        <div
                          key={sec.id}
                          className="flex items-center"
                          style={{ position: "relative" }}
                        >
                          {/* Timeline connector */}
                          <div
                            className="flex flex-col items-center shrink-0"
                            style={{ width: 28, alignSelf: "stretch" }}
                          >
                            <div
                              style={{
                                width: 1,
                                height: 12,
                                backgroundColor: secIdx === 0 ? "transparent" : "var(--border-subtle)",
                              }}
                            />
                            <div
                              className="flex items-center justify-center shrink-0"
                              style={{
                                width: 22,
                                height: 22,
                                borderRadius: 6,
                                backgroundColor: "var(--accent-green-light)",
                                fontSize: 10,
                                fontWeight: 600,
                                color: "var(--accent-green)",
                              }}
                            >
                              {ch.num}.{secIdx + 1}
                            </div>
                            <div
                              style={{
                                width: 1,
                                flex: 1,
                                backgroundColor: secIdx === ch.sections.length - 1 ? "transparent" : "var(--border-subtle)",
                              }}
                            />
                          </div>

                          {/* Section content */}
                          <div
                            className="flex items-center flex-1 gap-2"
                            style={{
                              padding: "10px 8px 10px 10px",
                              marginLeft: 6,
                              borderRadius: 10,
                              backgroundColor: "var(--bg-surface)",
                              marginBottom: secIdx < ch.sections.length - 1 ? 4 : 0,
                            }}
                          >
                            <GripVertical
                              size={14}
                              style={{ color: "var(--border-strong)", flexShrink: 0 }}
                            />
                            <FileText
                              size={14}
                              style={{ color: "var(--accent-green)", opacity: 0.6, flexShrink: 0 }}
                            />
                            <span
                              className="flex-1"
                              style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}
                            >
                              {sec.title}
                            </span>
                            <div className="flex items-center gap-0.5">
                              <button
                                onClick={() => moveSection(ch.id, secIdx, "up")}
                                style={{
                                  width: 24, height: 24, borderRadius: 6,
                                  border: "none", background: "none", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  opacity: secIdx === 0 ? 0.2 : 1,
                                }}
                              >
                                <ArrowUp size={12} style={{ color: "var(--text-tertiary)" }} />
                              </button>
                              <button
                                onClick={() => moveSection(ch.id, secIdx, "down")}
                                style={{
                                  width: 24, height: 24, borderRadius: 6,
                                  border: "none", background: "none", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  opacity: secIdx === ch.sections.length - 1 ? 0.2 : 1,
                                }}
                              >
                                <ArrowDown size={12} style={{ color: "var(--text-tertiary)" }} />
                              </button>
                              <button
                                onClick={() => deleteSection(ch.id, sec.id)}
                                style={{
                                  width: 24, height: 24, borderRadius: 6,
                                  border: "none", background: "none", cursor: "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                }}
                              >
                                <Trash2 size={12} style={{ color: "var(--text-tertiary)" }} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Add section */}
                      <div className="flex items-center" style={{ marginTop: 4 }}>
                        <div style={{ width: 28, flexShrink: 0 }} />
                        <button
                          onClick={() => addSection(ch.id)}
                          className="flex items-center justify-center gap-1 flex-1"
                          style={{
                            height: 34,
                            marginLeft: 6,
                            borderRadius: 10,
                            border: "1.5px dashed var(--border-subtle)",
                            background: "none",
                            cursor: "pointer",
                          }}
                        >
                          <Plus size={13} style={{ color: "var(--text-tertiary)" }} />
                          <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>添加小节</span>
                        </button>
                      </div>

                      {/* Chapter actions */}
                      <div
                        className="flex items-center justify-between"
                        style={{ marginTop: 10, padding: "8px 0 0", borderTop: "1px solid var(--border-subtle)" }}
                      >
                        <button
                          onClick={() => deleteChapter(ch.id)}
                          className="flex items-center gap-1"
                          style={{
                            border: "none", background: "none", cursor: "pointer",
                            fontSize: 12, color: "var(--text-tertiary)",
                          }}
                        >
                          <Trash2 size={12} />
                          删除本章
                        </button>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => moveChapter(chIdx, "up")}
                            className="flex items-center justify-center"
                            style={{
                              width: 28, height: 28, borderRadius: 8,
                              backgroundColor: "var(--bg-muted)",
                              border: "none", cursor: "pointer",
                              opacity: chIdx === 0 ? 0.3 : 1,
                            }}
                          >
                            <ArrowUp size={14} style={{ color: "var(--text-secondary)" }} />
                          </button>
                          <button
                            onClick={() => moveChapter(chIdx, "down")}
                            className="flex items-center justify-center"
                            style={{
                              width: 28, height: 28, borderRadius: 8,
                              backgroundColor: "var(--bg-muted)",
                              border: "none", cursor: "pointer",
                              opacity: chIdx === chapters.length - 1 ? 0.3 : 1,
                            }}
                          >
                            <ArrowDown size={14} style={{ color: "var(--text-secondary)" }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add chapter button */}
          <button
            onClick={addChapter}
            className="flex items-center justify-center gap-2"
            style={{
              width: "100%",
              height: 48,
              borderRadius: 14,
              border: "1.5px dashed var(--border-subtle)",
              backgroundColor: "transparent",
              marginTop: 12,
              cursor: "pointer",
            }}
          >
            <Plus size={18} style={{ color: "var(--text-tertiary)" }} />
            <span style={{ fontSize: 14, color: "var(--text-tertiary)" }}>
              添加章节
            </span>
          </button>
        </div>
      </div>

      {/* Bottom buttons */}
      <div
        className="shrink-0 flex gap-3 font-outfit"
        style={{ padding: "12px 20px 28px", backgroundColor: "var(--bg-page)" }}
      >
        <button
          onClick={() => router.push("/outline-chat")}
          style={{
            flex: 1, height: 48, borderRadius: 12,
            border: "1.5px solid var(--border-subtle)",
            backgroundColor: "var(--bg-card)",
            fontSize: 15, fontWeight: 600, color: "var(--text-primary)",
            cursor: "pointer",
          }}
        >
          修改大纲
        </button>
        <Link
          href="/outline-done"
          className="flex items-center justify-center"
          style={{
            flex: 1, height: 48, borderRadius: 12,
            backgroundColor: "var(--accent-green)",
            color: "var(--white)", fontSize: 15, fontWeight: 600,
          }}
        >
          确认大纲
        </Link>
      </div>

      {/* Share / Invite Modal */}
      {showShare && (
        <div style={{ position: "absolute", inset: 0, zIndex: 50 }}>
          <div
            onClick={() => setShowShare(false)}
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          {/* Bottom sheet */}
          <div
            className="font-outfit"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "var(--bg-card)",
              borderRadius: "20px 20px 0 0",
              maxHeight: "70%",
              overflow: "auto",
            }}
          >
            {/* Handle */}
            <div className="flex justify-center" style={{ padding: "10px 0 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-subtle)" }} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between" style={{ padding: "12px 20px 0" }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>邀请家人完善大纲</span>
              <button
                onClick={() => setShowShare(false)}
                className="flex items-center justify-center"
                style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)", border: "none", cursor: "pointer" }}
              >
                <X size={16} style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>

            <div style={{ padding: "16px 20px 28px" }}>
              {/* Members */}
              <div className="flex flex-col gap-3" style={{ marginBottom: 20 }}>
                {[
                  { name: "小明（我）", role: "发起人", avatar: "明", bg: "var(--accent-green)", joined: true },
                  { name: "爸爸", role: "主讲人", avatar: "爸", bg: "var(--accent-coral)", joined: true },
                  { name: "妈妈", role: "补充讲述", avatar: "妈", bg: "var(--accent-coral)", joined: false },
                  { name: "大姐", role: "补充讲述", avatar: "姐", bg: "var(--accent-warm)", joined: false },
                ].map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 38, height: 38, borderRadius: 19, backgroundColor: m.bg, color: "#fff", fontSize: 14, fontWeight: 600, opacity: m.joined ? 1 : 0.6 }}
                    >
                      {m.avatar}
                    </div>
                    <div className="flex-1">
                      <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)", display: "block" }}>{m.name}</span>
                      <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{m.role}</span>
                    </div>
                    {m.joined ? (
                      <span
                        className="flex items-center gap-1"
                        style={{ fontSize: 11, color: "var(--accent-green)", padding: "4px 10px", borderRadius: 8, backgroundColor: "var(--accent-green-light)" }}
                      >
                        <Check size={10} />
                        已加入
                      </span>
                    ) : (
                      <button
                        className="flex items-center justify-center gap-1"
                        style={{ height: 30, padding: "0 14px", borderRadius: 15, backgroundColor: "var(--accent-green)", border: "none", cursor: "pointer", color: "#fff", fontSize: 12, fontWeight: 600 }}
                      >
                        <UserPlus size={12} />
                        邀请
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, backgroundColor: "var(--border-subtle)", marginBottom: 16 }} />

              {/* Share buttons */}
              <div className="flex gap-3">
                <button
                  className="flex items-center justify-center gap-2 flex-1"
                  style={{
                    height: 48, borderRadius: 12,
                    backgroundColor: "var(--accent-green)", border: "none", cursor: "pointer",
                    color: "#fff", fontSize: 14, fontWeight: 600,
                  }}
                >
                  <Forward size={18} />
                  转发给好友
                </button>
                <button
                  className="flex items-center justify-center gap-2 flex-1"
                  style={{
                    height: 48, borderRadius: 12,
                    backgroundColor: "var(--accent-green-light)", border: "none", cursor: "pointer",
                    color: "var(--accent-green)", fontSize: 14, fontWeight: 600,
                  }}
                >
                  <CircleDot size={18} />
                  转发到朋友圈
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </PhoneFrame>
  );
}
