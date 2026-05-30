// app/[lang]/macsnap/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getTranslation } from "@/lib/translations";
import { Check, LayoutPanelLeft, Keyboard, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;

const TITLES: Record<string, string> = {
  ko: "MacSnap - 맥 화면 분할 앱 | Sprout Studio",
  en: "MacSnap - Window Snapping for Mac | Sprout Studio",
  ja: "MacSnap - Mac ウィンドウ分割アプリ | Sprout Studio",
  "zh-CN": "MacSnap - Mac 分屏应用 | Sprout Studio",
  ar: "MacSnap - تطبيق تقسيم الشاشة لـ Mac | Sprout Studio",
  ru: "MacSnap - Разделение экрана для Mac | Sprout Studio",
  it: "MacSnap - App per dividere lo schermo su Mac | Sprout Studio",
  de: "MacSnap - Fenster-Snapping für Mac | Sprout Studio",
  fr: "MacSnap - Application de partage d'écran Mac | Sprout Studio",
  "pt-BR": "MacSnap - Divisão de tela para Mac | Sprout Studio",
  es: "MacSnap - App para dividir pantalla en Mac | Sprout Studio",
};

const DESCS: Record<string, string> = {
  ko: "윈도우처럼 맥 화면을 반반 또는 사분할로 나눠쓰는 앱. 맥북 처음 쓰는 분께 필수.",
  en: "Split your Mac screen just like Windows. Snap windows to halves or corners instantly.",
  ja: "Windowsと同じようにMacの画面を分割。すばやく左右・四隅にスナップ。",
  "zh-CN": "像Windows一样分割Mac屏幕，快速将窗口对齐到左右或四角。",
  ar: "قسّم شاشة Mac تماماً كما في Windows. اجعل النوافذ تلتصق بالأنصاف أو الزوايا.",
  ru: "Разделяйте экран Mac как в Windows. Мгновенно прикрепляйте окна к краям и углам.",
  it: "Dividi lo schermo del Mac come su Windows. Aggancia le finestre a metà o agli angoli.",
  de: "Teile deinen Mac-Bildschirm wie unter Windows. Fenster sofort an Hälften oder Ecken andocken.",
  fr: "Divisez votre écran Mac comme sous Windows. Ancrez les fenêtres en deux ou aux coins.",
  "pt-BR": "Divida a tela do Mac como no Windows. Encaixe janelas em metades ou cantos instantaneamente.",
  es: "Divide la pantalla de tu Mac como en Windows. Ancla ventanas a mitades o esquinas al instante.",
};

const KEYWORDS: Record<string, string> = {
  ko: "맥 화면분할, 맥북 화면 나누기, 맥 윈도우 스냅, MacSnap, 맥스냅",
  en: "mac window snapping, split screen mac, windows snap mac, MacSnap",
  ja: "Mac 画面分割, Macウィンドウスナップ, MacSnap",
  "zh-CN": "Mac分屏, Mac窗口管理, MacSnap",
  ar: "تقسيم شاشة Mac, MacSnap",
  ru: "разделение экрана Mac, MacSnap",
  it: "divisione schermo Mac, MacSnap",
  de: "Mac Bildschirm teilen, MacSnap",
  fr: "partage écran Mac, MacSnap",
  "pt-BR": "dividir tela Mac, MacSnap",
  es: "dividir pantalla Mac, MacSnap",
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
  return {
    title: TITLES[lang] ?? TITLES.en,
    description: DESCS[lang] ?? DESCS.en,
    keywords: KEYWORDS[lang] ?? KEYWORDS.en,
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
      title: TITLES[lang] ?? TITLES.en,
      description: DESCS[lang] ?? DESCS.en,
      url,
      siteName: "Sprout Studio",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: TITLES[lang] ?? TITLES.en,
      description: DESCS[lang] ?? DESCS.en,
    },
    robots: { index: true, follow: true },
  };
}

export default async function MacSnapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(SUPPORTED_LANGS as readonly string[]).includes(lang)) notFound();
  const t = getTranslation(lang);

  return (
    <>
      <SiteNav lang={lang} t={t.nav} />
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            MacSnap
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            {DESCS[lang] ?? DESCS.en}
          </p>
          <a
            href="https://store.sproutstudio.app/checkout/buy/1c83d6e5-c7a6-47fd-9121-fdcc6f33bace"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 bg-cyan-500 hover:bg-cyan-600 text-white")}
          >
            Buy MacSnap — $5
          </a>
        </section>

        {/* YouTube */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="overflow-hidden rounded-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ZikYUn_8DaA"
              title="MacSnap Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { icon: LayoutPanelLeft, text: "Snap to halves & corners" },
                { icon: Keyboard, text: "Keyboard shortcut support" },
                { icon: Globe, text: "11 languages supported" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="rounded-xl border border-border bg-card p-6 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-cyan-500 shrink-0" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-2xl font-bold mb-6">$5 / lifetime</p>
          <a
            href="https://store.sproutstudio.app/checkout/buy/1c83d6e5-c7a6-47fd-9121-fdcc6f33bace"
            className={cn(buttonVariants({ size: "lg" }), "rounded-full px-10 bg-cyan-500 hover:bg-cyan-600 text-white")}
          >
            Buy Now
          </a>
        </section>
      </main>
      <SiteFooter lang={lang} t={t.footer} />
    </>
  );
}
