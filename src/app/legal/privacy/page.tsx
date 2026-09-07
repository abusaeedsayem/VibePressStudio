import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Mail, Globe, Lock, Server, Cpu, Database, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | VibePress Studio",
  description: "Official Privacy Policy for VibePress Studio detailing our privacy-first, zero-bloat, and zero-tracking data protection framework.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-14 md:py-20 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline" /> Zero-Tracking Framework
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 max-w-4xl mx-auto">
            VibePress Studio: Official Privacy Policy
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

      {/* Main Privacy Policy Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full text-foreground space-y-12">
        {/* Contact Strip */}
        <div className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Official Communications & Support</div>
              <a href="mailto:VibePress.Studio@Proton.me" className="text-sm font-semibold text-primary hover:underline">
                VibePress.Studio@Proton.me
              </a>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs font-mono">
            End-to-End Encrypted Communication
          </Badge>
        </div>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            1. Introduction and Architectural Scope
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy governs the collection, processing, management, and protection of information across the digital ecosystem of VibePress Studio (referred to interchangeably throughout this document as &quot;VibePress Studio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), engineered, architected, and maintained by Developer &amp; Architect Abu Saeed Sayem. This policy applies across our official studio portal (<a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline">https://vibepressstudio.vercel.app</a>), our open-source digital distributions, our upcoming software applications, and all associated technical support channels.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We operate under an uncompromising privacy-first and zero-bloat engineering ethos. We firmly believe that software functionality and web utilities must never rely on invasive surveillance, behavioral harvesting, or unnecessary data retention. By accessing our website, downloading our tools, or deploying our software, you acknowledge and agree to the practices outlined within this policy.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            2. General Data Protection and Zero-Tracking Framework
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            VibePress Studio does not collect, monetize, sell, lease, or distribute Personally Identifiable Information (PII) to commercial data brokers, advertising networks, or third-party telemetry aggregators.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              We do not deploy tracking pixels, third-party session replay scripts, cross-site behavioral tracking cookies, or intrusive fingerprinting scripts on our web portal.
            </li>
            <li>
              We do not operate intrusive digital fingerprinting to identify individual visitors.
            </li>
            <li>
              Any technical log data generated through routine network communication with our web infrastructure is handled with strict minimization and deleted in accordance with standard edge-cache retention cycles.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            3. Product-Specific Data Handling Practices
          </h2>

          {/* 3.1 */}
          <div className="space-y-3 bg-muted/30 border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" /> 3.1. Smart Affiliate Link Cloaker (WordPress Plugin)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart Affiliate Link Cloaker is an open-source performance plugin authored and architected by Developer &amp; Architect Abu Saeed Sayem. The plugin is currently distributed exclusively free of charge via the official WordPress.org Plugin Directory to support the open-source web publishing community. It contains zero paid modules, zero commercial tracking libraries, and zero external licensing checkpoints.
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground pt-2">
              <li>
                <strong className="text-foreground">Zero PII Collection:</strong> The plugin operates entirely inside your self-hosted WordPress deployment and does not collect, harvest, transmit, or retain any Personally Identifiable Information (PII) of your website&apos;s visitors or administrators.
              </li>
              <li>
                <strong className="text-foreground">Transient Geolocation Resolution:</strong> Country-level IP geolocation routing is evaluated dynamically in volatile server memory using standard request headers provided by edge services (such as Cloudflare&apos;s <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs text-foreground">HTTP_CF_IPCOUNTRY</code>) or transient server lookups. Client IP addresses are never written to permanent SQL database tables, disk storage, or third-party analytical endpoints.
              </li>
              <li>
                <strong className="text-foreground">Cookie-Less Redirection Infrastructure:</strong> Link cloaking and redirection executions (HTTP 301, 302, and 307) operate on native WordPress template routing hooks (<code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs text-foreground">template_redirect</code>) without reading, injecting, or storing tracking cookies on user devices. This ensures native compliance with global regulatory mandates, including the EU General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </li>
              <li>
                <strong className="text-foreground">No Telemetry or Phone-Home Scripts:</strong> The free core release distributed through WordPress.org does not ping external studio servers, does not transmit usage diagnostics, and operates completely self-contained within your local server environment.
              </li>
            </ul>
          </div>

          {/* 3.2 */}
          <div className="space-y-3 bg-muted/30 border border-border rounded-xl p-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-500" /> 3.2. ShelfMaster (Desktop Library Operating &amp; Management System)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              ShelfMaster is an institutional-grade, desktop-native software platform engineered by Lead Architect Abu Saeed Sayem on Tauri v2 and an embedded SQLite database engine.
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-muted-foreground pt-2">
              <li>
                <strong className="text-foreground">Pre-Release Development Status:</strong> ShelfMaster is currently a specialized development project and architectural blueprint. It is not scheduled for public release or commercial distribution during the current calendar year.
              </li>
              <li>
                <strong className="text-foreground">100% Offline-First Architecture:</strong> Once released, ShelfMaster is architected to operate with zero cloud dependencies. All institutional records—including library catalogs, patron registries, circulation histories, staff schedules, and financial ledgers—are committed exclusively to an encrypted local SQLite database file stored physically on the host computer.
              </li>
              <li>
                <strong className="text-foreground">Local Data Sovereignty:</strong> VibePress Studio maintains no backdoor, remote connection, telemetry bridge, or cloud access to your ShelfMaster database. We have zero technical capacity to view, retrieve, modify, or recover your local institutional records.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            4. Website Operations and Communications
          </h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" /> 4.1. Server Logs and Hosting Infrastructure
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our official showcase web portal (<a href="https://vibepressstudio.vercel.app" className="text-primary hover:underline">https://vibepressstudio.vercel.app</a>) is hosted on Vercel&apos;s edge network. When you navigate our website, network servers may process standard technical request information, including your masked IP address, browser type, referral domain, interface language, and request timestamps. This data is processed strictly to maintain transport security, mitigate denial-of-service (DDoS) threats, and ensure edge-cache availability.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> 4.2. Direct Inquiries and Communications
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If you contact VibePress Studio directly via our official communication channel (<a href="mailto:VibePress.Studio@Proton.me" className="text-primary hover:underline font-semibold">VibePress.Studio@Proton.me</a>), any information you supply—such as your name, email address, operating system specifications, or bug reports—is used solely to answer your technical inquiry, verify documentation feedback, or deliver software support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All communications routed through our Proton email service benefit from robust end-to-end cryptographic infrastructure. We will never share or sell your correspondence or email address without your explicit prior authorization.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            5. Third-Party Platforms and External Repositories
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our web pages and documentation may provide hyperlinks to external, independent platforms, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              The official WordPress.org Plugin Repository for verified open-source software downloads.
            </li>
            <li>
              Independent code repositories, technical documentation portals, and external merchant networks.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            We do not own, control, or monitor the individual privacy protocols or data handling policies of external third-party portals. We encourage you to review the privacy terms of any third-party website you navigate to from our studio domains.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            6. Rights of Global Users (GDPR, CCPA, and International Frameworks)
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Regardless of your geographic location, VibePress Studio honors the fundamental right to digital privacy. Because our open-source tools do not collect personal identifiers and our website operates without user profiling, we retain no identifiable records linking individual identities to browsing habits.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you contact our engineering desk directly and wish to review, update, or permanently purge your email communication records, you may transmit a formal request to <a href="mailto:VibePress.Studio@Proton.me" className="text-primary hover:underline font-semibold">VibePress.Studio@Proton.me</a>. We review and process verified requests within standard regulatory windows.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            7. Scalability and Policy Amendments
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            As VibePress Studio expands its engineering roadmap, we may introduce new WordPress plugins, native desktop applications, productivity utilities, or digital developer solutions. If future software releases include opt-in telemetry, account-based cloud synchronization, or automated software update protocols, this Privacy Policy will be revised accordingly to provide exhaustive transparency regarding any new data processing layers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify, amend, or update this policy at our sole discretion. Any revisions will become effective immediately upon posting to this portal, accompanied by an updated effective date. Your continued utilization of our website, software tools, and repository distributions constitutes informed acceptance of the updated terms.
          </p>
        </section>

        {/* Section 8 - Inquiries Card */}
        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold text-foreground border-b border-border pb-2">
            8. Official Privacy Inquiries
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For technical questions, privacy-related inquiries, or questions regarding our code-level data minimization policies, contact our engineering desk directly:
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
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Dedicated Contact Email</span>
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
