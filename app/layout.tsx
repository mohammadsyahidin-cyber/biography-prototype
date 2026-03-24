import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "家族传记",
  description: "家族传记协同创作 App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Noto+Serif+SC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="h-full flex items-center justify-center font-outfit">
        {children}
      </body>
    </html>
  );
}
