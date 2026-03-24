"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import { User, Heart } from "lucide-react";

export default function CreatePage() {
  const modes = [
    { key: "alive", label: "在世人物", desc: "记录在世亲人的故事", icon: User, selected: true },
    { key: "memorial", label: "纪念模式", desc: "纪念已故亲人的一生", icon: Heart, selected: false },
  ];
  const relations = ["父亲", "母亲", "爷爷", "其他"];
  const selectedRelation = "父亲";

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="创建新传记" titleClassName="font-serif-sc" />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "4px 20px 32px" }}>
          {/* 选择模式 */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>选择模式</span>
            <div className="flex gap-3" style={{ marginTop: 10 }}>
              {modes.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.key}
                    className="flex-1 flex flex-col items-center gap-2"
                    style={{
                      padding: "18px 12px",
                      borderRadius: 16,
                      border: m.selected ? "2px solid var(--accent-green)" : "1.5px solid var(--border-subtle)",
                      backgroundColor: m.selected ? "var(--accent-green-light)" : "var(--bg-card)",
                      cursor: "pointer",
                    }}
                  >
                    <div className="flex items-center justify-center" style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: m.selected ? "var(--accent-green)" : "var(--bg-muted)" }}>
                      <Icon size={20} style={{ color: m.selected ? "var(--white)" : "var(--text-secondary)" }} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{m.label}</span>
                    <span style={{ fontSize: 11, color: "var(--text-secondary)", textAlign: "center" }}>{m.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 传记主人公 */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>传记主人公</span>
            <div style={{ marginTop: 10, height: 48, borderRadius: 12, border: "1.5px solid var(--border-subtle)", backgroundColor: "var(--bg-card)", padding: "0 16px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 15, color: "var(--text-tertiary)" }}>请输入主人公姓名</span>
            </div>
          </div>

          {/* 与您的关系 */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>与您的关系</span>
            <div className="flex gap-2" style={{ marginTop: 10, flexWrap: "wrap" }}>
              {relations.map((r) => (
                <div
                  key={r}
                  style={{
                    height: 38,
                    paddingLeft: 18,
                    paddingRight: 18,
                    borderRadius: 19,
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    fontWeight: r === selectedRelation ? 600 : 400,
                    backgroundColor: r === selectedRelation ? "var(--accent-green)" : "var(--bg-card)",
                    color: r === selectedRelation ? "var(--white)" : "var(--text-primary)",
                    border: r === selectedRelation ? "none" : "1.5px solid var(--border-subtle)",
                    cursor: "pointer",
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* 主讲人 */}
          <div style={{ marginBottom: 32 }}>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>主讲人</span>
            <div style={{ marginTop: 10, height: 48, borderRadius: 12, border: "1.5px solid var(--border-subtle)", backgroundColor: "var(--bg-card)", padding: "0 16px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 15, color: "var(--text-tertiary)" }}>请输入主讲人姓名</span>
            </div>
          </div>

          {/* Bottom button */}
          <Link
            href="/interview"
            className="flex items-center justify-center"
            style={{ height: 52, borderRadius: 14, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 16, fontWeight: 600, width: "100%" }}
          >
            开始采访
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
