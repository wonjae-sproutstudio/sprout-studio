import Image from "next/image";
import { ScreenshotGallery } from "@/components/screenshot-gallery";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  Sprout,
  LayoutPanelLeft,
  Keyboard,
  Languages,
  Zap,
  ShieldCheck,
  BadgeCheck,
  Star,
  Check,
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────────── */

const macxplorerScreenshots = [
  { src: "/screenshots/01.png", alt: "File browser — Windows Explorer-style two-pane layout", w: 2738, h: 1572 },
  { src: "/screenshots/02.png", alt: "Network drive — connect to SMB server", w: 2738, h: 1572 },
  { src: "/screenshots/04.png", alt: "Context menu — cut, copy, move and more", w: 2738, h: 1572 },
  { src: "/screenshots/03.png", alt: "Settings — theme, start folder, and license", w: 1264, h: 1124 },
  { src: "/screenshots/05.png", alt: "File info — detailed properties panel", w: 1052, h: 1180 },
];

const mactrlScreenshots = [
  { src: "/screenshots/mactrl-01.png", alt: "Menu bar — quick toggle on/off", w: 242, h: 195 },
  { src: "/screenshots/mactrl-02.png", alt: "Settings — whitelist mode with per-app rules", w: 632, h: 703 },
  { src: "/screenshots/mactrl-03.png", alt: "Settings — blacklist mode with per-app rules", w: 588, h: 659 },
];

const features = [
  {
    icon: LayoutPanelLeft,
    title: "Familiar Interface",
    desc: "Windows Explorer-style two-pane layout that feels instantly at home on macOS.",
  },
  {
    icon: Keyboard,
    title: "Smart Key Control",
    desc: "Swap Command and Control on the fly — per-app rules mean no more wrong shortcuts.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    desc: "Fully localized in 10–11 languages so every user gets a native experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Built with native macOS frameworks. Launches instantly, stays out of the way.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Private",
    desc: "No telemetry, no accounts, no subscriptions. Your data stays on your machine.",
  },
  {
    icon: BadgeCheck,
    title: "One-Time Purchase",
    desc: "Pay once and use forever. No recurring fees, ever.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    avatar: "SC",
    quote:
      "MacXplorer finally makes me feel at home on my Mac. Cut & Move alone saved me hours — I can't believe it wasn't built in.",
  },
  {
    name: "Mike Rodriguez",
    role: "Graphic Designer",
    avatar: "MR",
    quote:
      "MaCtrl is a lifesaver. I switch between Windows and Mac every day, and now my muscle memory actually works on both.",
  },
  {
    name: "Alex Thompson",
    role: "Business Analyst",
    avatar: "AT",
    quote:
      "The bundle is a no-brainer at $8. Both apps are polished, lightweight, and just work. Highly recommended for anyone coming from Windows.",
  },
];

const plans = [
  {
    id: "macxplorer",
    name: "MacXplorer",
    price: "$5",
    originalPrice: null,
    badge: null,
    description: "Windows Explorer-style file manager for Mac",
    href: "https://store.sproutstudio.app/buy/cff90b2d-8965-466b-88da-9518e1018438",
    features: [
      "Windows Explorer layout",
      "Cut & Move files natively",
      "SMB network drive support",
      "10 languages",
    ],
    highlighted: false,
  },
  {
    id: "bundle",
    name: "Bundle",
    price: "$8",
    originalPrice: "$10",
    badge: "Best Value",
    description: "MacXplorer + MaCtrl together",
    href: "https://store.sproutstudio.app/buy/9461291a-7754-4a1f-b44a-51b83efc3fe8",
    features: [
      "Everything in MacXplorer",
      "Everything in MaCtrl",
      "Save 20% vs. buying separately",
      "One-time payment",
    ],
    highlighted: true,
  },
  {
    id: "mactrl",
    name: "MaCtrl",
    price: "$5",
    originalPrice: null,
    badge: null,
    description: "Command ↔ Control key swap for Mac",
    href: "https://store.sproutstudio.app/buy/e8470e2d-9d57-4649-9a77-8a73bda5928c",
    features: [
      "Instant key swap toggle",
      "Per-app whitelist / blacklist",
      "Lightweight & native",
      "11 languages",
    ],
    highlighted: false,
  },
];

