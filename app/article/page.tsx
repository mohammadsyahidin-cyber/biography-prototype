"use client";

import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

const articleBody = [
  "小时候，家门口不远处就是清水河。那条河不宽，但河水清澈见底，能看到水底的鹅卵石和游来游去的小鱼。每到夏天，河边就成了孩子们的天堂。",
  "建国和他的三个兄弟，几乎每天下午都会结伴去河边。四个男孩卷起裤腿，赤着脚踩进凉丝丝的河水里，弯着腰，瞪大眼睛在石头缝里摸鱼。每次谁摸到一条，岸上就会响起一阵欢呼。建国记得最清楚的，是有一次他摸到了一条足有巴掌大的鲤鱼，那条鱼劲儿特别大，差点从手里滑走。",
  "后来秀芳嫁过来后，也听公公婆婆讲过许多清水河的故事。她说，建国每次说起摸鱼的事，眼睛里都放着光，好像又回到了那个无忧无虑的夏天。那条清水河，不只是一条河，更是一家人童年记忆里最温暖的地方。",
];

function DraftBadge() {
  return (
    <span className="px-[10px] py-[4px] rounded-[8px] bg-[var(--accent-coral-light)] text-[var(--accent-coral)] text-[12px] font-semibold font-outfit">
      草稿
    </span>
  );
}

export default function ArticlePage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="文章预览" rightAction={<DraftBadge />} />

      {/* Scrollable content */}
      <div className="flex-1 overflow-auto px-[20px] py-[16px] flex flex-col gap-[16px]">
        <span className="text-[12px] text-[var(--text-tertiary)] font-outfit">
          温情叙事风格
        </span>

        <h1 className="text-[24px] font-bold text-[var(--text-primary)] font-serif-sc">
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
              className="text-[15px] leading-[1.8] text-[var(--text-primary)] font-serif-sc"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-[20px] py-[14px] flex gap-[12px] border-t border-[var(--border-subtle)]">
        <Link
          href="#"
          className="flex-1 py-[12px] rounded-[14px] border border-[var(--border-subtle)] text-center text-[15px] font-semibold text-[var(--text-primary)] font-outfit"
        >
          编辑
        </Link>
        <Link
          href="/article-final"
          className="flex-1 py-[12px] rounded-[14px] bg-[var(--accent-green)] text-center text-[15px] font-semibold text-white font-outfit"
        >
          确认定稿
        </Link>
      </div>
    </PhoneFrame>
  );
}
