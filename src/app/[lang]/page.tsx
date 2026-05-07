import { notFound } from "next/navigation";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!(SUPPORTED_LANGS as readonly string[]).includes(lang)) notFound();
  return (
    <main>
      <p>Hello {lang}</p>
    </main>
  );
}