/* ─── Page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="mx-auto max-w-5xl px-6 py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700 mb-8">
            <Sprout className="h-3.5 w-3.5" />
            Made for Mac
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl leading-tight">
            The comfort of Windows.
            <br />
            <span className="text-green-500">The beauty of macOS.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Two focused apps that bring the best of Windows into macOS —
            without sacrificing the Mac experience you love.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apps"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full px-8"
              )}
            >
              Explore Apps
            </a>
            <a
              href="https://store.sproutstudio.app/buy/9461291a-7754-4a1f-b44a-51b83efc3fe8"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8"
              )}
            >
              Get the Bundle — $8
            </a>
          </div>
        </section>

        {/* ── Apps ── */}
        <section id="apps" className="border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-bold tracking-tight mb-12 text-center">
              Our Apps
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {/* MacXplorer */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 w-full overflow-hidden rounded-xl aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/uR8XNu3sQDY"
                    title="MacXplorer Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/macxplorer.png"
                    alt="MacXplorer"
                    width={36}
                    height={36}
                    className="rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">MacXplorer</h3>
                    <span className="text-xs text-muted-foreground">File Manager · $5</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  The Windows Explorer experience, faithfully rebuilt for Mac.
                  Cut & Move, AirDrop, SMB network drives — everything
                  you&apos;ve been missing.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                  {["Windows Explorer layout", "Cut & Move files", "AirDrop support", "SMB network support", "10 languages"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://store.sproutstudio.app/buy/cff90b2d-8965-466b-88da-9518e1018438"
                  className={cn(
                    buttonVariants(),
                    "rounded-full w-full justify-center bg-green-500 hover:bg-green-600"
                  )}
                >
                  Buy MacXplorer — $5
                </a>
              </div>

              {/* MaCtrl */}
              <div className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <div className="mb-6 w-full overflow-hidden rounded-xl aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/Ns2XWBuxzrA"
                    title="MaCtrl Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src="/images/mactrl.png"
                    alt="MaCtrl"
                    width={36}
                    height={36}
                    className="rounded-xl"
                  />
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">MaCtrl</h3>
                    <span className="text-xs text-muted-foreground">Key Remapper · $5</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Instantly swap Command and Control keys so your Windows
                  muscle memory works on Mac. Set per-app rules to keep
                  the right shortcuts in every app.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                  {["Instant key swap", "Per-app whitelist / blacklist", "Lightweight & native", "11 languages"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://store.sproutstudio.app/buy/e8470e2d-9d57-4649-9a77-8a73bda5928c"
                  className={cn(
                    buttonVariants(),
                    "rounded-full w-full justify-center bg-blue-500 hover:bg-blue-600"
                  )}
                >
                  Buy MaCtrl — $5
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Screenshots ── */}
        <section className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            MacXplorer in Action
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            See the real app before you buy.
          </p>
          <ScreenshotGallery screenshots={macxplorerScreenshots} />
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-14">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            MaCtrl in Action
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Menu bar toggle, whitelist, and blacklist — all in one lightweight app.
          </p>
          <ScreenshotGallery screenshots={mactrlScreenshots} />
        </section>

        {/* ── Features ── */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight mb-3 text-center">
            Why choose Sprout Studio apps?
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Built for people who work across Windows and Mac every day.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-semibold mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="border-t border-border bg-muted/20">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-2xl font-bold tracking-tight mb-12 text-center">
              What users are saying
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight mb-3 text-center">
            Simple, one-time pricing
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Pay once. No subscriptions, no hidden fees.
          </p>
          <div className="grid gap-6 sm:grid-cols-3 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8",
                  plan.highlighted
                    ? "border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/20 scale-[1.02]"
                    : "border-border bg-card"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-green-600 shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3
                  className={cn(
                    "text-lg font-bold mb-1",
                    plan.highlighted ? "text-white" : "text-foreground"
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "text-sm mb-4",
                    plan.highlighted ? "text-green-100" : "text-muted-foreground"
                  )}
                >
                  {plan.description}
                </p>
                <div className="flex items-end gap-2 mb-6">
                  <span
                    className={cn(
                      "text-4xl font-bold tracking-tight",
                      plan.highlighted ? "text-white" : "text-foreground"
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span
                      className={cn(
                        "text-sm line-through mb-1",
                        plan.highlighted ? "text-green-200" : "text-muted-foreground"
                      )}
                    >
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0",
                          plan.highlighted ? "text-green-100" : "text-green-500"
                        )}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-green-50" : "text-muted-foreground"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={cn(
                    "rounded-full w-full justify-center text-center py-2 px-4 text-sm font-medium transition-colors",
                    plan.highlighted
                      ? "bg-white text-green-600 hover:bg-green-50"
                      : cn(buttonVariants({ variant: "outline" }), "rounded-full")
                  )}
                >
                  Buy {plan.name} — {plan.price}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
