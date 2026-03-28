"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";

interface StyleOption {
  id: string;
  name: string;
  desc: string;
  preview: string;
}

const styles: StyleOption[] = [
  {
    id: "warm",
    name: "温情叙事",
    desc: "娓娓道来，温暖感人",
    preview: "那年夏天的清水河，阳光洒在水面上，波光粼粼...",
  },
  {
    id: "oral",
    name: "口述实录",
    desc: "保留口语化，原汁原味",
    preview: "我跟你说啊，那时候我们几个兄弟天天往河边跑...",
  },
  {
    id: "literary",
    name: "文学散文",
    desc: "优美文笔，富有诗意",
    preview: "清水河畔，少年的笑声随风而散，岁月却将它永远铭刻...",
  },
];

export default function StyleSelectPage() {
  const [selected, setSelected] = useState("warm");

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="生成文章" />

      <div className="flex-1 overflow-auto px-[20px] py-[16px] flex flex-col gap-[24px]">
        {/* Topic info */}
        <div className="flex flex-col gap-[6px]">
          <span className="text-[13px] text-[var(--text-tertiary)] font-outfit">
            当前话题
          </span>
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] font-outfit">
            童年趣事
          </h1>
          <span className="text-[13px] text-[var(--text-secondary)] font-outfit">
            11条对话 · 3人参与
          </span>
        </div>

        {/* Style selection */}
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[16px] font-semibold text-[var(--text-primary)] font-outfit">
            选择文章风格
          </h2>
          <p className="text-[13px] text-[var(--text-secondary)] font-outfit">
            将根据对话素材和所选风格生成文章
          </p>
        </div>

        {/* Style cards */}
        <div className="flex flex-col gap-[12px]">
          {styles.map((style) => {
            const isSelected = selected === style.id;
            return (
              <button
                key={style.id}
                onClick={() => setSelected(style.id)}
                className={`rounded-[16px] border p-[16px] text-left transition-colors ${
                  isSelected
                    ? "border-[var(--accent-green)] border-2"
                    : "border-[var(--border-subtle)]"
                } bg-[var(--bg-card)]`}
              >
                <div className="flex items-start gap-[12px]">
                  {/* Radio dot */}
                  <div
                    className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center shrink-0 mt-[2px] ${
                      isSelected
                        ? "border-[var(--accent-green)]"
                        : "border-[var(--border-subtle)]"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-[10px] h-[10px] rounded-full bg-[var(--accent-green)]" />
                    )}
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex items-baseline gap-[8px]">
                      <span className="text-[15px] font-semibold text-[var(--text-primary)] font-outfit">
                        {style.name}
                      </span>
                      <span className="text-[13px] text-[var(--text-secondary)] font-outfit">
                        {style.desc}
                      </span>
                    </div>
                    <p className="text-[13px] text-[var(--text-tertiary)] italic font-outfit leading-relaxed">
                      &ldquo;{style.preview}&rdquo;
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-[20px] py-[16px]">
        <Link
          href="/article-preview"
          className="block w-full py-[14px] rounded-[14px] bg-[var(--accent-green)] text-white text-center text-[16px] font-semibold font-outfit"
        >
          选择此风格
        </Link>
      </div>
    </PhoneFrame>
  );
}
