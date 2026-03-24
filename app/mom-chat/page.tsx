"use client";

import { PenLine, Play } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

interface ChatMessage {
  role: "ai" | "mom";
  text: string;
}

const messages: ChatMessage[] = [
  {
    role: "ai",
    text: "你好！爸爸之前提到小时候去清水河摸鱼的事，你有什么相关的记忆或补充吗？",
  },
  {
    role: "mom",
    text: "有有有！那时候他们兄弟几个天天往河边跑，回来一身泥，我婆婆每次都要骂。",
  },
  {
    role: "ai",
    text: "哈哈，回来一身泥还要挨骂！那您还记得他们一般什么时候去吗？",
  },
  {
    role: "mom",
    text: "夏天最多，放学了书包一扔就跑。有一回建国摸到一条大鲤鱼，高兴得不得了，拎回家让他妈做了一大锅鱼汤。",
  },
  {
    role: "ai",
    text: "摸到大鲤鱼还做了鱼汤，这个细节太好了！那条鱼大概有多大呀？",
  },
  {
    role: "mom",
    text: "他说有两斤多呢，不过我觉得他吹牛，顶多一斤半。那会儿河里鱼多，随便摸都有，不像现在。",
  },
];

function AiAvatar() {
  return (
    <div className="w-[36px] h-[36px] rounded-full bg-[var(--accent-green)] flex items-center justify-center shrink-0">
      <PenLine size={18} className="text-white" />
    </div>
  );
}

function MomAvatar() {
  return (
    <div className="w-[36px] h-[36px] rounded-full bg-[var(--accent-coral)] flex items-center justify-center shrink-0">
      <span className="text-white text-[14px] font-semibold font-outfit">
        妈
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
        <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-[0px_16px_16px_16px] p-[14px] max-w-[270px]">
          <p className="text-[16px] leading-relaxed text-[var(--text-primary)] font-outfit">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

function MomMessage({ text }: { text: string }) {
  return (
    <div className="flex gap-[10px] items-start">
      <MomAvatar />
      <div className="flex flex-col gap-[4px]">
        <span className="text-[13px] font-semibold text-[var(--text-primary)] font-outfit">
          妈妈
        </span>
        <div className="bg-[var(--accent-coral)] rounded-[0px_16px_16px_16px] p-[14px] max-w-[240px]">
          <p className="text-[16px] leading-relaxed text-white font-outfit">
            {text}
          </p>
        </div>
        <span className="text-[11px] text-[var(--text-tertiary)] font-outfit flex items-center gap-[6px]">
          <button className="w-[22px] h-[22px] rounded-full bg-[var(--accent-coral)] flex items-center justify-center shrink-0">
            <Play size={11} className="text-white" fill="white" style={{ marginLeft: 1 }} />
          </button>
          语音转文字
        </span>
      </div>
    </div>
  );
}

export default function MomChatPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="妈妈的对话记录" />

      {/* Context bar */}
      <div className="bg-[var(--bg-surface)] px-[16px] py-[8px]">
        <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
          第一章 · 清水河摸鱼 · 家人补充
        </span>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-auto px-[16px] py-[16px] flex flex-col gap-[20px]">
        {messages.map((msg, i) =>
          msg.role === "ai" ? (
            <AiMessage key={i} text={msg.text} />
          ) : (
            <MomMessage key={i} text={msg.text} />
          )
        )}
      </div>

      {/* Bottom readonly bar */}
      <div className="bg-[var(--bg-surface)] py-[12px] flex items-center justify-center">
        <span className="text-[13px] text-[var(--text-tertiary)] font-outfit">
          你正在查看妈妈的对话记录（只读）
        </span>
      </div>
    </PhoneFrame>
  );
}
