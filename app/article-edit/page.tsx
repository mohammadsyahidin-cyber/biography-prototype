"use client";

import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { Clock, X, Eye } from "lucide-react";
import Link from "next/link";

const articleBody = [
  "小时候，家门口不远处就是清水河。那条河不宽，但河水清澈见底，能看到水底的鹅卵石和游来游去的小鱼。每到夏天，河边就成了孩子们的天堂。",
  "建国和他的三个兄弟，几乎每天下午都会结伴去河边。四个男孩卷起裤腿，赤着脚踩进凉丝丝的河水里，弯着腰，瞪大眼睛在石头缝里摸鱼。每次谁摸到一条，岸上就会响起一阵欢呼。建国记得最清楚的，是有一次他摸到了一条足有巴掌大的鲤鱼。",
  "后来秀芳嫁过来后，也听公公婆婆讲过许多清水河的故事。她说，建国每次说起摸鱼的事，眼睛里都放着光，好像又回到了那个无忧无虑的夏天。那条清水河，不只是一条河，更是一家人童年记忆里最温暖的地方。",
];

const historyItems = [
  {
    name: "李小明",
    badge: "当前版本",
    badgeColor: "#8A7356",
    time: "今天 10:32",
    desc: "修改了标题和第2段正文",
  },
  {
    name: "王秀芳",
    badge: null,
    badgeColor: null,
    time: "昨天 15:20",
    desc: "补充了第3段关于清水河的回忆",
    link: true,
  },
  {
    name: "小叙",
    badge: "自动生成",
    badgeColor: "#C8826A",
    time: "3天前 09:15",
    desc: "根据采访内容生成初稿",
    link: true,
  },
];

export default function ArticleEditPage() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="编辑文章" />

      <div className="flex-1 overflow-auto px-[20px] py-[16px] flex flex-col gap-[16px]">
        <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
          温情叙事风格
        </span>

        <h1
          className="text-[24px] font-bold text-[var(--text-primary)] font-serif-sc outline-none"
          contentEditable
          suppressContentEditableWarning
        >
          童年趣事
        </h1>

        <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
          爸爸、妈妈 共同讲述
        </span>

        <div className="h-[1px] bg-[var(--border-subtle)]" />

        <div className="flex flex-col gap-[16px]">
          {articleBody.map((paragraph, i) => (
            <p
              key={i}
              className="text-[15px] leading-[1.8] text-[var(--text-primary)] font-serif-sc outline-none"
              contentEditable
              suppressContentEditableWarning
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar — 编辑历史 + 保存 */}
      <div className="px-[20px] py-[14px] flex gap-[12px] border-t border-[var(--border-subtle)]">
        <button
          onClick={() => setShowHistory(true)}
          className="flex-1 py-[12px] rounded-[14px] border border-[var(--border-subtle)] flex items-center justify-center gap-[6px] text-[15px] font-semibold text-[var(--text-primary)] font-outfit"
        >
          <Clock size={16} />
          编辑历史
        </button>
        <Link
          href="/article-preview"
          className="flex-1 py-[12px] rounded-[14px] bg-[var(--accent-green)] text-center text-[15px] font-semibold text-white font-outfit"
        >
          保存
        </Link>
      </div>

      {/* 编辑历史抽屉 */}
      {showHistory && (
        <div
          className="absolute inset-0 z-50 flex flex-col justify-end"
          onClick={() => setShowHistory(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-[var(--bg-page)] px-[20px] pt-[20px] pb-[32px]"
            style={{ borderRadius: "20px 20px 0 0" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-[20px]">
              <div className="flex items-center gap-[8px]">
                <Clock size={20} className="text-[var(--text-primary)]" />
                <span className="text-[17px] font-bold text-[var(--text-primary)] font-serif-sc">
                  编辑历史
                </span>
              </div>
              <button onClick={() => setShowHistory(false)}>
                <X size={20} className="text-[var(--text-tertiary)]" />
              </button>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-[20px]">
              {historyItems.map((item, i) => (
                <div key={i} className="flex gap-[12px]">
                  {/* Timeline dot + line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-[10px] h-[10px] rounded-full border-2"
                      style={{
                        borderColor: i === 0 ? "#8A7356" : "#D1D0CD",
                        backgroundColor: i === 0 ? "#8A7356" : "transparent",
                      }}
                    />
                    {i < historyItems.length - 1 && (
                      <div className="w-[1px] flex-1 bg-[var(--border-subtle)] mt-[4px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-[4px]">
                    <div className="flex items-center gap-[8px] mb-[4px]">
                      <span className="text-[15px] font-bold text-[var(--text-primary)] font-outfit">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span
                          className="px-[8px] py-[2px] rounded-[6px] text-[11px] font-semibold text-white font-outfit"
                          style={{ backgroundColor: item.badgeColor || "#8A7356" }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[12px] text-[var(--text-tertiary)] font-outfit mb-[2px]">
                      {item.time}
                    </p>
                    <p className="text-[13px] text-[var(--text-secondary)] font-outfit">
                      {item.desc}
                    </p>
                    {item.link && (
                      <Link
                        href="/article-version"
                        className="text-[13px] text-[var(--accent-green)] font-outfit mt-[4px] inline-flex items-center gap-[4px]"
                      >
                        <Eye size={12} />
                        查看此版本 →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
