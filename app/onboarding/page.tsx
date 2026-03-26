"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Mic, BookOpen, Users } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "用声音记录故事",
    desc: "只需对着手机讲述\n江河传记帮你变成文字",
  },
  {
    icon: BookOpen,
    title: "生成精美传记",
    desc: "口述的故事自动整理成章节\n生成一本属于家人的人生之书",
  },
  {
    icon: Users,
    title: "家人一起参与",
    desc: "邀请家人共同补充回忆\n让传记更加完整、更有温度",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const current = steps[step];
  const Icon = current.icon;
  const isLast = step === steps.length - 1;

  return (
    <PhoneFrame>
      <div
        className="flex-1 flex flex-col items-center"
        style={{ backgroundColor: "#F8F5EF" }}
      >
        {/* Skip bar (not on last page) */}
        {!isLast && (
          <div
            className="w-full flex justify-end font-outfit"
            style={{ padding: "16px 24px 0" }}
          >
            <button
              onClick={() => router.push("/home")}
              style={{
                fontSize: 14,
                color: "#A69A8B",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              跳过
            </button>
          </div>
        )}

        {/* Spacer */}
        <div style={{ height: isLast ? 140 : 100 }} />

        {/* Illustration circle */}
        <div
          className="flex items-center justify-center"
          style={{
            width: 180,
            height: 180,
            borderRadius: 90,
            backgroundColor: "#EDE5D8",
            border: "1px solid #D8CCB8",
            position: "relative",
          }}
        >
          {/* Inner ring */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 70,
              border: "0.5px solid #D0C4B0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={64} style={{ color: "#8A7356" }} />
          </div>
        </div>

        {/* Text area */}
        <div
          className="flex flex-col items-center"
          style={{ gap: 12, padding: "40px 40px 0" }}
        >
          {/* Decorative divider */}
          <div
            style={{
              width: 24,
              height: 1.5,
              borderRadius: 1,
              backgroundColor: "#C8B89A",
            }}
          />
          <h2
            className="font-serif-sc"
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#2C2419",
              textAlign: "center",
            }}
          >
            {current.title}
          </h2>
          <p
            className="font-outfit"
            style={{
              fontSize: 15,
              color: "#7A6E5F",
              textAlign: "center",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
            }}
          >
            {current.desc}
          </p>
        </div>

        {/* Flexible spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div
          className="flex flex-col items-center w-full"
          style={{ gap: 24, padding: "0 32px 60px" }}
        >
          {/* Dots */}
          <div className="flex items-center" style={{ gap: 8 }}>
            {steps.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === step ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: i === step ? "#8A7356" : "#D1D0CD",
                  transition: "width 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => {
              if (isLast) {
                router.push("/home");
              } else {
                setStep(step + 1);
              }
            }}
            className="flex items-center justify-center w-full font-outfit"
            style={{
              height: 50,
              borderRadius: 25,
              backgroundColor: "#8A7356",
              border: "none",
              cursor: "pointer",
              color: "#FFFDF8",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            {isLast ? "开始使用" : "下一步"}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
