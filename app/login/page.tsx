"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BookOpen, MessageCircle, Smartphone } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <div
        className="flex-1 flex flex-col items-center"
        style={{ backgroundColor: "#F8F5EF" }}
      >
        {/* Spacer */}
        <div style={{ height: 160 }} />

        {/* Logo area */}
        <div className="flex flex-col items-center" style={{ gap: 16, padding: "0 40px" }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              backgroundColor: "#8A7356",
            }}
          >
            <BookOpen size={40} style={{ color: "#FFFDF8" }} />
          </div>

          <h1
            className="font-serif-sc"
            style={{ fontSize: 32, fontWeight: 700, color: "#2C2419" }}
          >
            岁记
          </h1>

          {/* Decorative divider */}
          <div
            style={{
              width: 32,
              height: 1.5,
              borderRadius: 1,
              backgroundColor: "#C8B89A",
            }}
          />

          <p
            className="font-outfit"
            style={{
              fontSize: 14,
              color: "#7A6E5F",
              textAlign: "center",
              letterSpacing: 1,
            }}
          >
            用文字，留住家人的故事
          </p>

          <p
            className="font-outfit"
            style={{
              fontSize: 11,
              color: "#A69A8B",
              textAlign: "center",
              letterSpacing: 0.5,
            }}
          >
            记录家人的一生  留住温暖的故事
          </p>
        </div>

        {/* Flexible spacer */}
        <div className="flex-1" />

        {/* Bottom area */}
        <div
          className="flex flex-col items-center w-full"
          style={{ gap: 16, padding: "0 32px 60px" }}
        >
          {/* WeChat login button */}
          <button
            onClick={() => router.push("/onboarding")}
            className="flex items-center justify-center gap-2 w-full font-outfit"
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
            <MessageCircle size={20} />
            微信一键登录
          </button>

          {/* Phone login button */}
          <button
            className="flex items-center justify-center gap-2 w-full font-outfit"
            style={{
              height: 50,
              borderRadius: 25,
              backgroundColor: "transparent",
              border: "1px solid #D1D0CD",
              cursor: "pointer",
              color: "#7A6E5F",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <Smartphone size={18} />
            手机号登录
          </button>

          {/* Agreement */}
          <div className="flex items-center gap-1.5">
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                border: "1.5px solid #A69A8B",
              }}
            />
            <span
              className="font-outfit"
              style={{ fontSize: 11, color: "#A69A8B" }}
            >
              已阅读并同意《用户协议》和《隐私政策》
            </span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
