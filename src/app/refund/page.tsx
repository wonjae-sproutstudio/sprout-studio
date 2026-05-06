import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Refund Policy — Sprout Studio",
};

export default function RefundPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: September 15, 2025
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-base font-semibold mb-3">1) Scope and Definitions</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This policy applies to licenses and digital products purchased directly from sproutstudio.app or authorized resellers (e.g., Lemon Squeezy). It covers initial purchases, upgrades, and renewals.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">2) Refund Window</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Standard Window</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Refund requests made within <span className="text-foreground font-medium">14 days of purchase</span> are generally eligible. Requests prior to activation or with minimal usage are prioritized.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Defective / Non-Conforming Products</p>
                  <p className="text-muted-foreground leading-relaxed">
                    If a significant defect is confirmed, we will offer a repair, replacement, or refund regardless of the standard window.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">3) Eligibility and Evidence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                We may request reasonable evidence to process your refund, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Order email and order number</li>
                <li>License key</li>
                <li>OS and app version</li>
                <li>Error logs and steps to reproduce</li>
                <li>A short screen recording (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">4) License Activation and Fair Use</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Refunds may be limited in the following cases:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Evidence of substantial use</li>
                <li>Abnormal license activation patterns detected</li>
                <li>Requests made after completing time-sensitive work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">5) How to Request a Refund</h2>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                <li>
                  Email{" "}
                  <a href="mailto:alchemist@sproutstudio.app" className="font-medium text-foreground underline underline-offset-4">
                    alchemist@sproutstudio.app
                  </a>{" "}
                  with your order email and order number.
                </li>
                <li>We will verify your order and deactivate the associated license.</li>
                <li>The refund will be returned to your original payment method within <span className="text-foreground font-medium">5–10 business days</span>.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">6) Exclusions and Limitations</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Bundles, enterprise volume purchases, and custom builds may be subject to partial refunds or excluded entirely.</li>
                <li>Refunds are not issued in cases of clear abuse, including chargebacks, piracy, or unauthorized distribution.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">7) Currency, Exchange Rates, and Fees</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Refunds are processed to your original payment method. Exchange rates and payment fees are subject to your payment provider&apos;s policies. Filing a chargeback may delay or forfeit your refund.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">8) Regional Provisions</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Korea (KR)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A 7-day right of withdrawal is guaranteed from the date of receipt. This right may be limited for digital content once use has begun.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">EEA / UK</p>
                  <p className="text-muted-foreground leading-relaxed">
                    A 14-day right of withdrawal applies under distance selling regulations. This right may be limited once supply has commenced.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">California (CPRA)</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Privacy-related rights are governed by our{" "}
                    <a href="/privacy" className="font-medium text-foreground underline underline-offset-4">
                      Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">9) Policy Changes</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We will provide <span className="text-foreground font-medium">7 days&apos;</span> notice for standard changes and <span className="text-foreground font-medium">30 days&apos;</span> notice for material changes before updates take effect.
              </p>
            </section>

            <section className="border-t border-border pt-8">
              <h2 className="text-base font-semibold mb-3">Contact</h2>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium text-foreground">Sprout Studio</span></p>
                <p>Business Registration No. 659-55-01058</p>
                <p>299 Sanbonro, Gunpo-si, Gyeonggi-do, Korea, 208-606</p>
                <p>
                  Email:{" "}
                  <a href="mailto:alchemist@sproutstudio.app" className="font-medium text-foreground underline underline-offset-4">
                    alchemist@sproutstudio.app
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
