"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import { Mic, Heart, ImagePlus } from "lucide-react";

export default function CreatePage() {
  const relations = ["父亲", "母亲", "爷爷", "其他"];
  const selectedRelation = "父亲";

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="创建新传记" />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div style={{ padding: "16px 24px 24px" }} className="flex flex-col gap-6">
          {/* 选择模式 */}
          <div>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>选择模式</span>
            <div className="flex gap-3" style={{ marginTop: 10 }}>
              {/* 在世人物 - selected */}
              <div
                className="flex-1 flex flex-col items-center justify-center gap-2"
                style={{
                  height: 100,
                  borderRadius: 16,
                  border: "2px solid var(--accent-green)",
                  backgroundColor: "#fff",
                }}
              >
                <Mic size={24} style={{ color: "var(--accent-green)" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--accent-green)" }}>在世人物</span>
                <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>本人可参与讲述</span>
              </div>
              {/* 纪念模式 */}
              <div
                className="flex-1 flex flex-col items-center justify-center gap-2"
                style={{
                  height: 100,
                  borderRadius: 16,
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "#fff",
                }}
              >
                <Heart size={24} style={{ color: "var(--text-secondary)" }} />
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>纪念模式</span>
                <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>为已故亲人而写</span>
              </div>
            </div>
          </div>

          {/* 传记主人公 */}
          <div>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>传记主人公</span>
            <div style={{ marginTop: 10, height: 48, borderRadius: 12, border: "1px solid var(--border-subtle)", backgroundColor: "#fff", padding: "0 16px", display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: 15, color: "var(--text-tertiary)" }}>请输入姓名，如&ldquo;父亲&rdquo;&ldquo;外婆&rdquo;</span>
            </div>
          </div>

          {/* 与您的关系 */}
          <div>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>与您的关系</span>
            <div className="flex gap-2" style={{ marginTop: 10, flexWrap: "wrap" }}>
              {relations.map((r) => (
                <div
                  key={r}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 100,
                    fontSize: 14,
                    fontWeight: 500,
                    backgroundColor: r === selectedRelation ? "var(--accent-green)" : "#fff",
                    color: r === selectedRelation ? "#fff" : "var(--text-primary)",
                    border: r === selectedRelation ? "none" : "1px solid var(--border-subtle)",
                  }}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* 上传一张照片 */}
          <div>
            <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>上传一张照片</span>
            <div
              className="flex flex-col items-center justify-center gap-2.5"
              style={{
                marginTop: 10,
                height: 140,
                borderRadius: 14,
                border: "1.5px dashed var(--border-strong)",
                backgroundColor: "#FFFDF8",
              }}
            >
              <ImagePlus size={36} style={{ color: "var(--text-tertiary)" }} />
              <span style={{ fontSize: 14, color: "var(--text-tertiary)" }}>点击上传主人公照片</span>
              <span style={{ fontSize: 12, color: "var(--border-strong)" }}>这张照片将作为传记封面</span>
            </div>
          </div>

          {/* 开始采访 */}
          <Link
            href="/interview"
            className="flex items-center justify-center gap-2"
            style={{ height: 52, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "#fff", fontSize: 16, fontWeight: 600, width: "100%" }}
          >
            <Mic size={18} />
            开始采访
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
