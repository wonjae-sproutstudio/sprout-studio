import { notFound } from "next/navigation";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(SUPPORTED_LANGS as readonly string[]).includes(lang)) notFound();
  return <>{children}</>;
}
