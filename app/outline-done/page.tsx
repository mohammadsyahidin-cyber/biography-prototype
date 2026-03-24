"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { CheckCircle, Users, Mic, ChevronRight, ChevronLeft } from "lucide-react";

export default function OutlineDonePage() {
  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header with back-to-home */}
      <div
        className="shrink-0 flex items-center font-outfit"
        style={{ height: 52, padding: "0 16px" }}
      >
        <Link
          href="/home"
          className="flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "var(--bg-muted)",
          }}
        >
          <ChevronLeft size={20} style={{ color: "var(--text-primary)" }} />
        </Link>
      </div>
      <div
        className="flex-1 flex flex-col font-outfit"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        {/* Success section */}
        <div
          className="flex flex-col items-center"
          style={{ padding: "20px 24px 28px" }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              backgroundColor: "var(--accent-green-light)",
              marginBottom: 20,
            }}
          >
            <CheckCircle
              size={36}
              style={{ color: "var(--accent-green)" }}
            />
          </div>
          <h1
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            大纲已确认，真棒！
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            共 5 个章节、15 个小节
            <br />
            家人的故事正在成形，接下来可以邀请家人一起聊，或继续采访
          </p>
        </div>

        {/* Outline summary */}
        <div style={{ padding: "0 24px 24px" }}>
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 16,
              padding: "16px 18px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "var(--text-secondary)",
                display: "block",
                marginBottom: 12,
              }}
            >
              大纲概览
            </span>
            {[
              "第一章 · 童年生活与成长环境",
              "第二章 · 求学与启蒙",
              "第三章 · 工作与事业",
              "第四章 · 婚姻与家庭",
              "第五章 · 人生感悟与寄语",
            ].map((ch, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{
                  padding: "8px 0",
                  borderBottom:
                    i < 4
                      ? "1px solid var(--border-subtle)"
                      : "none",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "var(--accent-green)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--text-primary)",
                  }}
                >
                  {ch}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action cards */}
        <div
          className="flex flex-col gap-3"
          style={{ padding: "0 24px 24px" }}
        >
          <Link
            href="/invite"
            className="flex items-center gap-4"
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 16,
              padding: "18px 16px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "var(--accent-coral-light)",
              }}
            >
              <Users
                size={22}
                style={{ color: "var(--accent-coral)" }}
              />
            </div>
            <div className="flex-1">
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  display: "block",
                }}
              >
                邀请家人一起聊
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  marginTop: 2,
                  display: "block",
                }}
              >
                多人补充，让故事更完整
              </span>
            </div>
            <ChevronRight
              size={18}
              style={{ color: "var(--text-tertiary)" }}
            />
          </Link>

          <Link
            href="/interview"
            className="flex items-center gap-4"
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: 16,
              padding: "18px 16px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: "var(--accent-green-light)",
              }}
            >
              <Mic
                size={22}
                style={{ color: "var(--accent-green)" }}
              />
            </div>
            <div className="flex-1">
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  display: "block",
                }}
              >
                继续采访
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: "var(--text-secondary)",
                  marginTop: 2,
                  display: "block",
                }}
              >
                围绕大纲深入了解更多细节
              </span>
            </div>
            <ChevronRight
              size={18}
              style={{ color: "var(--text-tertiary)" }}
            />
          </Link>
        </div>
      </div>

      {/* Bottom link */}
      <div
        className="shrink-0 flex justify-center font-outfit"
        style={{ padding: "8px 24px 28px" }}
      >
        <Link
          href="/home"
          style={{
            fontSize: 14,
            color: "var(--text-tertiary)",
          }}
        >
          稍后再说，回到首页
        </Link>
      </div>
    </PhoneFrame>
  );
}
