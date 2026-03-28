"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Pencil, BookOpen, UserCircle, PenLine, Bell, Type, Download, Info,
  MessageSquare, ChevronRight, LogOut, Plus, ArrowLeftRight, X, Check,
  FileText, BookMarked, ImageIcon, CircleCheck, User,
} from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { TabBar } from "@/components/TabBar";
import { useAuth, logout } from "@/lib/auth";
import type { LucideIcon } from "lucide-react";

interface SettingRow {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  value?: string;
  hasToggle?: boolean;
  toggleOn?: boolean;
  hasChevron?: boolean;
  href?: string;
  onClick?: () => void;
}

function SettingRowItem({ row, isLast }: { row: SettingRow; isLast: boolean }) {
  const Icon = row.icon;
  const content = (
    <>
      <div className="flex items-center gap-[12px] py-[14px]">
        <Icon size={20} className={row.iconColor} />
        <span className="flex-1 text-[15px] text-[var(--text-primary)] font-outfit">{row.label}</span>
        {row.value && <span className="text-[14px] text-[var(--text-secondary)] font-outfit">{row.value}</span>}
        {row.hasToggle && (
          <div className={`w-[44px] h-[26px] rounded-full flex items-center px-[3px] ${row.toggleOn ? "bg-[var(--accent-green)] justify-end" : "bg-[var(--bg-muted)] justify-start"}`}>
            <div className="w-[20px] h-[20px] rounded-full bg-white shadow-sm" />
          </div>
        )}
        {row.hasChevron && <ChevronRight size={18} className="text-[var(--text-tertiary)]" />}
      </div>
      {!isLast && <div className="h-[1px] bg-[var(--border-subtle)] ml-[32px]" />}
    </>
  );
  if (row.href) return <Link href={row.href}>{content}</Link>;
  if (row.onClick) return <button className="w-full text-left" onClick={row.onClick}>{content}</button>;
  return content;
}

