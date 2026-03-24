"use client";

import { PenLine } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

interface ChatMessage {
  role: "ai" | "dad";
  text: string;
}

const messages: ChatMessage[] = [
  {
    role: "ai",
    text: "爸爸您好！今天想和您聊聊小时候的事情。您小时候最喜欢玩什么呀？",
  },
  {
    role: "dad",
    text: "我小时候最喜欢去清水河摸鱼，那时候河水清得很，一眼就能看到鱼在水底游。",
  },
  {
    role: "ai",
    text: "清水河摸鱼听起来太有意思了！那时候是您一个人去，还是和兄弟们一起？",
  },
  {
    role: "dad",
    text: "都是和兄弟们一起去，我们四兄弟，每次去都比谁摸的鱼多。",
  },
  {
    role: "ai",
    text: "四兄弟比赛摸鱼，画面感好强！那你们摸到过特别大的鱼吗？",
  },
];

function AiAvatar() {
  return (
    <div className="w-[36px] h-[36px] rounded-full bg-[var(--accent-green)] flex items-center justify-center shrink-0">
      <PenLine size={18} className="text-white" />
    </div>
  );
}

function DadAvatar() {
  return (
    <div className="w-[36px] h-[36px] rounded-full bg-[var(--accent-coral)] flex items-center justify-center shrink-0">
      <span className="text-white text-[14px] font-semibold font-outfit">
        爸
      </span>
    </div>
  );
}

function AiMessage({ text }: { text: string }) {
  return (
    <div className="flex gap-[10px] items-start">
      <AiAvatar />
      <div className="flex flex-col gap-[4px]">
        <span className="text-[13px] font-semibold text-[var(--text-primary)] font-outfit">
          小叙
        </span>
        <div
          className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[0px_16px_16px_16px] p-[14px] max-w-[270px]"
        >
          <p className="text-[16px] leading-relaxed text-[var(--text-primary)] font-outfit">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function DadMessage({ text }: { text: string }) {
  return (
    <div className="flex gap-[10px] items-start">
      <DadAvatar />
      <div className="flex flex-col gap-[4px]">
        <span className="text-[13px] font-semibold text-[var(--text-primary)] font-outfit">
          爸爸
        </span>
        <div
          className="bg-[var(--accent-green)] rounded-[0px_16px_16px_16px] p-[14px] max-w-[240px]"
        >
          <p className="text-[16px] leading-relaxed text-white font-outfit">
            {text}
          </p>
        </div>
        <span className="text-[11px] text-[var(--text-tertiary)] font-outfit">
          语音转文字
        </span>
      </div>
    </div>
  );
}

export default function ChatHistoryPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="爸爸的对话记录" />

      {/* Context bar */}
      <div className="bg-[var(--bg-surface)] px-[16px] py-[8px]">
        <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
          第一章 · 清水河摸鱼 · 主讲人对话
        </span>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-auto px-[16px] py-[16px] flex flex-col gap-[20px]">
        {messages.map((msg, i) =>
          msg.role === "ai" ? (
            <AiMessage key={i} text={msg.text} />
          ) : (
            <DadMessage key={i} text={msg.text} />
          )
        )}
      </div>

      {/* Bottom readonly bar */}
      <div className="bg-[var(--bg-surface)] py-[12px] flex items-center justify-center">
        <span className="text-[13px] text-[var(--text-tertiary)] font-outfit">
          你正在查看爸爸的对话记录（只读）
        </span>
      </div>
    </PhoneFrame>
  );
}
