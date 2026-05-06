import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Sprout Studio",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Effective: September 15, 2025 · Last updated: September 15, 2025
            <br />
            This policy applies to sproutstudio.app and related apps/services, and primarily complies with Korea&apos;s Personal Information Protection Act (PIPA).
          </p>

          {/* Controller */}
          <div className="mb-10 rounded-xl border border-border bg-muted/30 p-6 space-y-1 text-sm">
            <p className="font-semibold text-foreground mb-2">Data Controller</p>
            <p className="text-muted-foreground"><span className="text-foreground font-medium">Company:</span> Sprout Studio</p>
            <p className="text-muted-foreground"><span className="text-foreground font-medium">Business Registration:</span> 659-55-01058</p>
            <p className="text-muted-foreground"><span className="text-foreground font-medium">Address:</span> 299 Sanbonro, Gunpo-si, Gyeonggi-do, Korea, 208-606</p>
            <p className="text-muted-foreground"><span className="text-foreground font-medium">Email:</span>{" "}
              <a href="mailto:alchemist@sproutstudio.app" className="underline underline-offset-4 hover:text-foreground">
                alchemist@sproutstudio.app
              </a>
            </p>
            <p className="text-muted-foreground"><span className="text-foreground font-medium">Privacy Officer:</span> Wonjae Kim / CEO / +82 10-8434-0316</p>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-base font-semibold mb-3">1) Data We Collect and Why</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Account Identifiers</p>
                  <p className="text-muted-foreground mb-1">Email address, password hash, nickname</p>
                  <p className="text-muted-foreground">Retained for contract fulfillment and fraud prevention — until account deletion or the legally required retention period.</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Payment / Purchase Information</p>
                  <p className="text-muted-foreground mb-1">Order number, license key, amount</p>
                  <p className="text-muted-foreground">Retained to fulfill legal obligations (e.g., tax records).</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Support Records</p>
                  <p className="text-muted-foreground">Retained for 3 years after dispute resolution, based on legitimate interest (quality and security).</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Service Usage Data</p>
                  <p className="text-muted-foreground mb-1">Device info, IP address, cookies</p>
                  <p className="text-muted-foreground">Retained for up to 24 months for security and license verification purposes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">2) How We Collect Data</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Directly provided during sign-up, purchase, or support requests</li>
                <li>Automatically collected during use of our services</li>
                <li>Received from our payment processor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">3) Sharing with Third Parties</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only share personal information with third parties to the extent permitted by law. We do not sell or share your data for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">4) Sub-Processors</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><span className="text-foreground font-medium">Vercel, Inc.</span> — Hosting</li>
                <li><span className="text-foreground font-medium">Cloudflare, Inc.</span> — CDN / Security</li>
                <li><span className="text-foreground font-medium">Lemon Squeezy, LLC</span> — Payments / License management</li>
                <li>Optional analytics tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">5) International Transfers</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your data may be transferred internationally for hosting, payment, and support purposes. We will provide prior notice when such transfers occur.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">6) Retention and Deletion</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We delete your data without delay once the purpose of collection has been fulfilled. Data required by law is retained for the applicable period before deletion.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">7) Your Rights</h2>
              <p className="text-sm text-muted-foreground mb-2">
                Subject to applicable legal limitations, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:alchemist@sproutstudio.app" className="font-medium text-foreground underline underline-offset-4">
                  alchemist@sproutstudio.app
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">8) Children&apos;s Privacy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not knowingly collect personal information from children under the age of 14.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">9) Security</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>TLS encryption</li>
                <li>Access controls</li>
                <li>Security monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">10) Cookies and Similar Technologies</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use essential cookies required for the service and optional analytics/marketing cookies. Optional cookies are collected only with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">11) Domestic Representative</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A domestic representative is designated and disclosed as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">12) Automated Decision-Making</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not engage in purely automated decision-making that produces legal or similarly significant effects.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">13) Changes to This Policy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We will provide at least 30 days&apos; notice before material changes take effect.
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
                <p>Privacy Officer: Wonjae Kim / CEO / +82 10-8434-0316</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
