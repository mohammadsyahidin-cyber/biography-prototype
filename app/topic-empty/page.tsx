"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { EmptyState } from "@/components/EmptyState";
import Link from "next/link";
import { MessageCircle, Mic } from "lucide-react";

export default function TopicEmptyPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader
        title="新话题"
        subtitle="第一章 · 童年生活与成长环境"
      />

      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <EmptyState
          icon={<MessageCircle size={36} style={{ color: "var(--text-tertiary)" }} />}
          title="还没有对话记录"
          description="开始采访或邀请家人来补充这个话题的故事"
          action={
            <Link
              href="/interview"
              className="flex items-center justify-center gap-2 font-outfit"
              style={{
                height: 44,
                paddingLeft: 24,
                paddingRight: 24,
                borderRadius: 22,
                backgroundColor: "var(--accent-green)",
                color: "var(--white)",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <Mic size={16} />
              开始采访
            </Link>
          }
        />
      </div>
    </PhoneFrame>
  );
}
