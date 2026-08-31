import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, ShieldCheck, Share2, CheckCircle2 } from "lucide-react";
import aboutData from "@/content/about.json";

export default function AboutPage() {
  const { hero, vision, pillars } = aboutData;

  const pillarIcons = [Code2, Cpu, ShieldCheck, Share2];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Hero Block */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1">
            {hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Vision & Narrative */}
      <section className="py-16 md:py-20 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-14 shadow-sm space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Studio Vision & Philosophy
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {vision.narrative}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed pt-4 border-t border-border">
            {vision.philosophy}
          </p>
        </div>
      </section>

      {/* Core Engineering Pillars */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-muted/20 border-t border-border w-full">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Core Engineering Pillars
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              The four foundational engineering principles governing all VibePress Studio digital tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx] ?? Code2;
              return (
                <div key={idx} className="bg-card border border-border rounded-2xl p-8 shadow-sm flex items-start gap-5">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Pillar {pillar.num}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Commitment Notice */}
      <section className="py-16 px-4 md:px-6 max-w-[1280px] mx-auto w-full">
        <div className="bg-gradient-to-r from-primary to-indigo-600 text-white rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl space-y-4">
          <h3 className="text-2xl font-bold text-white">100% Production-Grade Standards</h3>
          <p className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto">
            Whether operating on an enterprise WordPress site or a local desktop workstation, our tools deliver deterministic, rock-solid performance with zero cloud tracking.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white font-medium pt-2">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> WPCS & PSR-12 Compliant</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> Tauri, Rust & SQLite WAL Engine</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-white" /> 100% Offline Data Sovereignty</span>
          </div>
        </div>
      </section>

    </div>
  );
}
