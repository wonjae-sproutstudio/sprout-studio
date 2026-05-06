import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service — Sprout Studio",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: September 15, 2025 · These terms apply to sproutstudio.app and related apps/services.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-base font-semibold mb-3">1) Definitions</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><span className="text-foreground font-medium">Company:</span> Sprout Studio (Business Registration No. 659-55-01058)</li>
                <li><span className="text-foreground font-medium">Payment Processor:</span> Lemon Squeezy (Merchant of Record)</li>
                <li><span className="text-foreground font-medium">License:</span> The right to use our software granted for personal use by a single user</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">2) Eligibility and Accounts</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>You must be at least 14 years old to use our services.</li>
                <li>You are responsible for providing accurate and up-to-date information.</li>
                <li>You are responsible for maintaining the security of your account and for any unauthorized use.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">3) Orders, Delivery, and Taxes</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Upon purchase, your product is delivered as a license key or account entitlement.</li>
                <li>Taxes are calculated based on your billing address and processed by Lemon Squeezy as Merchant of Record.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">4) License Grant</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sprout Studio grants you a <span className="text-foreground font-medium">personal, revocable, limited, non-exclusive, and non-transferable</span> license to use the software, subject to your compliance with these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">5) Permitted Use and Restrictions</h2>
              <p className="text-sm text-muted-foreground mb-2">The following actions are prohibited:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Reverse engineering, decompiling, or disassembling the software</li>
                <li>Circumventing DRM or other technical protection measures</li>
                <li>Unauthorized copying, modification, redistribution, or resale</li>
                <li>Sublicensing or transferring your license to another party</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">6) Third-Party Services and Open Source</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The software may include third-party services and open-source components. Their respective terms and open-source licenses apply separately.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">7) Updates and Beta</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>We will provide 7–30 days&apos; advance notice for significant changes.</li>
                <li>Beta features are provided &ldquo;AS IS&rdquo; without any quality guarantees.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">8) Feedback</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By submitting ideas, suggestions, or feedback, you grant Sprout Studio a royalty-free license to use them without any obligation to compensate you.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">9) Privacy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please refer to our{" "}
                <a href="/privacy" className="font-medium text-foreground underline underline-offset-4">
                  Privacy Policy
                </a>{" "}
                for information on how we collect and process personal data.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">10) Suspension and Termination</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>We may suspend or terminate your access without prior notice if you breach these Terms.</li>
                <li>Upon termination, you must immediately remove the software from all your devices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">11) Warranty Disclaimer</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The software is provided <span className="text-foreground font-medium">&ldquo;AS IS.&rdquo;</span> Sprout Studio makes no express or implied warranties regarding uninterrupted operation, error-free performance, or fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">12) Limitation of Liability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Sprout Studio is not liable for indirect losses, lost profits, or data loss.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our maximum liability is limited to the greater of the amount you paid in the 12 months preceding the claim or USD 100.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">13) Indemnification</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Users who use the software for business purposes agree to indemnify Sprout Studio against any damages arising from their breach of these Terms or use of the services.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">14) Governing Law and Disputes</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li><span className="text-foreground font-medium">Governing Law:</span> Republic of Korea</li>
                <li><span className="text-foreground font-medium">Jurisdiction:</span> Consumers — courts as determined by applicable consumer protection law; B2B — courts located in Seoul, Korea</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold mb-3">15) General</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Rights and obligations under these Terms may not be assigned.</li>
                <li>These Terms constitute the entire agreement between you and Sprout Studio regarding use of the services.</li>
                <li>If any provision is found invalid, the remaining provisions remain in full effect.</li>
              </ul>
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
