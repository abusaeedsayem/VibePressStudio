import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Bell, Sparkles, Clock, Package 
} from "lucide-react";
import pricingData from "@/content/pricing.json";
import { SubscriberForm } from "@/components/forms/SubscriberForm";

export default function LabPage() {
  const { hero, notice, upcomingProducts } = pricingData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── 1. Hero Announcement Header ── */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
            <Clock className="w-3.5 h-3.5 mr-1.5 inline" /> {hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── 2. Software Pipeline Overview ── */}
      <section className="pt-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            Software Pipeline Overview
          </span>
          <h2 className="text-3xl font-extrabold text-foreground mb-3">
            Products Currently in Development
          </h2>
          <p className="text-sm text-muted-foreground">
            A preview of our enterprise WordPress performance tools scheduled for upcoming release.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          {upcomingProducts.map((prod, idx) => (
            <Card key={idx} className="border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src="/Smart-Affiliate-Link-Cloaker-icon.svg" 
                    alt={prod.name} 
                    className="w-10 h-10 rounded-lg p-0.5 bg-white border border-border shrink-0 object-contain shadow-xs" 
                  />
                  <div>
                    <CardTitle className="text-xl font-bold">{prod.name}</CardTitle>
                    <span className="text-xs text-muted-foreground font-medium">{prod.type}</span>
                  </div>
                </div>
                <Badge variant="outline" className="w-fit text-[11px] font-semibold px-2.5 py-0.5 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 mt-2">
                  {prod.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{prod.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 3. Pre-Launch Registration Portal ── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Information & Launch Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-primary" /> Pre-Launch Registration
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              {notice.heading}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {notice.subheading}
            </p>

            <div className="space-y-3 pt-2">
              {notice.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subscription Form */}
          <div className="lg:col-span-6">
            <Card className="border-primary/30 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-indigo-500/10 border-b border-border p-6 md:p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" /> Subscription Form
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  Subscribe to receive instant updates, architectural notes, and software releases.
                </p>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                <SubscriberForm
                  source="lab_hero"
                  variant="expanded"
                  buttonLabel="Subscribe"
                />
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}