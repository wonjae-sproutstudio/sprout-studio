import type { MetadataRoute } from "next";

const BASE_URL = "https://sproutstudio.app";

const languages = [
  "ko", "en", "ja", "zh-CN", "ar", "ru", "it", "de", "fr", "pt-BR", "es",
];

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/",        changeFrequency: "weekly",  priority: 1.0 },
  { path: "/about",   changeFrequency: "monthly", priority: 0.8 },
  { path: "/macsnap", changeFrequency: "weekly",  priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly",  priority: 0.5 },
  { path: "/terms",   changeFrequency: "yearly",  priority: 0.5 },
  { path: "/refund",  changeFrequency: "yearly",  priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    routes.map(({ path, changeFrequency, priority }) => {
      const localizedPath = path === "/" ? `/${lang}` : `/${lang}${path}`;

      const languageAlternates = Object.fromEntries(
        languages.map((l) => [
          l,
          `${BASE_URL}${path === "/" ? `/${l}` : `/${l}${path}`}`,
        ])
      );

      return {
        url: `${BASE_URL}${localizedPath}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: languageAlternates,
        },
      };
    })
  );
}
