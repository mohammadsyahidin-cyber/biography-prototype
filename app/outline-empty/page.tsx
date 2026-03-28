"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { EmptyState } from "@/components/EmptyState";
import Link from "next/link";
import { FileText, Mic } from "lucide-react";

export default function OutlineEmptyPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="传记大纲" />

      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <EmptyState
          icon={<FileText size={36} style={{ color: "var(--text-tertiary)" }} />}
          title="还没有大纲"
          description={"和小叙聊聊家人的故事\n我来帮你规划传记结构"}
          action={
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 font-outfit"
              style={{
                height: 48,
                paddingLeft: 28,
                paddingRight: 28,
                borderRadius: 22,
                backgroundColor: "var(--accent-green)",
                color: "var(--white)",
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              <Mic size={18} />
              开始对话
            </Link>
          }
        />
      </div>
    </PhoneFrame>
  );
}
