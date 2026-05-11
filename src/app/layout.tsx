import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://sproutstudio.app/#website",
      url: "https://sproutstudio.app/",
      name: "Sprout Studio",
      description: "MacXplorer & MaCtrl - Essential Mac utilities by Sprout Studio",
      inLanguage: ["ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sproutstudio.app/#macxplorer",
      name: "MacXplorer",
      alternateName: ["Mac Explorer", "맥 익스플로러", "Mac文件管理器", "mac explorer"],
      description:
        "Windows Explorer-style file manager for Mac. Browse files with a familiar interface. Essential app for new MacBook users switching from Windows.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: "https://sproutstudio.app/en",
      image: "https://sproutstudio.app/images/macxplorericon.png",
      publisher: { "@type": "Organization", name: "Sprout Studio", url: "https://sproutstudio.app" },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://sproutstudio.app/#mactrl",
      name: "MaCtrl",
      alternateName: ["맥컨트롤", "Mac Control", "Command Control Swap", "맥 단축키"],
      description:
        "Swap Command and Control keys on Mac. Perfect for MacBook beginners switching from Windows.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "macOS",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      url: "https://sproutstudio.app/en",
      image: "https://sproutstudio.app/images/macctrlicon.png",
      publisher: { "@type": "Organization", name: "Sprout Studio", url: "https://sproutstudio.app" },
    },
    {
      "@type": "Organization",
      "@id": "https://sproutstudio.app/#organization",
      name: "Sprout Studio",
      url: "https://sproutstudio.app",
      logo: "https://sproutstudio.app/images/sproutstudiologo.png",
    },
  ],
};

export const metadata: Metadata = {
  title: "Sprout Studio — Powerful Apps for Mac",
  description:
    "Sprout Studio crafts powerful, focused Mac apps. Explore MacXplorer and MaCtrl.",
  metadataBase: new URL("https://sproutstudio.app"),
  alternates: {
    languages: {
      ko: "https://sproutstudio.app/ko",
      en: "https://sproutstudio.app/en",
      ja: "https://sproutstudio.app/ja",
      "zh-CN": "https://sproutstudio.app/zh-CN",
      ar: "https://sproutstudio.app/ar",
      ru: "https://sproutstudio.app/ru",
      it: "https://sproutstudio.app/it",
      de: "https://sproutstudio.app/de",
      fr: "https://sproutstudio.app/fr",
      "pt-BR": "https://sproutstudio.app/pt-BR",
      es: "https://sproutstudio.app/es",
      "x-default": "https://sproutstudio.app/en",
    },
  },
  verification: {
    other: {
      "naver-site-verification": "67eedda2d42dfb004c63008986c8a8b806da0ff6",
      // Baidu: https://ziyuan.baidu.com 에서 발급 후 아래 주석 해제
      // "baidu-site-verification": "REPLACE_WITH_BAIDU_CODE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
