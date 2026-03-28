"use client";

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import Link from "next/link";

const articleBody = [
  "小时候，家门口不远处就是清水河。那条河不宽，但河水清澈见底，能看到水底的鹅卵石和游来游去的小鱼。每到夏天，河边就成了孩子们的天堂。",
  "建国和他的三个兄弟，几乎每天下午都会结伴去河边。四个男孩卷起裤腿，赤着脚踩进凉丝丝的河水里。弯着腰，瞪大眼睛在石头缝里摸鱼。每次谁摸到一条，岸上就会响起一阵欢呼。",
  "后来秀芳嫁过来后，也听公公婆婆讲过许多清水河的故事。那条清水河，不只是一条河，更是一家人童年记忆里最温暖的地方。",
];

export default function ArticleVersionPage() {
  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="历史版本" />

      <div className="flex-1 overflow-auto px-[20px] py-[16px] flex flex-col gap-[16px]">
        {/* Version info */}
        <div
          className="rounded-[12px] px-[16px] py-[12px]"
          style={{ backgroundColor: "var(--accent-warm-light, #F5EDE0)" }}
        >
          <p className="text-[13px] font-semibold text-[var(--text-primary)] font-outfit">
            王秀芳的版本
          </p>
          <p className="text-[12px] text-[var(--text-tertiary)] font-outfit mt-[4px]">
            昨天 15:20 · 补充了第3段关于清水河的回忆
          </p>
        </div>

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

        {/* Diff hint */}
        <div className="text-[12px] text-[var(--text-tertiary)] font-outfit italic">
          此版本比当前版本少1段内容
        </div>
      </div>

      {/* Bottom bar — 复原此版本 */}
      <div className="px-[20px] py-[14px] border-t border-[var(--border-subtle)]">
        <Link
          href="/article-edit"
          className="w-full py-[14px] rounded-[25px] bg-[var(--accent-green)] text-center text-[15px] font-semibold text-white font-outfit flex items-center justify-center"
        >
          复原此版本
        </Link>
      </div>
    </PhoneFrame>
  );
}