function SettingsSection({ title, rows }: { title: string; rows: SettingRow[] }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[13px] font-semibold text-[var(--text-secondary)] font-outfit">{title}</span>
      <div className="rounded-[16px] bg-[var(--bg-card)] border border-[var(--border-subtle)] px-[16px]">
        {rows.map((row, i) => (
          <SettingRowItem key={i} row={row} isLast={i === rows.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();
  const [showFontSheet, setShowFontSheet] = useState(false);
  const [showExportSheet, setShowExportSheet] = useState(false);
  const [showSwitchSheet, setShowSwitchSheet] = useState(false);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [showProfileDialog, setShowProfileDialog] = useState(false);
  const [selectedFont, setSelectedFont] = useState(0);
  const [profileName, setProfileName] = useState("李小明");

  const fontSizes = ["标准", "大号", "特大号"];
  const fontPreviews = ["15px", "17px", "19px"];

  const biographyRows: SettingRow[] = [
    { icon: BookOpen, iconColor: "text-[var(--accent-green)]", label: "传记名称", value: "父亲的岁月", hasChevron: true, href: "/biography-info" },
    { icon: UserCircle, iconColor: "text-[var(--accent-green)]", label: "主角人物", value: "李建国", hasChevron: true, href: "/biography-info" },
    { icon: PenLine, iconColor: "text-[var(--accent-green)]", label: "写作风格", value: "温情叙事", hasChevron: true, href: "/biography-info" },
  ];

  const generalRows: SettingRow[] = [
    { icon: Bell, iconColor: "text-[var(--accent-coral)]", label: "消息通知", hasToggle: true, toggleOn: true },
    { icon: Type, iconColor: "text-[var(--accent-coral)]", label: "字体大小", value: fontSizes[selectedFont], hasChevron: true, onClick: () => setShowFontSheet(true) },
    { icon: Download, iconColor: "text-[var(--accent-coral)]", label: "导出传记", hasChevron: true, onClick: () => setShowExportSheet(true) },
  ];

  const otherRows: SettingRow[] = [
    { icon: Info, iconColor: "text-[var(--text-tertiary)]", label: "关于我们", hasChevron: true, href: "/about" },
    { icon: MessageSquare, iconColor: "text-[var(--text-tertiary)]", label: "意见反馈", hasChevron: true, href: "/feedback" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="我的" />

      {!isLoggedIn ? (
        /* ===== Guest / Not Logged In View ===== */
        <div className="flex-1 overflow-auto px-[24px] py-[16px] flex flex-col gap-[24px]">
          {/* Guest profile card */}
          <div className="flex items-center gap-[14px]">
            <div className="w-[56px] h-[56px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center shrink-0">
              <User size={24} className="text-[var(--text-tertiary)]" />
            </div>
            <div className="flex-1 flex flex-col gap-[2px]">
              <span className="text-[18px] font-semibold text-[var(--text-primary)] font-outfit">未登录</span>
              <span className="text-[14px] text-[var(--text-tertiary)] font-outfit">登录后体验完整功能</span>
            </div>
          </div>

          <SettingsSection title="通用设置" rows={[
            { icon: Type, iconColor: "text-[var(--accent-coral)]", label: "字体大小", value: fontSizes[selectedFont], hasChevron: true, onClick: () => setShowFontSheet(true) },
          ]} />

          <SettingsSection title="其他" rows={otherRows} />

          {/* Spacer */}
          <div className="flex-1" />

          {/* Login button */}
          <Link href="/login" className="rounded-[14px] bg-[var(--accent-green)] py-[14px] flex items-center justify-center gap-[8px]">
            <User size={18} className="text-white" />
            <span className="text-[15px] font-semibold text-white font-outfit">登录 / 注册</span>
          </Link>

          <div className="flex flex-col items-center gap-[4px] py-[8px]">
            <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">江河传记 v1.0</span>
          </div>
        </div>
      ) : (
      /* ===== Logged In View ===== */
      <div className="flex-1 overflow-auto px-[24px] py-[16px] flex flex-col gap-[24px]">
        {/* Profile card */}
        <div className="flex items-center gap-[14px]">
          <div className="w-[56px] h-[56px] rounded-full bg-[var(--accent-green)] flex items-center justify-center shrink-0">
            <span className="text-white text-[22px] font-semibold font-outfit">明</span>
          </div>
          <div className="flex-1 flex flex-col gap-[2px]">
            <span className="text-[18px] font-semibold text-[var(--text-primary)] font-outfit">李小明</span>
            <span className="text-[14px] text-[var(--text-secondary)] font-outfit">发起人·管理员</span>
          </div>
          <button onClick={() => setShowProfileDialog(true)} className="w-[36px] h-[36px] rounded-full bg-[var(--bg-muted)] flex items-center justify-center">
            <Pencil size={16} className="text-[var(--text-secondary)]" />
          </button>
        </div>

        <SettingsSection title="当前传记" rows={biographyRows} />

        <div className="flex gap-[10px]">
          <Link href="/create" className="flex-1 flex items-center justify-center gap-[8px] rounded-[14px] bg-[var(--accent-green)] py-[13px]">
            <Plus size={18} className="text-white" />
            <span className="text-[14px] font-semibold text-white font-outfit">新建传记</span>
          </Link>
          <button onClick={() => setShowSwitchSheet(true)} className="flex-1 flex items-center justify-center gap-[8px] rounded-[14px] bg-[var(--bg-card)] border border-[var(--border-strong)] py-[13px]">
            <ArrowLeftRight size={16} className="text-[var(--text-primary)]" />
            <span className="text-[14px] font-semibold text-[var(--text-primary)] font-outfit">切换传记</span>
          </button>
        </div>

        <SettingsSection title="通用设置" rows={generalRows} />
        <SettingsSection title="其他" rows={otherRows} />

        <button onClick={() => setShowLogoutDialog(true)} className="rounded-[14px] bg-[var(--bg-card)] border border-[var(--border-subtle)] py-[14px] flex items-center justify-center gap-[8px]">
          <LogOut size={18} className="text-[#E05A47]" />
          <span className="text-[15px] font-semibold text-[#E05A47] font-outfit">退出登录</span>
        </button>

        <div className="flex flex-col items-center gap-[4px] py-[8px]">
          <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">江河传记 v1.0</span>
        </div>
      </div>
      )}

      {/* Font Size Sheet */}
      {showFontSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end" onClick={() => setShowFontSheet(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--bg-card)", borderRadius: "20px 20px 0 0", paddingBottom: 28 }} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center" style={{ padding: "10px 20px 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-strong)", marginBottom: 14 }} />
              <div className="flex items-center justify-between w-full" style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>字体大小</span>
                <button onClick={() => setShowFontSheet(false)} className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)" }}>
                  <X size={16} style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
            </div>
            <div style={{ padding: "0 20px" }}>
              {fontSizes.map((s, i) => (
                <button key={i} onClick={() => { setSelectedFont(i); setShowFontSheet(false); }} className="flex items-center w-full" style={{ padding: "14px 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
                  <span className="flex-1" style={{ fontSize: 15, color: "var(--text-primary)" }}>{s}</span>
                  {selectedFont === i && <CircleCheck size={20} style={{ color: "var(--accent-green)" }} />}
                </button>
              ))}
              <div style={{ marginTop: 16, padding: 14, backgroundColor: "var(--bg-muted)", borderRadius: 12 }}>
                <p style={{ fontSize: fontPreviews[selectedFont], lineHeight: 1.6, color: "var(--text-secondary)" }}>建国和他的三个兄弟，几乎每天下午都会结伴去河边。</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Sheet */}
      {showExportSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end" onClick={() => setShowExportSheet(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--bg-card)", borderRadius: "20px 20px 0 0", paddingBottom: 28 }} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center" style={{ padding: "10px 20px 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-strong)", marginBottom: 14 }} />
              <div className="flex items-center justify-between w-full" style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>导出传记</span>
                <button onClick={() => setShowExportSheet(false)} className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)" }}>
                  <X size={16} style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
            </div>
            <div style={{ padding: "0 20px" }}>
              {[
                { icon: FileText, label: "PDF 文档", desc: "适合打印和分享" },
                { icon: BookMarked, label: "电子书", desc: "适合在手机/平板阅读" },
                { icon: ImageIcon, label: "长图", desc: "适合社交媒体分享" },
              ].map((item, i) => (
                <button key={i} onClick={() => setShowExportSheet(false)} className="flex items-center gap-3 w-full" style={{ padding: "14px 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
                  <div className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: "var(--bg-muted)" }}>
                    <item.icon size={20} style={{ color: "var(--accent-green)" }} />
                  </div>
                  <div className="flex-1 text-left">
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", display: "block" }}>{item.label}</span>
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{item.desc}</span>
                  </div>
                  <ChevronRight size={16} style={{ color: "var(--text-tertiary)" }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Switch Biography Sheet */}
      {showSwitchSheet && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end" onClick={() => setShowSwitchSheet(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--bg-card)", borderRadius: "20px 20px 0 0", paddingBottom: 28 }} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col items-center" style={{ padding: "10px 20px 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-strong)", marginBottom: 14 }} />
              <div className="flex items-center justify-between w-full" style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>切换传记</span>
                <button onClick={() => setShowSwitchSheet(false)} className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)" }}>
                  <X size={16} style={{ color: "var(--text-secondary)" }} />
                </button>
              </div>
            </div>
            <div style={{ padding: "0 20px" }}>
              {[
                { name: "父亲的岁月", role: "李建国", active: true },
                { name: "母亲的故事", role: "李秀芳", active: false },
                { name: "爷爷的回忆", role: "李德福", active: false },
              ].map((bio, i) => (
                <button key={i} onClick={() => setShowSwitchSheet(false)} className="flex items-center gap-3 w-full" style={{ padding: "14px 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
                  <div className="flex items-center justify-center" style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: bio.active ? "var(--accent-green)" : "var(--bg-muted)" }}>
                    <BookOpen size={18} style={{ color: bio.active ? "#fff" : "var(--text-tertiary)" }} />
                  </div>
                  <div className="flex-1 text-left">
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", display: "block" }}>{bio.name}</span>
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>主角: {bio.role}</span>
                  </div>
                  {bio.active && <CircleCheck size={20} style={{ color: "var(--accent-green)" }} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Logout Dialog */}
      {showLogoutDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center" onClick={() => setShowLogoutDialog(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--bg-card)", borderRadius: 20, padding: "28px 24px 20px", width: 300 }} onClick={(e) => e.stopPropagation()}>
            <p style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", textAlign: "center", marginBottom: 8 }}>确认退出</p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", textAlign: "center", marginBottom: 24 }}>退出后需要重新登录才能访问传记</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutDialog(false)} className="flex-1" style={{ height: 44, borderRadius: 12, backgroundColor: "var(--bg-muted)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>取消</button>
              <button onClick={() => { logout(); router.push("/home"); }} className="flex-1" style={{ height: 44, borderRadius: 12, backgroundColor: "#E05A47", fontSize: 15, fontWeight: 600, color: "#fff" }}>退出</button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Edit Dialog */}
      {showProfileDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center" onClick={() => setShowProfileDialog(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--bg-card)", borderRadius: 20, padding: "24px", width: 300 }} onClick={(e) => e.stopPropagation()}>
            <p style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)", marginBottom: 20 }}>编辑个人资料</p>
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <div className="flex items-center justify-center" style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: "var(--accent-green)" }}>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>明</span>
              </div>
              <div>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-green)" }}>更换头像</span>
                <p style={{ fontSize: 12, color: "var(--text-tertiary)" }}>支持从相册选择</p>
              </div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 6 }}>昵称</span>
            <input value={profileName} onChange={(e) => setProfileName(e.target.value)} className="w-full font-outfit" style={{ backgroundColor: "var(--bg-surface)", borderRadius: 10, border: "1px solid var(--border-subtle)", padding: "10px 12px", fontSize: 15, color: "var(--text-primary)", outline: "none", marginBottom: 20 }} />
            <div className="flex gap-3">
              <button onClick={() => setShowProfileDialog(false)} className="flex-1" style={{ height: 44, borderRadius: 12, backgroundColor: "var(--bg-muted)", fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>取消</button>
              <button onClick={() => setShowProfileDialog(false)} className="flex-1" style={{ height: 44, borderRadius: 12, backgroundColor: "var(--accent-green)", fontSize: 15, fontWeight: 600, color: "#fff" }}>保存</button>
            </div>
          </div>
        </div>
      )}
      <TabBar activeTab="me" />
    </PhoneFrame>
  );
}
