"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { BackHeader } from "@/components/BackHeader";
import { Camera, ChevronRight } from "lucide-react";

const fields = [
  { label: "传记名称", value: "父亲的岁月" },
  { label: "主角人物", value: "李建国" },
  { label: "与主角关系", value: "父子" },
  { label: "写作风格", value: "温情叙事", hasChevron: true },
];

export default function BiographyInfoPage() {
  const router = useRouter();
  const [values, setValues] = useState(fields.map((f) => f.value));

  return (
    <PhoneFrame>
      <StatusBar />
      <BackHeader title="传记信息" />

      <div className="flex-1 overflow-auto font-outfit" style={{ padding: "20px 24px" }}>
        {/* Cover photo */}
        <div className="flex flex-col items-center" style={{ marginBottom: 28 }}>
          <div className="relative" style={{ width: 120, height: 80, borderRadius: 12, backgroundColor: "var(--bg-muted)", overflow: "hidden" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera size={24} style={{ color: "var(--text-tertiary)" }} />
            </div>
          </div>
          <span style={{ fontSize: 13, color: "var(--accent-green)", marginTop: 8, fontWeight: 500 }}>更换封面</span>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4">
          {fields.map((f, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-secondary)" }}>{f.label}</span>
              {f.hasChevron ? (
                <div className="flex items-center" style={{ backgroundColor: "var(--bg-card)", borderRadius: 12, border: "1px solid var(--border-subtle)", padding: "12px 14px" }}>
                  <span className="flex-1" style={{ fontSize: 15, color: "var(--text-primary)" }}>{values[i]}</span>
                  <ChevronRight size={16} style={{ color: "var(--text-tertiary)" }} />
                </div>
              ) : (
                <input
                  value={values[i]}
                  onChange={(e) => { const v = [...values]; v[i] = e.target.value; setValues(v); }}
                  className="font-outfit"
                  style={{ backgroundColor: "var(--bg-card)", borderRadius: 12, border: "1px solid var(--border-subtle)", padding: "12px 14px", fontSize: 15, color: "var(--text-primary)", outline: "none" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Save button */}
      <div className="shrink-0 font-outfit" style={{ padding: "12px 24px 28px" }}>
        <button onClick={() => router.back()} className="w-full" style={{ height: 48, borderRadius: 12, backgroundColor: "var(--accent-green)", color: "#fff", fontSize: 15, fontWeight: 600 }}>
          保存修改
        </button>
      </div>
    </PhoneFrame>
  );
}
