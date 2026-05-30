import { notFound } from "next/navigation";
import type { Metadata } from "next";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;

const KEYWORDS: Partial<Record<string, string>> = {
  ko: "맥 화면분할, 맥 윈도우 스냅, 맥북 화면분할 앱, 윈도우처럼 화면나누기, MacSnap",
  en: "mac window snapping, screen split mac, windows snap mac, mac window manager, MacSnap",
  ja: "Mac 画面分割, Macウィンドウスナップ, MacSnap",
  "zh-CN": "Mac 分屏, Mac窗口管理, MacSnap",
};

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!(SUPPORTED_LANGS as readonly string[]).includes(lang)) notFound();

  const url = `https://sproutstudio.app/${lang}/macsnap`;
  const title = "MacSnap - Windows-style Window Snapping for Mac | Sprout Studio";
  const description =
    "Split your screen just like Windows. MacSnap brings familiar window snapping to macOS — snap left, right, corners with one click.";

  return {
    title,
    description,
    keywords: KEYWORDS[lang],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          SUPPORTED_LANGS.map((l) => [l, `https://sproutstudio.app/${l}/macsnap`])
        ),
        "x-default": "https://sproutstudio.app/en/macsnap",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Sprout Studio",
      type: "website",
      images: [{ url: "https://sproutstudio.app/images/og.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://sproutstudio.app/images/og.png"],
    },
  };
}

export default async function MacSnapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(SUPPORTED_LANGS as readonly string[]).includes(lang)) notFound();

  return (
    <main>
      <h1>MacSnap</h1>
    </main>
  );
}
