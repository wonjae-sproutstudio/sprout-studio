import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getTranslation } from "@/lib/translations";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutPanelLeft, Keyboard, Languages } from "lucide-react";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;

const PURCHASE_URL =
  "https://store.sproutstudio.app/checkout/buy/1c83d6e5-c7a6-47fd-9121-fdcc6f33bace";

const FEATURE_ICONS = [LayoutPanelLeft, Keyboard, Languages];

type MacSnapT = {
  title: string;
  description: string;
  keywords: string;
  heroTagline: string;
  features: string[];
  cta: string;
  lifetime: string;
};

const MACSNAP_T: Record<string, MacSnapT> = {
  ko: {
    title: "MacSnap - 맥 화면 분할 앱 | Sprout Studio",
    description: "윈도우처럼 맥 화면을 반반 또는 사분할로 나눠쓰는 앱. 맥북 처음 쓰는 분께 필수.",
    keywords: "맥 화면분할, 맥북 화면 나누기, 맥 윈도우 스냅, 맥 분할화면 앱, MacSnap, 맥스냅",
    heroTagline: "윈도우 스냅 · $5",
    features: ["화면 절반 / 사분할 스냅", "단축키 지원", "11개 언어 지원"],
    cta: "MacSnap 구매하기 — $5",
    lifetime: "일회 결제, 평생 사용",
  },
  en: {
    title: "MacSnap - Window Snapping for Mac | Sprout Studio",
    description: "Split your Mac screen just like Windows. Snap windows to halves or corners instantly.",
    keywords: "mac window snapping, split screen mac, windows snap mac, mac screen split app, MacSnap",
    heroTagline: "Window Snapper · $5",
    features: ["Snap to halves & corners", "Keyboard shortcut support", "11 languages"],
    cta: "Buy MacSnap — $5",
    lifetime: "one-time purchase",
  },
  ja: {
    title: "MacSnap - Mac ウィンドウ分割アプリ | Sprout Studio",
    description: "Windowsと同じようにMacの画面を分割。すばやく左右・四隅にスナップ。",
    keywords: "Mac 画面分割, Macウィンドウスナップ, MacSnap",
    heroTagline: "ウィンドウスナップ · $5",
    features: ["左右・四隅にスナップ", "キーボードショートカット対応", "11言語対応"],
    cta: "MacSnapを購入 — $5",
    lifetime: "買い切り",
  },
  "zh-CN": {
    title: "MacSnap - Mac 分屏应用 | Sprout Studio",
    description: "像Windows一样分割Mac屏幕，快速将窗口对齐到左右或四角。",
    keywords: "Mac分屏, Mac窗口管理, MacSnap",
    heroTagline: "窗口对齐 · $5",
    features: ["贴靠到半屏/四角", "键盘快捷键支持", "支持11种语言"],
    cta: "购买MacSnap — $5",
    lifetime: "一次购买，永久使用",
  },
  ar: {
    title: "MacSnap - تطبيق تقسيم الشاشة لـ Mac | Sprout Studio",
    description: "قسّم شاشة Mac تماماً كما في Windows. اجعل النوافذ تلتصق بالأنصاف أو الزوايا.",
    keywords: "تقسيم شاشة Mac, MacSnap",
    heroTagline: "محاذاة النوافذ · $5",
    features: ["تثبيت النصف والزوايا", "دعم اختصارات لوحة المفاتيح", "11 لغة"],
    cta: "اشترِ MacSnap — $5",
    lifetime: "دفعة واحدة، استخدام مدى الحياة",
  },
  ru: {
    title: "MacSnap - Разделение экрана для Mac | Sprout Studio",
    description: "Разделяйте экран Mac как в Windows. Мгновенно прикрепляйте окна к краям и углам.",
    keywords: "разделение экрана Mac, MacSnap",
    heroTagline: "Привязка окон · $5",
    features: ["Привязка к краям и углам", "Поддержка горячих клавиш", "11 языков"],
    cta: "Купить MacSnap — $5",
    lifetime: "разовая покупка",
  },
  it: {
    title: "MacSnap - App per dividere lo schermo su Mac | Sprout Studio",
    description: "Dividi lo schermo del Mac come su Windows. Aggancia le finestre a metà o agli angoli.",
    keywords: "divisione schermo Mac, MacSnap",
    heroTagline: "Snap finestre · $5",
    features: ["Aggancia a metà e agli angoli", "Supporto scorciatoie tastiera", "11 lingue"],
    cta: "Acquista MacSnap — $5",
    lifetime: "acquisto unico",
  },
  de: {
    title: "MacSnap - Fenster-Snapping für Mac | Sprout Studio",
    description: "Teile deinen Mac-Bildschirm wie unter Windows. Fenster sofort an Hälften oder Ecken andocken.",
    keywords: "Mac Bildschirm teilen, MacSnap",
    heroTagline: "Fenster-Snap · $5",
    features: ["Andocken an Hälften & Ecken", "Tastaturkürzel-Unterstützung", "11 Sprachen"],
    cta: "MacSnap kaufen — $5",
    lifetime: "Einmalkauf",
  },
  fr: {
    title: "MacSnap - Application de partage d'écran Mac | Sprout Studio",
    description: "Divisez votre écran Mac comme sous Windows. Ancrez les fenêtres en deux ou aux coins.",
    keywords: "partage écran Mac, MacSnap",
    heroTagline: "Snap de fenêtres · $5",
    features: ["Ancrer en moitiés et aux coins", "Support des raccourcis clavier", "11 langues"],
    cta: "Acheter MacSnap — $5",
    lifetime: "achat unique",
  },
  "pt-BR": {
    title: "MacSnap - Divisão de tela para Mac | Sprout Studio",
    description: "Divida a tela do Mac como no Windows. Encaixe janelas em metades ou cantos instantaneamente.",
    keywords: "dividir tela Mac, MacSnap",
    heroTagline: "Snap de janelas · $5",
    features: ["Encaixe em metades e cantos", "Suporte a atalhos de teclado", "11 idiomas"],
    cta: "Comprar MacSnap — $5",
    lifetime: "pagamento único",
  },
  es: {
    title: "MacSnap - App para dividir pantalla en Mac | Sprout Studio",
    description: "Divide la pantalla de tu Mac como en Windows. Ancla ventanas a mitades o esquinas al instante.",
    keywords: "dividir pantalla Mac, MacSnap",
    heroTagline: "Snap de ventanas · $5",
    features: ["Fijar en mitades y esquinas", "Soporte de atajos de teclado", "11 idiomas"],
    cta: "Comprar MacSnap — $5",
    lifetime: "compra única",
  },
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

  const t = MACSNAP_T[lang] ?? MACSNAP_T.en;
  const url = `https://sproutstudio.app/${lang}/macsnap`;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
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
      title: t.title,
      description: t.description,
      url,
      siteName: "Sprout Studio",
      type: "website",
      images: [{ url: "https://sproutstudio.app/images/og.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
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

  const t = MACSNAP_T[lang] ?? MACSNAP_T.en;
  const g = getTranslation(lang);

  return (
    <>
      <SiteNav lang={lang} t={g.nav} />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Image
            src="/images/macsnap.png"
            alt="MacSnap"
            width={80}
            height={80}
            className="rounded-2xl mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-3">MacSnap</h1>
          <p className="text-sm text-muted-foreground mb-4">{t.heroTagline}</p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            {t.description}
          </p>
          <a
            href={PURCHASE_URL}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 bg-cyan-500 hover:bg-cyan-600"
            )}
          >
            {t.cta}
          </a>
          <p className="mt-3 text-xs text-muted-foreground">{t.lifetime}</p>
        </section>

        {/* ── YouTube ── */}
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="overflow-hidden rounded-2xl border border-border aspect-video">
            <iframe
              src="https://www.youtube.com/embed/ZikYUn_8DaA"
              title="MacSnap Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* ── Features ── */}
        <section className="border-t border-border bg-muted/20">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <div className="grid gap-6 sm:grid-cols-3">
              {t.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <div
                    key={feature}
                    className="rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Icon className="h-5 w-5 text-cyan-500" />
                    </div>
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-4xl font-bold tracking-tight mb-1">$5</p>
          <p className="text-sm text-muted-foreground mb-8">{t.lifetime}</p>
          <a
            href={PURCHASE_URL}
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-10 bg-cyan-500 hover:bg-cyan-600"
            )}
          >
            {t.cta}
          </a>
        </section>
      </main>

      <SiteFooter lang={lang} t={g.footer} />
    </>
  );
}
