"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { TabBar } from "@/components/TabBar";
import Link from "next/link";
import { ChevronRight, MessageCircle, Users } from "lucide-react";

const topics = [
  { id: "1.1", title: "出生地与老宅", status: "可生成", statusColor: "green", participants: 2, messages: 8 },
  { id: "1.2", title: "清水河摸鱼", status: "可生成", statusColor: "green", participants: 2, messages: 5 },
  { id: "1.3", title: "兄弟们的趣事", status: "待补充", statusColor: "coral", participants: 1, messages: 3 },
  { id: "1.4", title: "街坊邻居", status: "待补充", statusColor: "coral", participants: 0, messages: 0 },
  { id: "1.5", title: "上学之前的日子", status: "未开始", statusColor: "grey", participants: 0, messages: 0 },
];

function getBorderColor(c: string) {
  if (c === "green") return "var(--accent-green)";
  if (c === "coral") return "var(--accent-coral)";
  return "var(--bg-muted)";
}

function getBadgeBg(c: string) {
  if (c === "green") return "var(--accent-green-light)";
  if (c === "coral") return "var(--accent-coral-light)";
  return "var(--bg-muted)";
}

function getBadgeText(c: string) {
  if (c === "green") return "var(--accent-green)";
  if (c === "coral") return "var(--accent-coral)";
  return "var(--text-tertiary)";
}

export default function TopicsPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="父亲的岁月" />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "4px 20px 24px" }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>第一章 · 童年生活与成长环境</h2>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 16 }}>以下是本章的小节话题，点击进入查看对话或补充内容</p>

          <div className="flex flex-col gap-3">
            {topics.map((t) => (
              <Link
                key={t.id}
                href="/topic-detail"
                className="flex items-center"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: 14,
                  padding: "14px 12px 14px 0",
                  border: "1px solid var(--border-subtle)",
                  overflow: "hidden",
                }}
              >
                {/* left color border */}
                <div style={{ width: 4, alignSelf: "stretch", backgroundColor: getBorderColor(t.statusColor), borderRadius: "4px 0 0 4px", flexShrink: 0 }} />
                <div className="flex-1" style={{ paddingLeft: 14 }}>
                  <div className="flex items-center gap-2" style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{t.id} {t.title}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span style={{ fontSize: 11, color: getBadgeText(t.statusColor), backgroundColor: getBadgeBg(t.statusColor), padding: "2px 8px", borderRadius: 6, fontWeight: 500 }}>{t.status}</span>
                  </div>
                  {t.messages > 0 ? (
                    <div className="flex items-center gap-3" style={{ marginTop: 6 }}>
                      <div className="flex items-center gap-1">
                        <Users size={12} style={{ color: "var(--text-tertiary)" }} />
                        <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{t.participants}人参与</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={12} style={{ color: "var(--text-tertiary)" }} />
                        <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{t.messages}条对话</span>
                      </div>
                    </div>
                  ) : (
                    <p style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 6 }}>还没有人聊这个话题</p>
                  )}
                </div>
                <ChevronRight size={18} style={{ color: "var(--text-tertiary)", marginRight: 4, flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <TabBar activeTab="outline" />
    </PhoneFrame>
  );
}
