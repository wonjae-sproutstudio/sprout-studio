import Image from "next/image";

export function SiteFooter() {
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
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/refund"
              className="hover:text-foreground transition-colors"
            >
              Refund Policy
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
