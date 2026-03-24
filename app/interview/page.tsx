"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { MicInputBar } from "@/components/MicInputBar";
import { PenLine, ChevronLeft, Play } from "lucide-react";

interface Message {
  role: "ai" | "user";
  text: string;
}

const aiQuestions = [
  "李建国爷爷，74岁了，一定经历了很多。他是在哪里长大的？小时候家里有几口人？",
  "在农村长大的孩子，一定有很多美好的回忆。他小时候最喜欢做什么？",
  "真是快乐的童年！后来他是什么时候开始上学的？去学校的路远吗？",
  "谢谢您分享这些珍贵的回忆！我已经了解了很多，让我帮您整理一下大纲。",
];

const quickReplies = [
  "父亲叫李建国，1952年生的，今年已经74了",
  "他在河南农村长大，家里兄弟四个",
  "小时候最喜欢去清水河摸鱼",
  "走十几里山路去上学",
];

export default function InterviewPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "您好！我是小叙，很高兴陪您一起回忆父亲的故事。我们慢慢聊，不着急。先说说父亲叫什么名字？哪年出生的？",
    },
  ]);
  const [aiIndex, setAiIndex] = useState(0);
  const [quickReplyIndex, setQuickReplyIndex] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const userCount = messages.filter((m) => m.role === "user").length;
  const isComplete = userCount >= 4;

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    // AI responds after a short delay
    setTimeout(() => {
      if (aiIndex < aiQuestions.length) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: aiQuestions[aiIndex] },
        ]);
        setAiIndex((i) => i + 1);
      }
    }, 800);
    setQuickReplyIndex((i) => i + 1);
  };

  const currentQuickReply = quickReplyIndex < quickReplies.length ? quickReplies[quickReplyIndex] : null;

  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header with back button */}
      <div
        className="shrink-0 flex items-center gap-[12px] font-outfit"
        style={{ height: 52, padding: "0 16px" }}
      >
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "var(--bg-muted)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={20} style={{ color: "var(--text-primary)" }} />
        </button>
        <div className="flex items-center gap-2 flex-1">
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "var(--accent-green)",
            }}
          />
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>
              小叙 · 初始采访
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              了解父亲的基本信息
            </div>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div
        ref={chatRef}
        className="flex-1 overflow-auto font-outfit"
        style={{ padding: "8px 16px" }}
      >
        {messages.map((msg, i) =>
          msg.role === "ai" ? (
            <div key={i} className="flex items-start gap-2" style={{ marginBottom: 20 }}>
              <div
                className="shrink-0 flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  backgroundColor: "var(--accent-green)",
                }}
              >
                <PenLine size={18} style={{ color: "var(--white)" }} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    display: "block",
                    marginBottom: 4,
                  }}
                >
                  小叙
                </span>
                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "0 16px 16px 16px",
                    padding: 14,
                    maxWidth: 270,
                  }}
                >
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: "var(--text-primary)" }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end" style={{ marginBottom: 20 }}>
              <div className="flex flex-col items-end gap-[4px]">
                <div
                  style={{
                    backgroundColor: "var(--accent-warm)",
                    borderRadius: "16px 0 16px 16px",
                    padding: 14,
                    maxWidth: 240,
                  }}
                >
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: "var(--white)" }}>
                    {msg.text}
                  </p>
                </div>
                <span className="text-[11px] text-[var(--text-tertiary)] font-outfit flex items-center gap-[6px]">
                  <button className="w-[22px] h-[22px] rounded-full bg-[var(--accent-warm)] flex items-center justify-center shrink-0">
                    <Play size={11} className="text-white" fill="white" style={{ marginLeft: 1 }} />
                  </button>
                  语音转文字
                </span>
              </div>
            </div>
          )
        )}
      </div>

      {/* Complete button */}
      {isComplete && (
        <div className="shrink-0 font-outfit" style={{ padding: "8px 16px 0" }}>
          <button
            onClick={() => router.push("/outline")}
            style={{
              width: "100%",
              height: 48,
              borderRadius: 12,
              backgroundColor: "var(--accent-green)",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              color: "var(--white)",
            }}
          >
            采访完成，查看大纲 →
          </button>
        </div>
      )}

      <MicInputBar
        onSend={addUserMessage}
        recordingResult={currentQuickReply || undefined}
      />
    </PhoneFrame>
  );
}
