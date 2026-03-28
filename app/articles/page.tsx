"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { TabBar } from "@/components/TabBar";
import { BookOpen, FileText } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { useAuth } from "@/lib/auth";

type FilterKey = "all" | "final" | "draft";

interface ArticleItem {
  title: string;
  section: string;
  status: "final" | "draft";
  excerpt: string;
  date: string;
  participants: number;
}

interface ChapterGroup {
  chapter: string;
  num: number;
  articles: ArticleItem[];
}

const chapters: ChapterGroup[] = [
  {
    chapter: "童年生活与成长环境",
    num: 1,
    articles: [
      {
        title: "童年的清水河",
        section: "清水河摸鱼",
        status: "final",
        excerpt: "小时候，家门口不远处就是清水河。那条河不宽，但河水清澈见底...",
        date: "2024.3.15",
        participants: 2,
      },
      {
        title: "老家的院子",
        section: "老家的记忆",
        status: "draft",
        excerpt: "那个四合院不大，但住着一大家子人，院子里有棵老槐树...",
        date: "2024.3.22",
        participants: 1,
      },
    ],
  },
  {
    chapter: "求学与启蒙",
    num: 2,
    articles: [
      {
        title: "父亲的求学路",
        section: "十里山路上学",
        status: "final",
        excerpt: "十五岁那年，父亲背着一袋干粮，独自踏上了去县城读书的路...",
        date: "2024.3.18",
        participants: 1,
      },
    ],
  },
  {
    chapter: "工作与事业",
    num: 3,
    articles: [
      {
        title: "初入工厂的日子",
        section: "进入工厂",
        status: "draft",
        excerpt: "1978年的秋天，建国第一次走进了县里的机械厂大门...",
        date: "2024.3.20",
        participants: 2,
      },
    ],
  },
  {
    chapter: "婚姻与家庭",
    num: 4,
    articles: [
      {
        title: "与母亲的相识",
        section: "恋爱故事",
        status: "draft",
        excerpt: "那是一个春天的下午，厂里组织联谊活动，建国第一次见到了秀芳...",
        date: "2024.3.22",
        participants: 2,
      },
    ],
  },
];

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "全部" },
  { key: "final", label: "已定稿" },
  { key: "draft", label: "草稿" },
];

function StatusBadge({ status }: { status: "final" | "draft" }) {
  if (status === "final") {
    return (
      <span
        style={{
          padding: "2px 8px",
          borderRadius: 6,
          backgroundColor: "var(--accent-green-light)",
          color: "var(--accent-green)",
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        已定稿
      </span>
    );
  }
  return (
    <span
      style={{
        padding: "2px 8px",
        borderRadius: 6,
        backgroundColor: "var(--accent-coral-light)",
        color: "var(--accent-coral)",
        fontSize: 11,
        fontWeight: 600,
      }}
    >
      草稿
    </span>
  );
}

export default function ArticlesPage() {
  const { isLoggedIn } = useAuth();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredChapters = chapters
    .map((ch) => ({
      ...ch,
      articles:
        filter === "all"
          ? ch.articles
          : ch.articles.filter((a) => a.status === filter),
    }))
    .filter((ch) => ch.articles.length > 0);

  const totalCount = filteredChapters.reduce(
    (sum, ch) => sum + ch.articles.length,
    0
  );

  return (
    <PhoneFrame>
      <StatusBar />

      {!isLoggedIn ? (
        <>
          {/* Header */}
          <div className="shrink-0 font-outfit" style={{ padding: "12px 20px 0" }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>文章</h1>
            <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>共 0 篇文章</p>
          </div>
          {/* Filter tabs */}
          <div className="shrink-0 flex gap-2 font-outfit" style={{ padding: "14px 20px 8px" }}>
            <div style={{ padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500, backgroundColor: "var(--accent-green)", color: "var(--white)" }}>全部</div>
            <div style={{ padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500, backgroundColor: "var(--bg-muted)", color: "var(--text-secondary)" }}>已定稿</div>
            <div style={{ padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 500, backgroundColor: "var(--bg-muted)", color: "var(--text-secondary)" }}>草稿</div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center" style={{ backgroundColor: "var(--bg-page)" }}>
            <EmptyState
              icon={<FileText size={36} style={{ color: "var(--text-tertiary)" }} />}
              title="暂无文章"
              description="完成采访后，选择话题生成文章"
            />
          </div>
        </>
      ) : (
        <>
      {/* Header */}
      <div
        className="shrink-0 font-outfit"
        style={{ padding: "12px 20px 0" }}
      >
        <h1
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 4,
          }}
        >
          文章
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-secondary)" }}>
          共 {totalCount} 篇文章
        </p>
      </div>

      {/* Filter tabs */}
      <div
        className="shrink-0 flex gap-2 font-outfit"
        style={{ padding: "14px 20px 8px" }}
      >
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              style={{
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 13,
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                backgroundColor: isActive
                  ? "var(--accent-green)"
                  : "var(--bg-muted)",
                color: isActive ? "var(--white)" : "var(--text-secondary)",
                transition: "all 0.2s",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Article list grouped by chapter */}
      <div
        className="flex-1 overflow-auto font-outfit"
        style={{ padding: "8px 20px 16px" }}
      >
        {filteredChapters.length === 0 ? (
          <EmptyState
            icon={<FileText size={36} style={{ color: "var(--text-tertiary)" }} />}
            title="暂无文章"
            description="完成采访后，选择话题生成文章"
          />
        ) : (
        filteredChapters.map((ch) => (
          <div key={ch.num} style={{ marginBottom: 20 }}>
            {/* Chapter header */}
            <div
              className="flex items-center gap-2"
              style={{ marginBottom: 10 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: "var(--accent-green)",
                  color: "var(--white)",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {ch.num}
              </div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {ch.chapter}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--text-tertiary)",
                }}
              >
                {ch.articles.length}篇
              </span>
            </div>

            {/* Article cards in chapter */}
            <div className="flex flex-col gap-2.5">
              {ch.articles.map((article, i) => (
                <Link
                  key={i}
                  href={
                    article.status === "final"
                      ? "/article-final"
                      : "/article"
                  }
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderRadius: 14,
                    border: "1px solid var(--border-subtle)",
                    padding: "14px 16px",
                    display: "block",
                  }}
                >
                  {/* Section tag + status */}
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: 8 }}
                  >
                    <div className="flex items-center gap-1.5">
                      <BookOpen
                        size={12}
                        style={{ color: "var(--text-tertiary)" }}
                      />
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--text-tertiary)",
                        }}
                      >
                        {article.section}
                      </span>
                    </div>
                    <StatusBadge status={article.status} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      marginBottom: 8,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {article.date}
                    </span>
                    <div
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        backgroundColor: "var(--text-tertiary)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 12,
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {article.participants}人参与
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))
        )}
      </div>
        </>
      )}

      <TabBar activeTab="articles" />
    </PhoneFrame>
  );
}
