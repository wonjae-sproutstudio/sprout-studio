import Image from "next/image";
import type { Translation } from "@/lib/translations";

const defaultNav: Translation["nav"] = {
  tagline: "making mac feel like windows.",
  apps: "Apps",
  pricing: "Pricing",
  contact: "Contact",
};

export function SiteNav({
  lang = "en",
  t = defaultNav,
}: {
  lang?: string;
  t?: Translation["nav"];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href={`/${lang}`} className="flex items-center gap-2.5">
          <Image
            src="/images/sprout-studio-logo.png"
            alt="Sprout Studio"
            width={32}
            height={32}
            className="rounded-md"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-semibold tracking-tight text-[16px]">Sprout Studio</span>
            <span className="text-[10px] text-muted-foreground font-normal">{t.tagline}</span>
          </div>
        </a>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href={`/${lang}#apps`} className="hover:text-foreground transition-colors">
            {t.apps}
          </a>
          <a href={`/${lang}#pricing`} className="hover:text-foreground transition-colors">
            {t.pricing}
          </a>
          <a
            href="mailto:alchemist@sproutstudio.app"
            className="hover:text-foreground transition-colors"
          >
            {t.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
