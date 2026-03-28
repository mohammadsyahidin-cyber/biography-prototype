"use client";

import Link from "next/link";
import { UserPlus } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

const members = [
  {
    name: "小明",
    avatar: "我",
    bg: "var(--accent-green)",
    role: "发起人",
    roleBg: "var(--accent-green-light)",
    roleColor: "var(--accent-green)",
    stats: "参与 5 个话题 · 12 次对话",
  },
  {
    name: "李建国",
    avatar: "爸",
    bg: "var(--accent-coral)",
    role: "主讲人",
    roleBg: "var(--accent-coral-light)",
    roleColor: "var(--accent-coral)",
    stats: "参与 4 个话题 · 8 次对话",
  },
  {
    name: "李秀芳",
    avatar: "妈",
    bg: "var(--accent-warm)",
    role: "参与者",
    roleBg: "var(--bg-muted)",
    roleColor: "var(--text-tertiary)",
    stats: "参与 2 个话题 · 3 次对话",
  },
];

export default function MembersPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="成员管理" />

      {/* Member list */}
      <div
        className="flex-1 overflow-auto font-outfit"
        style={{ padding: "16px 20px" }}
      >
        <p style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 12 }}>
          当前成员（3人）
        </p>
        <div className="flex flex-col gap-3">
          {members.map((m, i) => (
            <Link
              key={i}
              href="/member-detail"
              className="flex items-center gap-3"
              style={{
                backgroundColor: "var(--bg-card)",
                borderRadius: 14,
                border: "1px solid var(--border-subtle)",
                padding: 16,
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: m.bg,
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>
                  {m.avatar}
                </span>
              </div>
              <div>
                <div
                  className="flex items-center gap-2"
                  style={{ marginBottom: 3 }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                    }}
                  >
                    {m.name}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      padding: "2px 7px",
                      borderRadius: 6,
                      backgroundColor: m.roleBg,
                      color: m.roleColor,
                    }}
                  >
                    {m.role}
                  </span>
                </div>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>
                  {m.stats}
                </span>
              </div>
            </Link>
          ))}

          {/* Invite button */}
          <Link
            href="/invite"
            className="flex items-center justify-center gap-2"
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 14,
              border: "1px solid var(--border-subtle)",
              padding: 16,
              color: "var(--accent-green)",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <UserPlus size={16} />
            邀请家人加入
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
