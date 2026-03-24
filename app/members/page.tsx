"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { TabBar } from "@/components/TabBar";

interface MemberInfo {
  name: string;
  relation: string;
  avatarText: string;
  avatarColor: "green" | "coral";
  roleBadge: string;
  roleBadgeType: "green" | "coral" | "grey";
  stats: string;
  isYou?: boolean;
}

const members: MemberInfo[] = [
  {
    name: "张小明",
    relation: "你",
    avatarText: "我",
    avatarColor: "green",
    roleBadge: "发起人",
    roleBadgeType: "green",
    stats: "参与 5 个话题 · 12 次对话",
    isYou: true,
  },
  {
    name: "张建国",
    relation: "爸",
    avatarText: "爸",
    avatarColor: "green",
    roleBadge: "主讲人",
    roleBadgeType: "coral",
    stats: "参与 4 个话题 · 8 次对话",
  },
  {
    name: "李秀芳",
    relation: "妈",
    avatarText: "妈",
    avatarColor: "coral",
    roleBadge: "参与者",
    roleBadgeType: "grey",
    stats: "参与 2 个话题 · 3 次对话",
  },
];

const roleBadgeStyleMap = {
  green:
    "bg-[var(--accent-green-light)] text-[var(--accent-green)]",
  coral:
    "bg-[var(--accent-coral-light)] text-[var(--accent-coral)]",
  grey: "bg-[var(--bg-muted)] text-[var(--text-tertiary)]",
};

const avatarColorMap = {
  green: "bg-[var(--accent-green)]",
  coral: "bg-[var(--accent-coral)]",
};

export default function MembersPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="家庭成员" />

      <div className="flex-1 overflow-auto px-[16px] py-[16px] flex flex-col gap-[16px]">
        {/* Section label */}
        <span className="text-[14px] font-semibold text-[var(--text-primary)] font-outfit">
          当前成员（3人）
        </span>

        {/* Member cards */}
        <div className="flex flex-col gap-[10px]">
          {members.map((member, i) => (
            <div
              key={i}
              className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] p-[16px] flex items-center gap-[12px]"
            >
              {/* Avatar */}
              <div
                className={`w-[48px] h-[48px] rounded-full ${avatarColorMap[member.avatarColor]} flex items-center justify-center shrink-0`}
              >
                <span className="text-white text-[18px] font-semibold font-outfit">
                  {member.avatarText}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col gap-[4px]">
                <div className="flex items-center gap-[6px]">
                  <span className="text-[15px] font-semibold text-[var(--text-primary)] font-outfit">
                    {member.name}
                  </span>
                  {member.isYou && (
                    <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
                      ({member.relation})
                    </span>
                  )}
                </div>
                <span className="text-[12px] text-[var(--text-secondary)] font-outfit">
                  {member.stats}
                </span>
              </div>

              {/* Role badge */}
              <span
                className={`px-[10px] py-[4px] rounded-[8px] text-[12px] font-medium font-outfit shrink-0 ${roleBadgeStyleMap[member.roleBadgeType]}`}
              >
                {member.roleBadge}
              </span>
            </div>
          ))}
        </div>

        {/* Invite button */}
        <Link
          href="/invite"
          className="rounded-[16px] border-2 border-dashed border-[var(--border-subtle)] p-[16px] flex items-center justify-center gap-[8px]"
        >
          <div className="w-[32px] h-[32px] rounded-full bg-[var(--accent-green-light)] flex items-center justify-center">
            <Plus size={18} className="text-[var(--accent-green)]" />
          </div>
          <span className="text-[15px] font-semibold text-[var(--accent-green)] font-outfit">
            邀请家人加入
          </span>
        </Link>
      </div>

      <TabBar activeTab="family" />
    </PhoneFrame>
  );
}
