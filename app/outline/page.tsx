"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import {
  Share2,
  GripVertical,
  Plus,
  Lightbulb,
  ChevronDown,
  ChevronRight,
  Trash2,
  ArrowUp,
  ArrowDown,
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
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["c1"]));

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
          ? { ...ch, sections: ch.sections.filter((s) => s.id !== sectionId) }
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
      <BackHeader
        title="生成大纲"
        rightAction={
          <button
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "var(--bg-muted)",
            }}
          >
            <Share2
              size={16}
              style={{ color: "var(--text-secondary)" }}
            />
          </button>
        }
      />
      <div
        className="flex-1 overflow-auto font-outfit"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <div style={{ padding: "0 20px 24px" }}>
          {/* hint banner */}
          <div
            className="flex items-start gap-2"
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              backgroundColor: "var(--accent-green-light)",
              marginBottom: 20,
            }}
          >
            <Lightbulb
              size={16}
              style={{
                color: "var(--accent-green)",
                marginTop: 2,
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--accent-green)",
              }}
            >
              点击章节展开小节，可增删、拖拽调整顺序
            </p>
          </div>

          {/* chapters */}
          <div className="flex flex-col gap-3">
            {chapters.map((ch, chIdx) => {
              const isExpanded = expandedIds.has(ch.id);
              return (
                <div
                  key={ch.id}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderRadius: 14,
                    border: `1px solid ${isExpanded ? "var(--accent-green)" : "var(--border-subtle)"}`,
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
                      padding: "14px 12px 14px 14px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        backgroundColor: "var(--accent-green)",
                        color: "var(--white)",
                        fontSize: 14,
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
                    <div className="flex items-center gap-1">
                      {isExpanded ? (
                        <ChevronDown
                          size={18}
                          style={{ color: "var(--accent-green)" }}
                        />
                      ) : (
                        <ChevronRight
                          size={18}
                          style={{ color: "var(--text-tertiary)" }}
                        />
                      )}
                    </div>
                  </button>

                  {/* Expanded sections */}
                  {isExpanded && (
                    <div
                      style={{
                        borderTop: "1px solid var(--border-subtle)",
                        padding: "8px 14px 10px",
                      }}
                    >
                      {ch.sections.map((sec, secIdx) => (
                        <div
                          key={sec.id}
                          className="flex items-center gap-2"
                          style={{
                            padding: "10px 0",
                            borderBottom:
                              secIdx < ch.sections.length - 1
                                ? "1px solid var(--border-subtle)"
                                : "none",
                          }}
                        >
                          <GripVertical
                            size={14}
                            style={{
                              color: "var(--text-tertiary)",
                              flexShrink: 0,
                            }}
                          />
                          <div
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: "var(--accent-green)",
                              opacity: 0.5,
                              flexShrink: 0,
                            }}
                          />
                          <span
                            className="flex-1"
                            style={{
                              fontSize: 14,
                              color: "var(--text-primary)",
                            }}
                          >
                            {sec.title}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() =>
                                moveSection(ch.id, secIdx, "up")
                              }
                              style={{
                                width: 24,
                                height: 24,
                                borderRadius: 6,
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: secIdx === 0 ? 0.25 : 1,
                              }}
                            >
                              <ArrowUp
                                size={13}
                                style={{
                                  color: "var(--text-tertiary)",
                                }}
                              />
                            </button>
                            <button
                              onClick={() =>
                                moveSection(ch.id, secIdx, "down")
                              }
                              style={{
                                width: 24,
                                height: 24,
                                borderRadius: 6,
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity:
                                  secIdx === ch.sections.length - 1
                                    ? 0.25
                                    : 1,
                              }}
                            >
                              <ArrowDown
                                size={13}
                                style={{
                                  color: "var(--text-tertiary)",
                                }}
                              />
                            </button>
                            <button
                              onClick={() =>
                                deleteSection(ch.id, sec.id)
                              }
                              style={{
                                width: 24,
                                height: 24,
                                borderRadius: 6,
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Trash2
                                size={13}
                                style={{
                                  color: "var(--text-tertiary)",
                                }}
                              />
                            </button>
                          </div>
                        </div>
                      ))}

                      {/* Add section */}
                      <button
                        onClick={() => addSection(ch.id)}
                        className="flex items-center justify-center gap-1"
                        style={{
                          width: "100%",
                          height: 36,
                          marginTop: 6,
                          borderRadius: 8,
                          border: "1px dashed var(--border-subtle)",
                          background: "none",
                          cursor: "pointer",
                        }}
                      >
                        <Plus
                          size={14}
                          style={{ color: "var(--text-tertiary)" }}
                        />
                        <span
                          style={{
                            fontSize: 12,
                            color: "var(--text-tertiary)",
                          }}
                        >
                          添加小节
                        </span>
                      </button>

                      {/* Chapter actions */}
                      <div
                        className="flex items-center justify-between"
                        style={{ marginTop: 8 }}
                      >
                        <button
                          onClick={() => deleteChapter(ch.id)}
                          className="flex items-center gap-1"
                          style={{
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            fontSize: 12,
                            color: "var(--text-tertiary)",
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
                              width: 28,
                              height: 28,
                              borderRadius: 6,
                              backgroundColor: "var(--bg-muted)",
                              border: "none",
                              cursor: "pointer",
                              opacity: chIdx === 0 ? 0.3 : 1,
                            }}
                          >
                            <ArrowUp
                              size={14}
                              style={{ color: "var(--text-secondary)" }}
                            />
                          </button>
                          <button
                            onClick={() => moveChapter(chIdx, "down")}
                            className="flex items-center justify-center"
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: 6,
                              backgroundColor: "var(--bg-muted)",
                              border: "none",
                              cursor: "pointer",
                              opacity:
                                chIdx === chapters.length - 1 ? 0.3 : 1,
                            }}
                          >
                            <ArrowDown
                              size={14}
                              style={{ color: "var(--text-secondary)" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* add chapter button */}
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
            <Plus
              size={18}
              style={{ color: "var(--text-tertiary)" }}
            />
            <span
              style={{ fontSize: 14, color: "var(--text-tertiary)" }}
            >
              添加章节
            </span>
          </button>
        </div>
      </div>

      {/* bottom buttons */}
      <div
        className="shrink-0 flex gap-3 font-outfit"
        style={{
          padding: "12px 20px 28px",
          backgroundColor: "var(--bg-page)",
        }}
      >
        <button
          onClick={() => router.push("/outline-chat")}
          style={{
            flex: 1,
            height: 48,
            borderRadius: 12,
            border: "1.5px solid var(--border-subtle)",
            backgroundColor: "var(--bg-card)",
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
            cursor: "pointer",
          }}
        >
          修改大纲
        </button>
        <Link
          href="/outline-done"
          className="flex items-center justify-center"
          style={{
            flex: 1,
            height: 48,
            borderRadius: 12,
            backgroundColor: "var(--accent-green)",
            color: "var(--white)",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          确认大纲
        </Link>
      </div>
    </PhoneFrame>
  );
}
