"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { WifiOff, RefreshCw } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function NetworkErrorPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="网络异常" />
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <EmptyState
          icon={<WifiOff size={36} style={{ color: "var(--text-tertiary)" }} />}
          title="网络连接失败"
          description="请检查网络设置后重试"
          action={
            <button
              onClick={() => router.back()}
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
                border: "none",
                cursor: "pointer",
              }}
            >
              <RefreshCw size={16} />
              重新加载
            </button>
          }
        />
      </div>
    </PhoneFrame>
  );
}
