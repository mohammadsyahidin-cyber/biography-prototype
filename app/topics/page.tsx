"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { TabBar } from "@/components/TabBar";
import { EmptyState } from "@/components/EmptyState";
import Link from "next/link";
import { ChevronRight, Check, PenLine, Lock, MessageCircle, Users, ListTree, Mic } from "lucide-react";
import { useAuth } from "@/lib/auth";

type Status = "done" | "ready" | "draft" | "todo";

interface Section {
  title: string;
  status: Status;
  participants?: number;
  messages?: number;
}

interface Chapter {
  num: number;
  title: string;
  sections: Section[];
}

const chapters: Chapter[] = [
  {
    num: 1,
    title: "童年生活与成长环境",
    sections: [
      { title: "出生地与老宅", status: "done", participants: 2, messages: 8 },
      { title: "清水河摸鱼", status: "done", participants: 2, messages: 5 },
      { title: "兄弟们的趣事", status: "draft", participants: 1, messages: 3 },
      { title: "街坊邻居", status: "draft" },
      { title: "上学之前的日子", status: "todo" },
    ],
  },
  {
    num: 2,
    title: "求学与启蒙",
    sections: [
      { title: "十里山路上学", status: "draft", participants: 1, messages: 2 },
      { title: "恩师记忆", status: "draft" },
      { title: "中学时光", status: "todo" },
    ],
  },
  {
    num: 3,
    title: "工作与事业",
    sections: [
      { title: "进入工厂", status: "draft", participants: 1, messages: 1 },
      { title: "同事与友情", status: "todo" },
      { title: "职业变迁", status: "todo" },
    ],
  },
  {
    num: 4,
    title: "婚姻与家庭",
    sections: [
      { title: "恋爱故事", status: "todo" },
      { title: "子女教育", status: "todo" },
    ],
  },
  {
    num: 5,
    title: "人生感悟与寄语",
    sections: [
      { title: "人生哲学", status: "todo" },
      { title: "对后代寄语", status: "todo" },
    ],
  },
];

const statusConfig: Record<Status, { label: string; bg: string; color: string; Icon: typeof Check }> = {
  done: { label: "可生成", bg: "var(--accent-green-light)", color: "var(--accent-green)", Icon: Check },
  ready: { label: "可生成", bg: "var(--accent-green-light)", color: "var(--accent-green)", Icon: Check },
  draft: { label: "待补充", bg: "var(--accent-coral-light)", color: "var(--accent-coral)", Icon: PenLine },
  todo: { label: "未开始", bg: "var(--bg-muted)", color: "var(--text-tertiary)", Icon: Lock },
};

