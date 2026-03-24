"use client";

import { PenLine, Play } from "lucide-react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { MicInputBar } from "@/components/MicInputBar";

function AiAvatar() {
  return (
    <div className="w-[36px] h-[36px] rounded-full bg-[var(--accent-green)] flex items-center justify-center shrink-0">
      <PenLine size={18} className="text-white" />
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

function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="flex flex-col items-end gap-[4px]">
        <div className="bg-[var(--accent-warm)] rounded-[16px_0px_16px_16px] p-[14px] max-w-[260px]">
          <p className="text-[16px] leading-relaxed text-white font-outfit">
            {text}
          </p>
        </div>
        <span className="text-[11px] text-[var(--text-tertiary)] font-outfit flex items-center gap-[6px]">
          <button className="w-[22px] h-[22px] rounded-full bg-[var(--accent-warm)] flex items-center justify-center shrink-0">
            <Play size={11} className="text-white" fill="white" style={{ marginLeft: 1 }} />
          </button>
          语音转文字 · 刚刚
        </span>
      </div>
    </div>
  );
}

export default function SupplementPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader
        title="补充 · 清水河摸鱼"
        subtitle="第一章 · 童年生活与成长环境"
      />

      {/* Green context banner */}
      <div className="mx-[16px] rounded-[12px] p-[12px] bg-[var(--accent-green-light)]">
        <span className="text-[12px] text-[var(--accent-green)] font-outfit">
          已有2人聊过此话题，小叙会结合已有内容向你提问
        </span>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-auto px-[16px] py-[16px] flex flex-col gap-[20px]">
        <AiMessage text="你好！爸爸之前提到小时候去清水河摸鱼的事，你有什么相关的记忆或补充吗？" />
        <UserMessage text="我小时候听爸爸讲过好多次！他说有一次摸到一条特别大的鲤鱼，差点没抓住。" />
        <AiMessage text="大鲤鱼的故事太精彩了！还记得那大概是什么季节吗？" />
      </div>

      <MicInputBar label="点击录音，补充你的记忆" color="green" />
    </PhoneFrame>
  );
}
