"use client";

import { Copy, MessageCircle, QrCode, User } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

interface MemberInfo {
  name: string;
  relation: string;
  avatarText: string;
  avatarColor: "green" | "coral" | "grey";
  role: string;
  badgeText: string;
  badgeType: "green" | "coral" | "grey";
  isIcon?: boolean;
}

const joinedMembers: MemberInfo[] = [
  {
    name: "李建国",
    relation: "爸爸",
    avatarText: "建",
    avatarColor: "green",
    role: "参与者",
    badgeText: "已加入",
    badgeType: "green",
  },
  {
    name: "王秀芳",
    relation: "妈妈",
    avatarText: "芳",
    avatarColor: "coral",
    role: "参与者",
    badgeText: "已加入",
    badgeType: "green",
  },
  {
    name: "李小明",
    relation: "你",
    avatarText: "明",
    avatarColor: "green",
    role: "发起人",
    badgeText: "发起人",
    badgeType: "coral",
  },
];

const pendingMembers: MemberInfo[] = [
  {
    name: "李小红",
    relation: "妹妹",
    avatarText: "",
    avatarColor: "grey",
    role: "已发送邀请·等待加入",
    badgeText: "待加入",
    badgeType: "grey",
    isIcon: true,
  },
];

const avatarColorMap = {
  green: "bg-[var(--accent-green)]",
  coral: "bg-[var(--accent-coral)]",
  grey: "bg-[var(--bg-muted)]",
};

const badgeStyleMap = {
  green:
    "bg-[var(--accent-green-light)] text-[var(--accent-green)]",
  coral:
    "bg-[var(--accent-coral-light)] text-[var(--accent-coral)]",
  grey: "bg-[var(--bg-muted)] text-[var(--text-tertiary)]",
};

function MemberCard({ member }: { member: MemberInfo }) {
  return (
    <div className="flex items-center gap-[12px] py-[12px]">
      {/* Avatar */}
      <div
        className={`w-[44px] h-[44px] rounded-full ${avatarColorMap[member.avatarColor]} flex items-center justify-center shrink-0`}
      >
        {member.isIcon ? (
          <User size={20} className="text-[var(--text-tertiary)]" />
        ) : (
          <span className="text-white text-[16px] font-semibold font-outfit">
            {member.avatarText}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-[2px]">
        <div className="flex items-center gap-[6px]">
          <span className="text-[15px] font-semibold text-[var(--text-primary)] font-outfit">
            {member.name}
          </span>
          <span className="text-[13px] text-[var(--text-tertiary)] font-outfit">
            {member.relation}
          </span>
        </div>
        <span className="text-[12px] text-[var(--text-secondary)] font-outfit">
          {member.role}
        </span>
      </div>

      {/* Badge */}
      <span
        className={`px-[10px] py-[4px] rounded-[8px] text-[12px] font-medium font-outfit ${badgeStyleMap[member.badgeType]}`}
      >
        {member.badgeText}
      </span>
    </div>
  );
}

export default function InvitePage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="邀请家人" />

      <div className="flex-1 overflow-auto px-[16px] py-[16px] flex flex-col gap-[24px]">
        {/* Invite link card */}
        <div className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-[20px] py-[24px] flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[6px]">
            <h2 className="text-[16px] font-semibold text-[var(--text-primary)] font-outfit">
              分享邀请链接
            </h2>
            <p className="text-[13px] text-[var(--text-secondary)] font-outfit">
              将链接发送给家人，他们可以直接加入
            </p>
          </div>

          {/* Link row */}
          <div className="flex items-center gap-[10px] bg-[var(--bg-surface)] rounded-[12px] h-[48px] px-[14px]">
            <span className="flex-1 text-[14px] text-[var(--text-secondary)] font-outfit truncate">
              bio.app/invite/f8k2x
            </span>
            <button className="px-[14px] py-[6px] rounded-[8px] bg-[var(--accent-green)] text-white text-[13px] font-semibold font-outfit flex items-center gap-[4px] shrink-0">
              <Copy size={14} />
              复制
            </button>
          </div>

          {/* Share icons */}
          <div className="flex justify-center gap-[32px]">
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[#07C160] flex items-center justify-center">
                <MessageCircle size={22} className="text-white" />
              </div>
              <span className="text-[11px] text-[var(--text-secondary)] font-outfit">
                微信
              </span>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--accent-coral)] flex items-center justify-center">
                <MessageCircle size={22} className="text-white" />
              </div>
              <span className="text-[11px] text-[var(--text-secondary)] font-outfit">
                短信
              </span>
            </div>
            <div className="flex flex-col items-center gap-[6px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center">
                <QrCode size={22} className="text-[var(--text-secondary)]" />
              </div>
              <span className="text-[11px] text-[var(--text-secondary)] font-outfit">
                二维码
              </span>
            </div>
          </div>
        </div>

        {/* Joined members */}
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[var(--text-primary)] font-outfit mb-[8px]">
            已加入的家人 3人
          </span>
          <div className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-[16px] divide-y divide-[var(--border-subtle)]">
            {joinedMembers.map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>

        {/* Pending members */}
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-[var(--text-primary)] font-outfit mb-[8px]">
            待加入
          </span>
          <div className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-[16px]">
            {pendingMembers.map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
