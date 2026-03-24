"use client";

import {
  Pencil,
  BookOpen,
  UserCircle,
  PenLine,
  Bell,
  Type,
  Download,
  Info,
  MessageSquare,
  ChevronRight,
  LogOut,
  Plus,
  ArrowLeftRight,
} from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import type { LucideIcon } from "lucide-react";

interface SettingRow {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  value?: string;
  hasToggle?: boolean;
  toggleOn?: boolean;
  hasChevron?: boolean;
}

const biographyRows: SettingRow[] = [
  {
    icon: BookOpen,
    iconColor: "text-[var(--accent-green)]",
    label: "传记名称",
    value: "父亲的岁月",
    hasChevron: true,
  },
  {
    icon: UserCircle,
    iconColor: "text-[var(--accent-green)]",
    label: "主角人物",
    value: "李建国",
    hasChevron: true,
  },
  {
    icon: PenLine,
    iconColor: "text-[var(--accent-green)]",
    label: "写作风格",
    value: "温情叙事",
    hasChevron: true,
  },
];

const generalRows: SettingRow[] = [
  {
    icon: Bell,
    iconColor: "text-[var(--accent-coral)]",
    label: "消息通知",
    hasToggle: true,
    toggleOn: true,
  },
  {
    icon: Type,
    iconColor: "text-[var(--accent-coral)]",
    label: "字体大小",
    value: "标准",
    hasChevron: true,
  },
  {
    icon: Download,
    iconColor: "text-[var(--accent-coral)]",
    label: "导出传记",
    hasChevron: true,
  },
];

const otherRows: SettingRow[] = [
  {
    icon: Info,
    iconColor: "text-[var(--text-tertiary)]",
    label: "关于我们",
    hasChevron: true,
  },
  {
    icon: MessageSquare,
    iconColor: "text-[var(--text-tertiary)]",
    label: "意见反馈",
    hasChevron: true,
  },
];

function SettingRowItem({
  row,
  isLast,
}: {
  row: SettingRow;
  isLast: boolean;
}) {
  const Icon = row.icon;
  return (
    <>
      <div className="flex items-center gap-[12px] py-[14px]">
        <Icon size={20} className={row.iconColor} />
        <span className="flex-1 text-[15px] text-[var(--text-primary)] font-outfit">
          {row.label}
        </span>
        {row.value && (
          <span className="text-[14px] text-[var(--text-secondary)] font-outfit">
            {row.value}
          </span>
        )}
        {row.hasToggle && (
          <div
            className={`w-[44px] h-[26px] rounded-full flex items-center px-[3px] ${
              row.toggleOn
                ? "bg-[var(--accent-green)] justify-end"
                : "bg-[var(--bg-muted)] justify-start"
            }`}
          >
            <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
          </div>
        )}
        {row.hasChevron && (
          <ChevronRight
            size={18}
            className="text-[var(--text-tertiary)]"
          />
        )}
      </div>
      {!isLast && <div className="h-[1px] bg-[var(--border-subtle)] ml-[32px]" />}
    </>
  );
}

function SettingsSection({
  title,
  rows,
}: {
  title: string;
  rows: SettingRow[];
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[13px] font-semibold text-[var(--text-secondary)] font-outfit">
        {title}
      </span>
      <div className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-[16px]">
        {rows.map((row, i) => (
          <SettingRowItem key={i} row={row} isLast={i === rows.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="设置" />

      <div className="flex-1 overflow-auto px-[24px] py-[16px] flex flex-col gap-[24px]">
        {/* Profile card */}
        <div className="flex items-center gap-[14px]">
          <div className="w-[56px] h-[56px] rounded-full bg-[var(--accent-green)] flex items-center justify-center shrink-0">
            <span className="text-white text-[22px] font-semibold font-outfit">
              明
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-[2px]">
            <span className="text-[18px] font-semibold text-[var(--text-primary)] font-outfit">
              李小明
            </span>
            <span className="text-[14px] text-[var(--text-secondary)] font-outfit">
              发起人·管理员
            </span>
          </div>
          <button className="w-[36px] h-[36px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center">
            <Pencil size={16} className="text-[var(--text-secondary)]" />
          </button>
        </div>

        {/* Biography settings */}
        <SettingsSection title="当前传记" rows={biographyRows} />

        {/* Biography management */}
        <div className="flex gap-[10px]">
          <button className="flex-1 flex items-center justify-center gap-[8px] rounded-[14px] bg-[var(--accent-green)] py-[13px]">
            <Plus size={18} className="text-white" />
            <span className="text-[14px] font-semibold text-white font-outfit">新建传记</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-[8px] rounded-[14px] bg-[var(--bg-card)] border border-[var(--border-strong)] py-[13px]">
            <ArrowLeftRight size={16} className="text-[var(--text-primary)]" />
            <span className="text-[14px] font-semibold text-[var(--text-primary)] font-outfit">切换传记</span>
          </button>
        </div>

        {/* General settings */}
        <SettingsSection title="通用设置" rows={generalRows} />

        {/* Other */}
        <SettingsSection title="其他" rows={otherRows} />

        {/* Logout button */}
        <button className="rounded-[14px] bg-[var(--bg-card)] border border-[var(--border-subtle)] py-[14px] flex items-center justify-center gap-[8px]">
          <LogOut size={18} className="text-[#E05A47]" />
          <span className="text-[15px] font-semibold text-[#E05A47] font-outfit">
            退出登录
          </span>
        </button>
      </div>
    </PhoneFrame>
  );
}
