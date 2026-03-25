"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Heart, BookOpen, MessageCircle, Crown, Mic, UserPlus, X, Copy, Check } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { TabBar } from "@/components/TabBar";

export default function MembersPage() {
  const [showInvite, setShowInvite] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Header */}
      <div
        className="shrink-0 flex items-center justify-between font-outfit"
        style={{ padding: "10px 20px 8px", backgroundColor: "var(--bg-page)" }}
      >
        <span style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>
          家族图谱
        </span>
        <button
          onClick={() => setShowInvite(true)}
          className="flex items-center gap-1.5"
          style={{
            height: 34,
            padding: "0 14px",
            borderRadius: 17,
            backgroundColor: "var(--accent-green)",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <UserPlus size={14} />
          邀请
        </button>
      </div>

      <div
        className="flex-1 overflow-auto font-outfit"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <div style={{ padding: "8px 20px 24px" }}>

          {/* Family tree card */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 20,
              border: "1px solid var(--border-subtle)",
              padding: "24px 16px 20px",
              marginBottom: 16,
            }}
          >
            {/* Title: 李家 */}
            <div className="flex items-center justify-center gap-2" style={{ marginBottom: 20 }}>
              <div
                style={{
                  width: 24,
                  height: 2,
                  backgroundColor: "var(--border-subtle)",
                  borderRadius: 1,
                }}
              />
              <span style={{ fontSize: 13, color: "var(--text-tertiary)", letterSpacing: 2 }}>
                李家
              </span>
              <div
                style={{
                  width: 24,
                  height: 2,
                  backgroundColor: "var(--border-subtle)",
                  borderRadius: 1,
                }}
              />
            </div>

            {/* === Parents row === */}
            <div className="flex items-start justify-center gap-3">
              {/* Father - 传记主角 */}
              <div className="flex flex-col items-center" style={{ width: 120 }}>
                <div style={{ position: "relative" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 32,
                      backgroundColor: "var(--accent-green)",
                      border: "3px solid var(--accent-green)",
                      boxShadow: "0 0 0 3px var(--accent-green-light)",
                    }}
                  >
                    <span style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>父</span>
                  </div>
                  {/* Crown badge */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      position: "absolute",
                      top: -6,
                      right: -6,
                      width: 24,
                      height: 24,
                      borderRadius: 12,
                      backgroundColor: "var(--accent-warm)",
                      border: "2px solid var(--bg-card)",
                    }}
                  >
                    <Crown size={12} style={{ color: "#fff" }} />
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginTop: 8,
                  }}
                >
                  李建国
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--accent-green)",
                    fontWeight: 600,
                    marginTop: 2,
                  }}
                >
                  传记主角
                </span>
                <div
                  className="flex items-center gap-1"
                  style={{ marginTop: 4 }}
                >
                  <Mic size={10} style={{ color: "var(--text-tertiary)" }} />
                  <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>8 次对话</span>
                </div>
              </div>

              {/* Heart connector between parents */}
              <div
                className="flex flex-col items-center justify-center"
                style={{ paddingTop: 22 }}
              >
                <div
                  style={{
                    width: 28,
                    height: 1,
                    backgroundColor: "var(--accent-coral)",
                    opacity: 0.4,
                  }}
                />
                <Heart
                  size={14}
                  fill="var(--accent-coral)"
                  style={{ color: "var(--accent-coral)", margin: "4px 0", opacity: 0.5 }}
                />
                <div
                  style={{
                    width: 28,
                    height: 1,
                    backgroundColor: "var(--accent-coral)",
                    opacity: 0.4,
                  }}
                />
              </div>

              {/* Mother */}
              <div className="flex flex-col items-center" style={{ width: 120 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    backgroundColor: "var(--accent-coral)",
                    border: "3px solid var(--accent-coral)",
                    boxShadow: "0 0 0 3px var(--accent-coral-light)",
                  }}
                >
                  <span style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>母</span>
                </div>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginTop: 8,
                  }}
                >
                  李秀芳
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "var(--accent-coral)",
                    fontWeight: 600,
                    marginTop: 2,
                  }}
                >
                  补充讲述
                </span>
                <div
                  className="flex items-center gap-1"
                  style={{ marginTop: 4 }}
                >
                  <Mic size={10} style={{ color: "var(--text-tertiary)" }} />
                  <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>3 次对话</span>
                </div>
              </div>
            </div>

            {/* Vertical connector line from parents to children */}
            <div className="flex justify-center" style={{ margin: "4px 0" }}>
              <div
                style={{
                  width: 1,
                  height: 24,
                  backgroundColor: "var(--border-strong)",
                }}
              />
            </div>

            {/* Horizontal branch line */}
            <div className="flex justify-center">
              <div
                style={{
                  width: 180,
                  height: 1,
                  backgroundColor: "var(--border-strong)",
                }}
              />
            </div>

            {/* Vertical stubs down to children */}
            <div className="flex justify-center">
              <div className="flex" style={{ width: 180, justifyContent: "space-between" }}>
                <div style={{ width: 1, height: 16, backgroundColor: "var(--border-strong)", marginLeft: 0 }} />
                <div style={{ width: 1, height: 16, backgroundColor: "var(--border-strong)" }} />
                <div style={{ width: 1, height: 16, backgroundColor: "var(--border-strong)", marginRight: 0 }} />
              </div>
            </div>

            {/* === Children row === */}
            <div className="flex items-start justify-center gap-2">
              {/* Son - 小明 (发起人) */}
              <div className="flex flex-col items-center" style={{ width: 90 }}>
                <div style={{ position: "relative" }}>
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 24,
                      backgroundColor: "var(--accent-green)",
                    }}
                  >
                    <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>明</span>
                  </div>
                  {/* Star badge for initiator */}
                  <div
                    className="flex items-center justify-center"
                    style={{
                      position: "absolute",
                      bottom: -2,
                      right: -4,
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      backgroundColor: "var(--accent-green)",
                      border: "2px solid var(--bg-card)",
                    }}
                  >
                    <BookOpen size={10} style={{ color: "#fff" }} />
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginTop: 6,
                  }}
                >
                  小明
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "var(--accent-green)",
                    fontWeight: 600,
                    marginTop: 1,
                  }}
                >
                  发起人
                </span>
                <span style={{ fontSize: 10, color: "var(--text-tertiary)", marginTop: 2 }}>
                  12 次对话
                </span>
              </div>

              {/* Daughter - 大姐 */}
              <div className="flex flex-col items-center" style={{ width: 90 }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "var(--accent-warm)",
                  }}
                >
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>姐</span>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginTop: 6,
                  }}
                >
                  大姐
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "var(--text-tertiary)",
                    fontWeight: 500,
                    marginTop: 1,
                  }}
                >
                  补充讲述
                </span>
                <span style={{ fontSize: 10, color: "var(--text-tertiary)", marginTop: 2 }}>
                  2 次对话
                </span>
              </div>

              {/* Add member slot */}
              <div className="flex flex-col items-center" style={{ width: 90 }}>
                <button
                  onClick={() => setShowInvite(true)}
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    border: "2px dashed var(--border-strong)",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <Plus size={20} style={{ color: "var(--text-tertiary)" }} />
                </button>
                <span
                  style={{
                    fontSize: 12,
                    color: "var(--text-tertiary)",
                    marginTop: 6,
                  }}
                >
                  添加家人
                </span>
              </div>
            </div>
          </div>

          {/* Participation stats */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 16,
              border: "1px solid var(--border-subtle)",
              padding: "16px",
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", display: "block", marginBottom: 12 }}>
              参与概况
            </span>
            <div className="flex items-center justify-around">
              {[
                { num: "4", label: "家庭成员", color: "var(--accent-green)" },
                { num: "23", label: "总对话数", color: "var(--accent-warm)" },
                { num: "5", label: "参与话题", color: "var(--accent-coral)" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span style={{ fontSize: 22, fontWeight: 700, color: s.color }}>
                    {s.num}
                  </span>
                  <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Member detail list */}
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 16,
              border: "1px solid var(--border-subtle)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "14px 16px 10px" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}>
                成员贡献
              </span>
            </div>
            {[
              {
                name: "小明",
                role: "发起人",
                avatar: "明",
                bg: "var(--accent-green)",
                topics: 5,
                chats: 12,
                roleBg: "var(--accent-green-light)",
                roleColor: "var(--accent-green)",
              },
              {
                name: "李建国",
                role: "主讲人",
                avatar: "父",
                bg: "var(--accent-green)",
                topics: 4,
                chats: 8,
                roleBg: "var(--accent-coral-light)",
                roleColor: "var(--accent-coral)",
              },
              {
                name: "李秀芳",
                role: "补充讲述",
                avatar: "母",
                bg: "var(--accent-coral)",
                topics: 2,
                chats: 3,
                roleBg: "var(--bg-muted)",
                roleColor: "var(--text-tertiary)",
              },
              {
                name: "大姐",
                role: "补充讲述",
                avatar: "姐",
                bg: "var(--accent-warm)",
                topics: 1,
                chats: 2,
                roleBg: "var(--bg-muted)",
                roleColor: "var(--text-tertiary)",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{
                  padding: "12px 16px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: m.bg,
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{m.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>
                      {m.name}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        padding: "1px 6px",
                        borderRadius: 4,
                        backgroundColor: m.roleBg,
                        color: m.roleColor,
                      }}
                    >
                      {m.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-3" style={{ marginTop: 3 }}>
                    <span className="flex items-center gap-1" style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                      <MessageCircle size={10} />
                      {m.chats} 次对话
                    </span>
                    <span className="flex items-center gap-1" style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                      <BookOpen size={10} />
                      {m.topics} 个话题
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <TabBar activeTab="family" />

      {/* Invite modal */}
      {showInvite && (
        <div style={{ position: "absolute", inset: 0, zIndex: 50 }}>
          <div
            onClick={() => setShowInvite(false)}
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          <div
            className="font-outfit"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "var(--bg-card)",
              borderRadius: "20px 20px 0 0",
              maxHeight: "60%",
              overflow: "auto",
            }}
          >
            <div className="flex justify-center" style={{ padding: "10px 0 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-subtle)" }} />
            </div>
            <div className="flex items-center justify-between" style={{ padding: "12px 20px 0" }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>邀请家人加入</span>
              <button
                onClick={() => setShowInvite(false)}
                className="flex items-center justify-center"
                style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)", border: "none", cursor: "pointer" }}
              >
                <X size={16} style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>

            <div style={{ padding: "16px 20px 28px" }}>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 16 }}>
                邀请家人一起参与，共同完善传记内容
              </p>

              {/* Share link */}
              <div
                className="flex items-center gap-2"
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-subtle)",
                  marginBottom: 16,
                }}
              >
                <span className="flex-1" style={{ fontSize: 13, color: "var(--text-tertiary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  biography.app/invite/abc123
                </span>
                <button
                  onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                  className="flex items-center gap-1 shrink-0"
                  style={{
                    height: 28, padding: "0 10px", borderRadius: 8,
                    backgroundColor: copied ? "var(--accent-green-light)" : "var(--bg-muted)",
                    border: "none", cursor: "pointer",
                    fontSize: 12, fontWeight: 500,
                    color: copied ? "var(--accent-green)" : "var(--text-secondary)",
                  }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "已复制" : "复制"}
                </button>
              </div>

              <button
                className="flex items-center justify-center gap-2"
                style={{
                  width: "100%",
                  height: 48, borderRadius: 12,
                  backgroundColor: "#2DC100", border: "none", cursor: "pointer",
                  color: "#fff", fontSize: 15, fontWeight: 600,
                }}
              >
                <MessageCircle size={18} />
                发送到微信
              </button>
            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
