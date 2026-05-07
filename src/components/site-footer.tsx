import Image from "next/image";
import type { Translation } from "@/lib/translations";

const defaultFooter: Translation["footer"] = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  refund: "Refund Policy",
};

export function SiteFooter({
  lang = "en",
  t = defaultFooter,
}: {
  lang?: string;
  t?: Translation["footer"];
}) {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Image
              src="/images/sprout-studio-logo.png"
              alt="Sprout Studio"
              width={24}
              height={24}
              className="rounded-md"
            />
            Sprout Studio
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href={`/${lang}/privacy`} className="hover:text-foreground transition-colors">
              {t.privacy}
            </a>
            <a href={`/${lang}/terms`} className="hover:text-foreground transition-colors">
              {t.terms}
            </a>
            <a href={`/${lang}/refund`} className="hover:text-foreground transition-colors">
              {t.refund}
            </a>
            <a
              href="mailto:alchemist@sproutstudio.app"
              className="hover:text-foreground transition-colors"
            >
              alchemist@sproutstudio.app
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Sprout Studio. All rights reserved.</span>
          <span>사업자등록번호 659-55-01058</span>
        </div>
      </div>
    </footer>
  );
}
