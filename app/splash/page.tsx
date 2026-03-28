"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Logo } from "@/components/Logo";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <PhoneFrame>
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ backgroundColor: "#F8F5EF" }}
      >
        <div className="flex flex-col items-center" style={{ gap: 20 }}>
          <Logo size={96} />

          <h1
            className="font-serif-sc"
            style={{ fontSize: 32, fontWeight: 700, color: "#2C2419" }}
          >
            江河传记
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
              letterSpacing: 1,
            }}
          >
            用文字，留住家人的故事
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}
