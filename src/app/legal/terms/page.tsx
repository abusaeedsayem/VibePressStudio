import { Badge } from "@/components/ui/badge";
import { FileText, Mail, Globe, Scale, Cpu, Database, ShieldAlert, AlertTriangle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Terms of Use | VibePress Studio",
  description: "Official Terms of Use governing access to VibePress Studio portal, software tools, open-source distributions, and digital assets.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-14 md:py-20 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30">
            <Scale className="w-3.5 h-3.5 mr-1.5 inline" /> Legal Agreement &amp; Operating Terms
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 max-w-4xl mx-auto">
            VibePress Studio: Official Terms of Use
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground font-medium">
            <span>Effective Date: September 2026</span>
            <span>•</span>
            <span>Last Updated: September 2026</span>
            <span>•</span>
            <a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" /> vibepressstudio.vercel.app
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full text-foreground space-y-12">
        {/* Support Strip */}
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Official Communications &amp; Support</div>
              <a href="mailto:VibePress.Studio@Proton.me" className="text-sm font-semibold text-primary hover:underline">
                VibePress.Studio@Proton.me
              </a>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs font-mono">
            Legal Desk &amp; Compliance Inquiries
          </Badge>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Use (&quot;Terms&quot;) constitute a legally binding agreement between you (whether an individual user, open-source developer, content publisher, agency, or corporate enterprise) and VibePress Studio (referred to herein as &quot;VibePress Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), designed, engineered, and maintained by Developer &amp; Architect Abu Saeed Sayem.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These Terms govern your access to and utilization of our official web portal (<a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline">https://vibepressstudio.vercel.app</a>), our open-source software distributions, digital utilities, technical documentation, and customer communications. By accessing our website, compiling our source code, or utilizing our software assets, you certify that you have read, understood, and agreed to be legally bound by these Terms. If you do not agree to these Terms in their entirety, you are expressly prohibited from using our website, software tools, and digital resources.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            2. Software Portfolio and Release Specifications
          </h2>

          {/* 2.1 */}
          <div className="space-y-3 bg-muted/30 border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" /> 2.1. Smart Affiliate Link Cloaker (WordPress Plugin)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart Affiliate Link Cloaker is an engineered WordPress performance plugin designed to handle URL redirection, automated FTC disclosure injections, and link management.
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground pt-2">
              <li>
                <strong className="text-foreground">Distribution Model:</strong> Smart Affiliate Link Cloaker is distributed 100% free of charge via the official WordPress.org Plugin Repository. VibePress Studio does not currently sell, license for payment, or gate any modules of this plugin behind commercial paywalls.
              </li>
              <li>
                <strong className="text-foreground">Open-Source Licensing:</strong> The core software code of Smart Affiliate Link Cloaker is released under the GNU General Public License version 2.0 (GPLv2) or later. You are authorized to install, modify, audit, and redistribute the codebase under the reciprocal legal terms of the GPLv2 license.
              </li>
              <li>
                <strong className="text-foreground">Compliance Responsibility:</strong> While the plugin integrates automated regulatory disclosure injectors, you acknowledge that advertising compliance regulations (including United States Federal Trade Commission mandates and international consumer disclosures) vary by jurisdiction. You remain exclusively responsible for verifying that your deployed disclosures, cloaked paths, and commercial links comply with all applicable regional laws and third-party merchant operating agreements.
              </li>
            </ul>
          </div>

          {/* 2.2 */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              2.2. Future Software and Digital Releases
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              VibePress Studio actively designs and engineers experimental and commercial software systems. We reserve the uninhibited right to introduce, deploy, deprecate, or distribute new WordPress plugins, native desktop systems, developer command-line interfaces, or digital utilities in the future under either open-source licenses or commercial end-user licensing models. Any future tool or service deployed by VibePress Studio will automatically fall under the governance of these Terms, unless accompanied by an explicit standalone software license agreement.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            3. Intellectual Property Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Unless otherwise explicitly designated under an open-source license (such as the GPLv2 governing Smart Affiliate Link Cloaker):
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>
              All visual design assets, user interfaces, branding graphics, logos, website copy, documentation texts, technical blueprints, and proprietary desktop binaries appearing on <a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline">https://vibepressstudio.vercel.app</a> are the exclusive property of Developer &amp; Architect Abu Saeed Sayem and VibePress Studio.
            </li>
            <li>
              &quot;VibePress Studio&quot;, the VibePress Studio audio-wave and circuit logo, and associated taglines are protected studio identifiers. You may not use our brand marks, logos, or commercial identity in any manner that falsely implies endorsement, sponsorship, or affiliation without our prior written authorization.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            4. User Conduct and Permissible Use
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When accessing our web portal, downloading our tools, or deploying software released by VibePress Studio, you explicitly agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>
              Deploy our WordPress plugins, redirection utilities, or digital tools for deceptive, fraudulent, or malicious purposes, including link cloaking for malware delivery, phishing operations, or scam networks.
            </li>
            <li>
              Interfere with, compromise, or disrupt the technical integrity, hosting environment, or availability of our web portal (<a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline">https://vibepressstudio.vercel.app</a>).
            </li>
            <li>
              Scrape, reverse engineer, or misrepresent documentation or unreleased software architectures published on our website.
            </li>
            <li>
              Misrepresent your affiliation with VibePress Studio or Developer &amp; Architect Abu Saeed Sayem.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            5. Technical Support and Engineering Commitments
          </h2>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>
              <strong className="text-foreground">Free Open-Source Software Support:</strong> For tools distributed freely on WordPress.org, community support is provided on an as-available, best-effort basis via the official WordPress.org community support forums. VibePress Studio does not guarantee real-time ticketing, custom development, or dedicated SLAs for freely distributed community software.
            </li>
            <li>
              <strong className="text-foreground">Direct Technical Inquiries:</strong> Inquiries routed to <a href="mailto:VibePress.Studio@Proton.me" className="text-primary hover:underline font-semibold">VibePress.Studio@Proton.me</a> regarding software architecture, reporting of critical security vulnerabilities, or general questions are handled during standard studio operating windows (Monday through Friday), typically receiving a response within 24 to 48 business hours.
            </li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            6. Disclaimer of Warranties (&quot;As-Is&quot; and &quot;As-Available&quot;)
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted under applicable law:
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>
              The website, technical documentation, architectural specifications, and all software distributed by VibePress Studio are provided strictly on an <strong className="text-foreground">&quot;AS-IS&quot;</strong> and <strong className="text-foreground">&quot;AS-AVAILABLE&quot;</strong> basis, with all faults and without warranties of any kind, whether express, implied, statutory, or otherwise.
            </li>
            <li>
              VibePress Studio and Developer &amp; Architect Abu Saeed Sayem expressly disclaim all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, system integration, and uninterrupted or error-free operation.
            </li>
            <li>
              We make no guarantee that our software will be completely compatible with all third-party hosting configurations, unmaintained WordPress environments, third-party plugins, or obsolete hardware peripherals. You assume all risk and responsibility for the deployment, configuration, and operation of our tools.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            7. Affiliate and Merchant Earnings Disclaimer
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Smart Affiliate Link Cloaker provides software infrastructure for link routing, slug cloaking, and compliance injection.
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>
              VibePress Studio and Abu Saeed Sayem make no representations, warranties, or guarantees regarding affiliate program approval, conversion rates, click-through volumes, or commission earnings.
            </li>
            <li>
              You are solely responsible for ensuring that the cloaking or redirection of affiliate links complies with the specific Operating Agreements, Terms of Service, and program rules of your respective merchant partners, affiliate networks, and platforms (including, but not limited to, Amazon Associates guidelines regarding link redirection and offline usage).
            </li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            8. Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by applicable law, in no event shall VibePress Studio, its founder, Developer &amp; Architect Abu Saeed Sayem, or affiliates be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages whatsoever.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This limitation includes, without limitation:
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>Loss of affiliate commissions, sales revenue, or commercial goodwill.</li>
            <li>Server downtime, hosting suspension, or website accessibility interruptions.</li>
            <li>Data corruption, database crashes, or loss of business records.</li>
            <li>Regulatory fines, penalties, or legal sanctions levied against you for insufficient commercial disclosures or unauthorized marketing methods.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed pt-2">
            This limitation of liability applies regardless of the legal theory—whether based in contract, tort (including negligence), strict liability, or otherwise—even if VibePress Studio has been expressly advised of the possibility of such damages.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            9. Indemnification
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You agree to indemnify, defend, and hold harmless VibePress Studio and Developer &amp; Architect Abu Saeed Sayem from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
          </p>
          <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground">
            <li>Your use or misuse of our software, web portal, or digital documentation.</li>
            <li>Any violation of these Terms of Use by you.</li>
            <li>Any violation of third-party rights, merchant operating agreements, or statutory regulatory standards (including FTC, GDPR, or CCPA guidelines) connected to your commercial link operations.</li>
          </ul>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            10. Modifications to Software, Services, and Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            VibePress Studio reserves the unrestricted right to modify, update, suspend, or discontinue any aspect of our website, documentation, or software products at any time, with or without notice.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We further reserve the right to revise and update these Terms of Use at our sole discretion. Any changes will become effective immediately upon being published to this portal with an updated effective date. Your continued use of our web portal, software tools, and public repositories following the publication of revised Terms signifies your irrevocable acceptance of those changes.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            11. Governing Law and Severability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Use shall be governed by, interpreted, and construed in accordance with the laws of the State of New York, United States, without giving effect to any principles of conflicts of law.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If any provision of these Terms is determined by a court of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions of these Terms shall remain in full force and effect.
          </p>
        </section>

        {/* Section 12 - Inquiries Card */}
        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            12. Contact Information and Official Legal Notices
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For questions, official notices, copyright inquiries, or technical feedback regarding these Terms of Use, please communicate directly with our engineering desk:
          </p>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Entity</span>
                <span className="font-semibold text-foreground text-base">VibePress Studio</span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Developer &amp; Architect</span>
                <span className="font-semibold text-foreground text-base">Abu Saeed Sayem</span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Official Web Portal</span>
                <a href="https://vibepressstudio.vercel.app" className="font-semibold text-primary hover:underline flex items-center gap-1 text-base">
                  https://vibepressstudio.vercel.app <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Official Support Email</span>
                <a href="mailto:VibePress.Studio@Proton.me" className="font-semibold text-primary hover:underline text-base">
                  VibePress.Studio@Proton.me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
