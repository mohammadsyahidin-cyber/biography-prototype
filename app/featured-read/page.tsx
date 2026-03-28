"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { ChevronLeft, BookOpen, Heart, List, Share2, X } from "lucide-react";
import Link from "next/link";

const tocData = [
  {
    num: 1,
    title: "启蒙岁月",
    sections: [
      { title: "从乡村私塾到县城中学", status: "reading" },
      { title: "河边的少年时光", status: "done" },
      { title: "母亲的教诲", status: "done" },
    ],
  },
  {
    num: 2,
    title: "教书生涯",
    sections: [
      { title: "初登讲台", status: "done" },
      { title: "山路上的家访", status: "done" },
      { title: "桃李满天下", status: "done" },
    ],
  },
  {
    num: 3,
    title: "风雨岁月",
    sections: [
      { title: "改革开放的春风", status: "done" },
      { title: "退休后的生活", status: "done" },
    ],
  },
];

export default function FeaturedReadPage() {
  const router = useRouter();
  const [showToc, setShowToc] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />

      {/* Back header */}
      <div className="flex items-center gap-1 shrink-0 font-outfit" style={{ padding: "4px 16px 4px 4px" }}>
        <button onClick={() => router.back()} className="flex items-center justify-center" style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "var(--bg-muted)" }}>
          <ChevronLeft size={20} style={{ color: "var(--text-primary)" }} />
        </button>
        <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>精选传记</span>
      </div>

      {/* Chapter bar */}
      <div className="flex items-center justify-center gap-1.5 shrink-0" style={{ padding: "8px 24px", backgroundColor: "var(--white)" }}>
        <BookOpen size={14} style={{ color: "var(--accent-green)" }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-green)", letterSpacing: 1 }}>第一章 · 启蒙岁月</span>
      </div>

      {/* Article body */}
      <div className="flex-1 overflow-auto" style={{ backgroundColor: "var(--white)" }}>
        <div className="flex flex-col gap-4" style={{ padding: "0 24px 40px" }}>
          {/* Title */}
          <h1 className="font-serif-sc" style={{ fontSize: 26, fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
            从乡村私塾到县城中学
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-1.5 font-outfit">
            <div style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "#C8A96E" }} />
            <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>王小明 · 岁月如歌</span>
          </div>
          <span className="font-outfit" style={{ fontSize: 12, color: "var(--text-tertiary)" }}>2024年6月 · 定稿</span>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--border-subtle)" }} />
            <div style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "var(--accent-green)", opacity: 0.5 }} />
            <div style={{ flex: 1, height: 1, backgroundColor: "var(--border-subtle)" }} />
          </div>

          {/* Paragraphs */}
          <p className="font-serif-sc" style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.875 }}>
            1962年秋天，父亲第一次走进了村里的私塾。那间教室不过是一间土坯房，几张高低不平的桌子，一块用锅底灰刷的黑板。但对于一个七岁的孩子来说，那里就是通向外面世界的大门。
          </p>
          <p className="font-serif-sc" style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.875 }}>
            启蒙老师姓张，是村里唯一读过高中的人。张老师常说：「字是人的脸面，认得字，走到哪里都不怕。」父亲把这句话记了一辈子。放学回家，他就用树枝在地上反复写当天学的字，直到天黑看不见为止。
          </p>
          <p className="font-serif-sc" style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.875 }}>
            到了1975年，父亲以全公社第一名的成绩考入了县城中学。那是他第一次坐汽车，第一次走出这个生活了十几年的小山村。母亲在村口送他，塞给他一双亲手纳的布鞋和两个煮鸡蛋。
          </p>
          <p className="font-serif-sc" style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.875 }}>
            县城中学的条件比私塾好得多，但父亲始终没有忘记张老师的那句话。他白天上课，晚上在煤油灯下看书，成绩一直名列前茅。毕业后，他选择回到乡村，成为了一名像张老师一样的教师。
          </p>
          <p className="font-serif-sc" style={{ fontSize: 16, color: "var(--text-primary)", lineHeight: 1.875 }}>
            父亲说，他这辈子最骄傲的事，不是教出了多少大学生，而是让村里的孩子们都认识了字，都有了走出大山的勇气。
          </p>

          {/* End ornament */}
          <div className="flex items-center justify-center gap-2" style={{ padding: "12px 0 24px" }}>
            <div style={{ width: 20, height: 1, backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
            <div style={{ width: 5, height: 5, borderRadius: 100, backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
            <div style={{ width: 20, height: 1, backgroundColor: "var(--accent-green)", opacity: 0.4 }} />
          </div>

          {/* Author card */}
          <div style={{ borderRadius: 14, backgroundColor: "var(--bg-page)", border: "1px solid var(--border-subtle)", padding: 16 }}>
            <div className="flex items-center gap-2.5 font-outfit" style={{ marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#C8A96E" }} />
              <div className="flex flex-col gap-0.5">
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>王小明</span>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>为父亲撰写传记 · 已完成12篇</span>
              </div>
            </div>
            <p className="font-serif-sc" style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              「每次整理父亲的故事，我都觉得离他更近了一步。感谢这些文字，让记忆不会随时间消散。」
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between shrink-0 font-outfit" style={{ padding: "12px 20px 28px", backgroundColor: "var(--white)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="flex items-center gap-2">
          <Heart size={16} style={{ color: "var(--accent-coral)" }} />
          <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>36 人觉得值得珍藏</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowToc(true)} className="flex items-center gap-1.5" style={{ height: 36, padding: "0 14px", borderRadius: 18, backgroundColor: "var(--bg-muted)" }}>
            <List size={14} style={{ color: "var(--text-secondary)" }} />
            <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-secondary)" }}>目录</span>
          </button>
          <button className="flex items-center gap-1.5" style={{ height: 36, padding: "0 16px", borderRadius: 18, backgroundColor: "var(--accent-green)" }}>
            <Share2 size={14} style={{ color: "var(--white)" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--white)" }}>分享</span>
          </button>
        </div>
      </div>

      {/* TOC Drawer (S9b) */}
      {showToc && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end" onClick={() => setShowToc(false)}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.4)" }} />
          <div className="relative font-outfit" style={{ backgroundColor: "var(--white)", borderRadius: "20px 20px 0 0" }} onClick={(e) => e.stopPropagation()}>
            {/* Handle */}
            <div className="flex justify-center" style={{ padding: "10px 0 0" }}>
              <div style={{ width: 36, height: 4, borderRadius: 2, backgroundColor: "var(--border-strong)" }} />
            </div>
            {/* Header */}
            <div className="flex items-center justify-between" style={{ padding: "12px 20px 16px" }}>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: 17, fontWeight: 700, color: "var(--text-primary)" }}>全书目录</span>
                <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>12篇文章</span>
              </div>
              <button onClick={() => setShowToc(false)} className="flex items-center justify-center" style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: "var(--bg-muted)" }}>
                <X size={16} style={{ color: "var(--text-secondary)" }} />
              </button>
            </div>
            {/* Progress */}
            <div style={{ padding: "0 20px 16px" }}>
              <div style={{ height: 4, borderRadius: 2, backgroundColor: "var(--accent-green-light)", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: 2, backgroundColor: "var(--accent-green)" }} />
              </div>
            </div>
            {/* TOC list */}
            <div className="flex flex-col gap-4" style={{ padding: "0 20px 28px" }}>
              {tocData.map((ch) => (
                <div key={ch.num} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center" style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: "var(--accent-green)", color: "var(--white)", fontSize: 11, fontWeight: 700 }}>
                      {ch.num}
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{ch.title}</span>
                  </div>
                  {ch.sections.map((sec, si) => (
                    <div
                      key={si}
                      className="flex items-center justify-between"
                      style={{
                        padding: "12px 14px",
                        borderRadius: 12,
                        backgroundColor: sec.status === "reading" ? "var(--accent-green-light)" : "var(--bg-page)",
                        border: sec.status === "reading" ? "1.5px solid var(--accent-green)" : "1px solid var(--border-subtle)",
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>{sec.title}</span>
                      <span style={{ fontSize: 11, fontWeight: sec.status === "reading" ? 600 : 400, color: sec.status === "reading" ? "var(--accent-green)" : "var(--text-tertiary)" }}>
                        {sec.status === "reading" ? "阅读中" : "已完成"}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
