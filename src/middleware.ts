import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedLanguages = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
];
const defaultLanguage = "en";
const PREFERRED_LANG_COOKIE = "PREFERRED_LANG";

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, qParam] = part.trim().split(";");
      const q = qParam ? parseFloat(qParam.split("=")[1] ?? "1") : 1.0;
      return { tag: tag.trim(), q: isNaN(q) ? 1.0 : q };
    })
    .sort((a, b) => b.q - a.q)
    .map(({ tag }) => tag);
}

function matchLanguage(tags: string[]): string {
  for (const tag of tags) {
    const lower = tag.toLowerCase();
    const exact = supportedLanguages.find((s) => s.toLowerCase() === lower);
    if (exact) return exact;
    const primary = lower.split("-")[0];
    const prefix = supportedLanguages.find(
      (s) => s.toLowerCase().split("-")[0] === primary
    );
    if (prefix) return prefix;
  }
  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /{lang} 또는 /{lang}/... 경로에 이미 있으면 쿠키를 갱신하고 통과
  const pathLang = supportedLanguages.find(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );
  if (pathLang) {
    const response = NextResponse.next();
    response.cookies.set(PREFERRED_LANG_COOKIE, pathLang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1년
      sameSite: "lax",
    });
    return response;
  }

  // 언어 결정: 쿠키 → Accept-Language (q-value) → 기본값
  const cookieLang = request.cookies.get(PREFERRED_LANG_COOKIE)?.value;
  const lang =
    cookieLang && supportedLanguages.includes(cookieLang)
      ? cookieLang
      : (() => {
          const header = request.headers.get("accept-language") ?? "";
          return header
            ? matchLanguage(parseAcceptLanguage(header))
            : defaultLanguage;
        })();

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon\\.ico|icon\\.png|sitemap\\.xml|robots\\.txt|images|screenshots).*)",
  ],
};
