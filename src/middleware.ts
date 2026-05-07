import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED_LANGS = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

const DEFAULT_LANG: Lang = "en";
const COOKIE_NAME = "PREFERRED_LANG";

function detectLang(request: NextRequest): Lang {
  // 1. PREFERRED_LANG 쿠키 우선 적용
  const cookieLang = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLang && (SUPPORTED_LANGS as readonly string[]).includes(cookieLang)) {
    return cookieLang as Lang;
  }

  // 2. Accept-Language 헤더를 q-value 기준으로 파싱
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return DEFAULT_LANG;

  const entries = acceptLang
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      return { tag: tag.trim(), q: qPart ? parseFloat(qPart) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of entries) {
    // 정확히 일치 (e.g. "zh-CN", "pt-BR")
    if ((SUPPORTED_LANGS as readonly string[]).includes(tag)) return tag as Lang;
    // 기본 언어 코드로 매칭 (e.g. "en-US" → "en", "zh-TW" → "zh-CN")
    const prefix = tag.split("-")[0];
    const found = SUPPORTED_LANGS.find(
      (l) => l === prefix || l.startsWith(prefix + "-")
    );
    if (found) return found;
  }

  return DEFAULT_LANG;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /{lang} 경로인지 확인
  const currentLang = SUPPORTED_LANGS.find(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  );

  if (currentLang) {
    // 쿠키가 이미 같은 값이면 pass-through
    if (request.cookies.get(COOKIE_NAME)?.value === currentLang) {
      return NextResponse.next();
    }
    // /{lang} 경로 진입 시 쿠키에 저장
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, currentLang, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1년
      sameSite: "lax",
    });
    return response;
  }

  // lang 없는 경로 → 감지된 언어로 리디렉션
  const lang = detectLang(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${lang}` : `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|mp4|mp3|pdf)).*)",
  ],
};
