"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ChevronLeft, Share2, Flame, X, Copy, QrCode, MessageCircle, Globe } from "lucide-react";

export default function MemorialPage() {
  const [showShare, setShowShare] = useState(false);
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
            onClick={() => setShowShare(true)}
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

      {/* Memorial Share Modal */}
      {showShare && (
        <div style={{ position: "absolute", inset: 0, zIndex: 50 }}>
          {/* Solid backdrop */}
          <div
            onClick={() => setShowShare(false)}
            style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.92)" }}
          />
          {/* Scrollable content wrapper */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Auto-margin centering trick */}
            <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 0", flexShrink: 0 }}>

              {/* Memorial Poster Card */}
              <div
                style={{
                  width: 300,
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "#1A1612",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,160,96,0.15)",
                  flexShrink: 0,
                }}
              >
                {/* Card top with photo */}
                <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
                  <img src="/biography-prototype/images/card-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 30%, #1A1612 100%)" }} />
                  <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center" }}>
                    <Flame size={20} fill="rgba(200,160,96,0.6)" style={{ color: "rgba(200,160,96,0.6)", margin: "0 auto 8px" }} />
                    <h3 className="font-serif-sc" style={{ fontSize: 24, fontWeight: 700, color: "rgba(200,160,96,0.9)" }}>李建国</h3>
                  </div>
                </div>

                {/* Life span */}
                <div style={{ textAlign: "center", padding: "4px 24px 16px" }}>
                  <p className="font-outfit" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", letterSpacing: 2 }}>1952 — 2024</p>
                </div>

                {/* Quote */}
                <div style={{ padding: "0 28px 20px", textAlign: "center" }}>
                  <div style={{ height: 1, backgroundColor: "rgba(200,160,96,0.2)", marginBottom: 16 }} />
                  <p className="font-serif-sc" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(200,160,96,0.9)", fontStyle: "italic" }}>
                    "做人要踏实，走过的路都算数。"
                  </p>
                  <p className="font-outfit" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6, marginBottom: 14 }}>—— 父亲常说的话</p>
                  <p className="font-serif-sc" style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
                    从清水河边的少年，到工厂里的青年，再到儿孙满堂的老人。他的故事，是一个时代的缩影，更是一个家族的温暖记忆。
                  </p>
                </div>

                {/* Bottom with stats + QR */}
                <div style={{ padding: "0 24px 24px" }}>
                  <div style={{ height: 1, backgroundColor: "rgba(200,160,96,0.15)", marginBottom: 16 }} />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-outfit" style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>一生的故事，都在这里</p>
                      <div className="flex items-center gap-3 font-outfit">
                        <span style={{ fontSize: 12, color: "rgba(200,160,96,0.8)" }}>5章节</span>
                        <span style={{ fontSize: 12, color: "rgba(200,160,96,0.8)" }}>13故事</span>
                        <span style={{ fontSize: 12, color: "rgba(200,160,96,0.8)" }}>3家人</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div style={{ width: 52, height: 52, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: 4 }}>
                        <div style={{ width: "100%", height: "100%", borderRadius: 6, backgroundColor: "rgba(200,160,96,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <QrCode size={22} style={{ color: "rgba(200,160,96,0.7)" }} />
                        </div>
                      </div>
                      <span className="font-outfit" style={{ fontSize: 9, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5 }}>扫码追忆</span>
                    </div>
                  </div>
                </div>

                {/* Brand bar */}
                <div style={{ padding: "0 24px 20px" }}>
                  <div style={{ height: 1, backgroundColor: "rgba(200,160,96,0.12)", marginBottom: 12 }} />
                  <div className="flex items-center justify-center gap-1.5">
                    <img src="/biography-prototype/images/logo.png" alt="" width={18} height={18} style={{ borderRadius: 5 }} />
                    <span className="font-serif-sc" style={{ fontSize: 10, fontWeight: 600, color: "rgba(200,160,96,0.67)" }}>江河传记</span>
                    <span className="font-outfit" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>·</span>
                    <span className="font-outfit" style={{ fontSize: 9, color: "rgba(255,255,255,0.25)" }}>用文字，留住家人的故事</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 font-outfit" style={{ marginTop: 24, flexShrink: 0 }}>
                <button className="flex flex-col items-center gap-1.5" style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}>
                  <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: "#2DC100" }}>
                    <MessageCircle size={22} style={{ color: "#fff" }} />
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>微信</span>
                </button>
                <button className="flex flex-col items-center gap-1.5" style={{ border: "none", background: "none", cursor: "pointer", padding: 0 }}>
                  <div className="flex items-center justify-center" style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: "#2DC100" }}>
                    <Globe size={22} style={{ color: "#fff" }} />
                  </div>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.8)" }}>朋友圈</span>
                </button>
                <button className="flex items-center justify-center gap-2" style={{ height: 48, padding: "0 28px", borderRadius: 24, backgroundColor: "rgba(200,160,96,0.9)", border: "none", cursor: "pointer", color: "#1A1612", fontSize: 14, fontWeight: 600 }}>
                  <Copy size={16} />
                  保存图片
                </button>
              </div>

              {/* Close */}
              <button
                onClick={() => setShowShare(false)}
                className="flex items-center justify-center"
                style={{ marginTop: 24, width: 40, height: 40, borderRadius: 20, backgroundColor: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer", flexShrink: 0 }}
              >
                <X size={18} style={{ color: "rgba(255,255,255,0.6)" }} />
              </button>

            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
