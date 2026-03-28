"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { MicOff } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function RecordingErrorPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="录音异常" />
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <EmptyState
          icon={<MicOff size={36} style={{ color: "var(--accent-coral)" }} />}
          title="录音启动失败"
          description="请检查麦克风权限是否已开启，或尝试重新进入页面"
          action={
            <div className="flex flex-col items-center gap-3 font-outfit">
              <button
                onClick={() => router.back()}
                className="flex items-center justify-center"
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
                重新尝试
              </button>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-tertiary)",
                  lineHeight: 1.6,
                  textAlign: "center",
                }}
              >
                提示：请在手机设置中允许小程序使用麦克风
              </p>
            </div>
          }
        />
      </div>
    </PhoneFrame>
  );
}
