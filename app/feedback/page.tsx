"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { ImagePlus } from "lucide-react";

const tabs = ["功能建议", "问题反馈", "其他"];

export default function FeedbackPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [text, setText] = useState("");

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="意见反馈" />

      <div className="flex-1 overflow-auto font-outfit" style={{ padding: "20px 24px" }}>
        {/* Type tabs */}
        <div className="flex gap-2" style={{ marginBottom: 20 }}>
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 600,
                backgroundColor: activeTab === i ? "var(--accent-green)" : "var(--bg-card)",
                color: activeTab === i ? "#fff" : "var(--text-secondary)",
                border: activeTab === i ? "none" : "1px solid var(--border-subtle)",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请详细描述您的建议或问题…"
          className="font-outfit"
          style={{
            width: "100%",
            height: 160,
            backgroundColor: "var(--bg-card)",
            borderRadius: 14,
            border: "1px solid var(--border-subtle)",
            padding: "14px 16px",
            fontSize: 14,
            lineHeight: 1.6,
            color: "var(--text-primary)",
            outline: "none",
            resize: "none",
          }}
        />
        <span style={{ fontSize: 12, color: "var(--text-tertiary)", display: "block", textAlign: "right", marginTop: 4 }}>{text.length}/500</span>

        {/* Image upload */}
        <div style={{ marginTop: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", display: "block", marginBottom: 8 }}>添加截图（可选）</span>
          <button className="flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: 12, border: "1.5px dashed var(--border-strong)", backgroundColor: "var(--bg-muted)" }}>
            <ImagePlus size={24} style={{ color: "var(--text-tertiary)" }} />
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="shrink-0 font-outfit" style={{ padding: "12px 24px 28px" }}>
        <button onClick={() => router.back()} className="w-full" style={{ height: 48, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "#fff", fontSize: 15, fontWeight: 600 }}>
          提交反馈
        </button>
      </div>
    </PhoneFrame>
  );
}
