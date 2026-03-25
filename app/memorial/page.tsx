"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ChevronLeft, Share2, Flame } from "lucide-react";

export default function MemorialPage() {
  return (
    <PhoneFrame>
      <StatusBar />

      {/* Full-screen scrollable */}
      <div className="flex-1 overflow-auto" style={{ backgroundColor: "#1A1612" }}>
        {/* Hero section with image */}
        <div style={{ position: "relative", height: 360, overflow: "hidden" }}>
          <img
            src="/biography-prototype/images/card-bg.jpg"
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7) saturate(0.8)",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,22,18,0.3) 0%, rgba(26,22,18,0.1) 40%, rgba(26,22,18,0.85) 85%, #1A1612 100%)",
            }}
          />

          {/* Top nav */}
          <div
            className="flex items-center justify-between"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              padding: "12px 16px",
              zIndex: 2,
            }}
          >
            <Link
              href="/home"
              className="flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ChevronLeft size={20} style={{ color: "#fff" }} />
            </Link>
            <button
              className="flex items-center justify-center"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Share2 size={16} style={{ color: "#fff" }} />
            </button>
          </div>

          {/* Name & dates at bottom of hero */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "0 28px 24px",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            {/* Candle flame */}
            <div
              className="flex items-center justify-center"
              style={{ marginBottom: 16 }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: "rgba(200,160,96,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Flame
                  size={26}
                  style={{ color: "#C8A060" }}
                  fill="#C8A060"
                />
              </div>
            </div>
            <p
              className="font-outfit"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              永远怀念
            </p>
            <h1
              className="font-serif-sc"
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#fff",
                lineHeight: "42px",
                marginBottom: 8,
              }}
            >
              李建国
            </h1>
            <p
              className="font-outfit"
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: 1,
              }}
            >
              1952 — 2024
            </p>
          </div>
        </div>

        {/* Quote section */}
        <div style={{ padding: "24px 28px 20px", textAlign: "center" }}>
          <div
            style={{
              width: 32,
              height: 2,
              backgroundColor: "rgba(200,160,96,0.3)",
              margin: "0 auto 20px",
              borderRadius: 1,
            }}
          />
          <p
            className="font-serif-sc"
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              fontStyle: "italic",
            }}
          >
            "那条清水河，不只是一条河，
            <br />
            更是一家人童年记忆里
            <br />
            最温暖的地方。"
          </p>
          <p
            className="font-outfit"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              marginTop: 12,
            }}
          >
            —— 摘自《父亲的岁月》
          </p>
        </div>

        {/* Life moments */}
        <div style={{ padding: "8px 24px 24px" }}>
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "20px",
            }}
          >
            <p
              className="font-outfit"
              style={{
                fontSize: 11,
                color: "rgba(200,160,96,0.8)",
                letterSpacing: 2,
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              一生足迹
            </p>
            <div className="flex flex-col gap-4">
              {[
                { year: "1952", text: "出生于河南农村，家中兄弟四人" },
                { year: "1965", text: "走十里山路求学，遇到改变一生的恩师" },
                { year: "1975", text: "进入工厂工作，开启职业生涯" },
                { year: "1980", text: "与秀芳结婚，共建温馨小家" },
                { year: "2024", text: "在家人陪伴中安详离世" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor:
                          i === 4
                            ? "rgba(200,160,96,0.6)"
                            : "rgba(255,255,255,0.2)",
                        flexShrink: 0,
                        marginTop: 4,
                      }}
                    />
                    {i < 4 && (
                      <div
                        style={{
                          width: 1,
                          flex: 1,
                          backgroundColor: "rgba(255,255,255,0.08)",
                          marginTop: 4,
                        }}
                      />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < 4 ? 0 : 0 }}>
                    <span
                      className="font-outfit"
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(200,160,96,0.7)",
                      }}
                    >
                      {item.year}
                    </span>
                    <p
                      className="font-outfit"
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.5,
                        marginTop: 2,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family message */}
        <div style={{ padding: "0 24px 24px", textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "rgba(200,160,96,0.08)",
              borderRadius: 16,
              border: "1px solid rgba(200,160,96,0.12)",
              padding: "24px 24px",
            }}
          >
            {/* 人生格言 */}
            <p
              className="font-serif-sc"
              style={{
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(200,160,96,0.85)",
                fontWeight: 600,
              }}
            >
              "做人要踏实，走过的路都算数。"
            </p>
            <p
              className="font-outfit"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              —— 父亲常说的话
            </p>

            {/* 分割线 */}
            <div style={{ height: 1, backgroundColor: "rgba(200,160,96,0.12)", margin: "0 20px 16px" }} />

            {/* 家人寄语 */}
            <p
              className="font-serif-sc"
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              您走过的路，我们都记得。
              <br />
              这本书记录了您一生的故事，
              <br />
              愿来看您的人，都能感受您的温暖。
            </p>
            <p
              className="font-outfit"
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                marginTop: 10,
              }}
            >
              儿子 小明 · 全家敬献
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-around"
          style={{ padding: "0 24px 28px" }}
        >
          {[
            { num: "5", label: "章节" },
            { num: "13", label: "故事" },
            { num: "3", label: "家人参与" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span
                className="font-outfit"
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "rgba(200,160,96,0.8)",
                }}
              >
                {s.num}
              </span>
              <span
                className="font-outfit"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-3"
          style={{ padding: "0 40px 28px" }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
          />
          <Flame size={14} style={{ color: "rgba(200,160,96,0.4)" }} />
          <div
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
          />
        </div>

        {/* CTA */}
        <div style={{ padding: "0 24px 40px" }}>
          <p
            className="font-outfit"
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            用文字留住他的一生
          </p>
          <Link
            href="/article-final"
            className="flex items-center justify-center font-outfit"
            style={{
              height: 50,
              borderRadius: 14,
              backgroundColor: "rgba(200,160,96,0.9)",
              color: "#1A1612",
              fontSize: 16,
              fontWeight: 600,
              width: "100%",
            }}
          >
            阅读完整传记
          </Link>
          <button
            className="flex items-center justify-center gap-2 font-outfit"
            style={{
              height: 50,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "transparent",
              color: "rgba(255,255,255,0.6)",
              fontSize: 15,
              fontWeight: 500,
              width: "100%",
              marginTop: 10,
              cursor: "pointer",
            }}
          >
            <Share2 size={16} />
            分享纪念页
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
