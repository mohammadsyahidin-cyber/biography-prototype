"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { Loader2, ArrowLeft } from "lucide-react";

const steps = [
  "正在梳理对话内容…",
  "正在提取关键事件…",
  "正在规划章节结构…",
  "正在生成大纲…",
];

export default function OutlineGeneratingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((s) => (s < steps.length - 1 ? s + 1 : s));
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          return 100;
        }
        return p + 1;
      });
    }, 80);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => router.push("/outline"), 500);
      return () => clearTimeout(timer);
    }
  }, [progress, router]);

  return (
    <PhoneFrame>
      <StatusBar />
      <div
        className="flex-1 flex flex-col items-center justify-center font-outfit"
        style={{ backgroundColor: "var(--bg-page)", padding: "0 40px" }}
      >
        {/* Spinning icon */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: "var(--accent-green-light)",
            marginBottom: 32,
          }}
        >
          <Loader2
            size={32}
            style={{
              color: "var(--accent-green)",
              animation: "spin 1.5s linear infinite",
            }}
          />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 8,
          }}
        >
          正在生成大纲
        </h2>

        {/* Current step */}
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          {steps[step]}
        </p>

        {/* Progress bar */}
        <div style={{ width: "100%", maxWidth: 240 }}>
          <div
            style={{
              height: 6,
              borderRadius: 3,
              backgroundColor: "var(--accent-green-light)",
              overflow: "hidden",
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                borderRadius: 3,
                backgroundColor: "var(--accent-green)",
                transition: "width 0.08s linear",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 12,
              color: "var(--text-tertiary)",
              textAlign: "center",
            }}
          >
            {progress}%
          </p>
        </div>

        {/* Hint */}
        <p
          style={{
            fontSize: 12,
            color: "var(--text-tertiary)",
            marginTop: 48,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          小叙正在为您规划传记结构
          <br />
          生成完成后会通知你
        </p>

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2"
          style={{
            marginTop: 24,
            height: 44,
            paddingLeft: 24,
            paddingRight: 24,
            borderRadius: 22,
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-strong)",
            fontSize: 14,
            fontWeight: 600,
            color: "var(--accent-green)",
            cursor: "pointer",
          }}
        >
          <ArrowLeft size={16} />
          返回，后台继续生成
        </button>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PhoneFrame>
  );
}
