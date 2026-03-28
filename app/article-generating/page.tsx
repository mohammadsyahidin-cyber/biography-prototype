"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { Loader2 } from "lucide-react";

const steps = [
  "正在分析对话素材…",
  "正在构思文章结构…",
  "正在生成文章内容…",
  "正在润色文字…",
];

export default function ArticleGeneratingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStep((s) => (s < steps.length - 1 ? s + 1 : s));
    }, 2500);

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          clearInterval(stepInterval);
          return 100;
        }
        return p + 1;
      });
    }, 100);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => router.push("/article-preview"), 500);
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
          正在生成文章
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
                transition: "width 0.1s linear",
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
          预计需要 15-30 秒，请耐心等待
        </p>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </PhoneFrame>
  );
}