export default function TopicsPage() {
  const { isLoggedIn } = useAuth();
  const totalSections = chapters.reduce((s, c) => s + c.sections.length, 0);
  const doneSections = chapters.reduce(
    (s, c) => s + c.sections.filter((sec) => sec.status === "done").length,
    0
  );

  return (
    <PhoneFrame>
      <StatusBar />
      {!isLoggedIn ? (
        <>
          <BackHeader title="大纲" />
          <div className="flex-1 flex flex-col items-center justify-center" style={{ backgroundColor: "var(--bg-page)" }}>
            <EmptyState
              icon={<ListTree size={36} style={{ color: "var(--text-tertiary)" }} />}
              title="还没有大纲"
              description={"登录后开始创建传记大纲"}
              action={
                <Link href="/login" className="flex items-center justify-center gap-2 font-outfit" style={{ height: 48, paddingLeft: 28, paddingRight: 28, borderRadius: 22, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 15, fontWeight: 600 }}>
                  <Mic size={18} />
                  开始对话
                </Link>
              }
            />
          </div>
        </>
      ) : (
        <>
      <BackHeader title="父亲的岁月" />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "4px 20px 24px" }}>

          {/* Progress overview */}
          <div
            style={{
              padding: "14px 16px",
              borderRadius: 14,
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              marginBottom: 16,
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>全书进度</span>
              <span style={{ fontSize: 13, color: "var(--accent-green)", fontWeight: 600 }}>
                {doneSections}/{totalSections} 节可生成
              </span>
            </div>
            <div style={{ height: 6, borderRadius: 3, backgroundColor: "var(--bg-muted)", overflow: "hidden" }}>
              <div
                style={{
                  width: `${(doneSections / totalSections) * 100}%`,
                  height: "100%",
                  borderRadius: 3,
                  backgroundColor: "var(--accent-green)",
                }}
              />
            </div>
          </div>

          {/* Chapter list */}
          <div className="flex flex-col gap-4">
            {chapters.map((ch) => {
              const chDone = ch.sections.filter((s) => s.status === "done").length;
              return (
                <div key={ch.num}>
                  {/* Chapter header */}
                  <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        backgroundColor: "var(--accent-green)",
                        color: "var(--white)",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      {ch.num}
                    </div>
                    <div className="flex-1">
                      <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>
                        {ch.title}
                      </span>
                    </div>
                    <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                      {chDone}/{ch.sections.length}
                    </span>
                  </div>

                  {/* Sections with timeline */}
                  <div style={{ marginLeft: 13 }}>
                    {ch.sections.map((sec, si) => {
                      const cfg = statusConfig[sec.status];
                      const StatusIcon = cfg.Icon;
                      return (
                        <Link
                          key={si}
                          href="/topic-detail"
                          className="flex"
                          style={{ textDecoration: "none" }}
                        >
                          {/* Timeline line + dot */}
                          <div
                            className="flex flex-col items-center shrink-0"
                            style={{ width: 16 }}
                          >
                            <div
                              style={{
                                width: 1,
                                height: 10,
                                backgroundColor: si === 0 ? "transparent" : "var(--border-subtle)",
                              }}
                            />
                            <div
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: sec.status === "done" ? "var(--accent-green)" : sec.status === "draft" ? "var(--accent-coral)" : "var(--border-subtle)",
                                flexShrink: 0,
                              }}
                            />
                            <div
                              style={{
                                width: 1,
                                flex: 1,
                                backgroundColor: si === ch.sections.length - 1 ? "transparent" : "var(--border-subtle)",
                              }}
                            />
                          </div>

                          {/* Section card */}
                          <div
                            className="flex items-center flex-1"
                            style={{
                              marginLeft: 10,
                              marginBottom: si < ch.sections.length - 1 ? 4 : 0,
                              padding: "10px 10px 10px 12px",
                              borderRadius: 12,
                              backgroundColor: "var(--bg-card)",
                              border: `1px solid ${sec.status === "done" ? "var(--accent-green-light)" : "var(--border-subtle)"}`,
                            }}
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-2" style={{ marginBottom: 3 }}>
                                <span style={{ fontSize: 14, fontWeight: 500, color: sec.status === "todo" ? "var(--text-tertiary)" : "var(--text-primary)" }}>
                                  {ch.num}.{si + 1} {sec.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span
                                  className="flex items-center gap-1"
                                  style={{
                                    fontSize: 10,
                                    fontWeight: 500,
                                    padding: "1px 6px",
                                    borderRadius: 4,
                                    backgroundColor: cfg.bg,
                                    color: cfg.color,
                                  }}
                                >
                                  <StatusIcon size={9} />
                                  {cfg.label}
                                </span>
                                {sec.messages && sec.messages > 0 && (
                                  <span className="flex items-center gap-1" style={{ fontSize: 10, color: "var(--text-tertiary)" }}>
                                    <MessageCircle size={9} />
                                    {sec.messages}
                                  </span>
                                )}
                                {sec.participants && sec.participants > 0 && (
                                  <span className="flex items-center gap-1" style={{ fontSize: 10, color: "var(--text-tertiary)" }}>
                                    <Users size={9} />
                                    {sec.participants}
                                  </span>
                                )}
                              </div>
                            </div>
                            <ChevronRight size={16} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        </>
      )}
      <TabBar activeTab="outline" />
    </PhoneFrame>
  );
}
