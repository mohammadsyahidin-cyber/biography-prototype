"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { MicInputBar } from "@/components/MicInputBar";
import { PenLine, ChevronLeft } from "lucide-react";

interface Message {
  role: "ai" | "user";
  text: string;
}

const aiResponses = [
  "好的，我来帮您调整。您希望把「求学与启蒙」这一章放在哪个位置呢？还是要修改章节名称？",
  "明白了！我已经帮您调整好了。还有其他需要修改的地方吗？",
  "好的，大纲已经更新完成。您可以返回查看新的大纲结构。",
];

const quickReplies = [
  "我想把第二章和第三章换个顺序",
  "把工作与事业再拆细一点",
  "没有了，这样就好",
];

export default function OutlineChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "您想怎么调整大纲呢？慢慢说，我来帮您安排。比如增减章节、调换顺序，都可以。",
    },
  ]);
  const [aiIndex, setAiIndex] = useState(0);
  const [replyIndex, setReplyIndex] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const userCount = messages.filter((m) => m.role === "user").length;
  const isDone = userCount >= 3;

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setTimeout(() => {
      if (aiIndex < aiResponses.length) {
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: aiResponses[aiIndex] },
        ]);
        setAiIndex((i) => i + 1);
      }
    }, 800);
    setReplyIndex((i) => i + 1);
  };

  const currentReply =
    replyIndex < quickReplies.length ? quickReplies[replyIndex] : null;

  return (
    <PhoneFrame>
      <StatusBar />
      {/* Header */}
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
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              小叙 · 修改大纲
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              告诉我您想如何调整
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
            <div
              key={i}
              className="flex items-start gap-2"
              style={{ marginBottom: 20 }}
            >
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
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: "var(--text-primary)",
                    }}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="flex justify-end"
              style={{ marginBottom: 20 }}
            >
              <div
                style={{
                  backgroundColor: "var(--accent-warm)",
                  borderRadius: "16px 0 16px 16px",
                  padding: 14,
                  maxWidth: 240,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "var(--white)",
                  }}
                >
                  {msg.text}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Done button */}
      {isDone && (
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
            返回查看大纲 →
          </button>
        </div>
      )}

      <MicInputBar
        onSend={addUserMessage}
        recordingResult={currentReply || undefined}
      />
    </PhoneFrame>
  );
}
