"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";
import { BookOpen } from "lucide-react";

interface BioCard {
  badge: string;
  coverBg: string;
  title: string;
  avatarBg: string;
  author: string;
  desc: string;
}

const bioCards: BioCard[] = [
  {
    badge: "父亲的传记",
    coverBg: "#A89070",
    title: "岁月如歌 — 一位乡村教师的一生",
    avatarBg: "#C8A96E",
    author: "王小明 · 12篇文章",
    desc: "从1960年代的乡村私塾，到改革开放后的县城中学，父亲用四十年的光阴诠释了一位教育工作者的坚守与奉献…",
  },
  {
    badge: "母亲的传记",
    coverBg: "#7A8B6B",
    title: "她的名字叫春芳",
    avatarBg: "#E05A47",
    author: "张晓燕 · 8篇文章",
    desc: "妈妈总说自己没什么好讲的，可当她开口，那些关于老家厨房、田间劳作、送我上学的故事，每一段都让人热泪盈眶…",
  },
  {
    badge: "爷爷的传记",
    coverBg: "#8B7A6B",
    title: "黄河边的老船长",
    avatarBg: "#C8A96E",
    author: "李文博 · 15篇文章",
    desc: "爷爷在黄河上跑了大半辈子船，他说每一个弯道都藏着一段故事。这本传记记录了一位船长从少年到白发的人生航程…",
  },
];

export default function FeaturedPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="精选传记" />
      <div className="flex-1 overflow-auto font-outfit" style={{ backgroundColor: "var(--bg-page)" }}>
        <div className="flex flex-col gap-4" style={{ padding: "16px 20px 24px" }}>
          <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
            来自真实家庭的温暖故事，看看别人是如何记录家人一生的
          </p>

          {bioCards.map((card, i) => (
            <div key={i} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-card)" }}>
              {/* Cover */}
              <div style={{ position: "relative", height: 100, backgroundColor: card.coverBg, overflow: "hidden" }}>
                <img src="/biography-prototype/images/card-bg.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }} />
                <div style={{ position: "absolute", left: 12, top: 12, padding: "4px 10px", borderRadius: 8, backgroundColor: "rgba(0,0,0,0.3)" }}>
                  <span style={{ fontSize: 11, fontWeight: 500, color: "#FFFDF8" }}>{card.badge}</span>
                </div>
              </div>
              {/* Body */}
              <div className="flex flex-col gap-2" style={{ padding: "14px 16px 16px" }}>
                <h3 className="font-serif-sc" style={{ fontSize: 16, fontWeight: 700, color: "var(--text-primary)" }}>{card.title}</h3>
                <div className="flex items-center gap-2">
                  <div style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: card.avatarBg }} />
                  <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{card.author}</span>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>{card.desc}</p>
                <Link href="/featured-read" className="flex items-center justify-center gap-1.5" style={{ height: 36, borderRadius: 10, backgroundColor: "var(--bg-muted)", width: "100%" }}>
                  <BookOpen size={14} style={{ color: "var(--accent-green)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--accent-green)" }}>阅读传记</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
