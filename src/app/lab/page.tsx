"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, Bell, Sparkles, Clock, Send, Package, Info 
} from "lucide-react";
import pricingData from "@/content/pricing.json";
import { SubscriberForm } from "@/components/forms/SubscriberForm";

export default function LabPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { hero, notice, upcomingProducts } = pricingData;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          source: "lab_hero",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to complete registration. Please try again.");
      }
    } catch (err) {
      console.error("Lab subscription error:", err);
      setErrorMessage("Network connection error. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setSelectedProduct("all");
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* ── Subscriber Form: Early Access Dispatch ── */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-4 md:py-6 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <SubscriberForm
            source="lab_hero"
            variant="expanded"
            buttonLabel="Join Studio Alpha Dispatch"
          />
        </div>
      </section>

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

      {/* ── 2. Pre-Launch Registration Portal ── */}
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

            <div className="p-6 bg-muted/40 border border-border rounded-xl space-y-2 mt-6">
              <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                <Info className="h-4 w-4 text-primary" /> Launch Timeline Status
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Smart Affiliate Link Cloaker is <strong>100% Feature Complete (v1.0.6)</strong> and submitted for plugin directory review. Official public release will take place immediately upon approval.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Sign-Up Form */}
          <div className="lg:col-span-6">
            <Card className="border-primary/30 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-indigo-500/10 border-b border-border p-6 md:p-8">
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" /> Get Notified Upon Launch
                </CardTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  Register your email below to receive instant launch updates and exclusive discounts.
                </p>
              </CardHeader>

              <CardContent className="p-6 md:p-8">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Registration Successful!</h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you for registering! We have recorded your email (<strong>{email}</strong>). We will notify you immediately as soon as our software is launched.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={handleReset}
                      className="mt-4 text-xs font-semibold"
                    >
                      Register Another Email
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-5">
                    {errorMessage && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-md text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider">Your Name (Optional)</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        disabled={isSubmitting}
                        className="h-11 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider">Email Address <span className="text-red-500">*</span></Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting}
                        className="h-11 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-wider">Software of Interest</Label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="all">All VibePress Software Suite</option>
                        <option value="cloaker">Smart Affiliate Link Cloaker (WordPress Plugin)</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-12 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      {isSubmitting ? (
                        <span>Transmitting registration...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Register For Launch Notification
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-center text-muted-foreground pt-1">
                      We respect your privacy. Zero spam, unsubscribe anytime with 1 click.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>

        {/* ── 3. Upcoming Software Pipeline Cards ── */}
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
                    <div className="p-2.5 rounded-lg shrink-0 bg-primary/10 text-primary">
                      <Package className="h-5 w-5" />
                    </div>
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

      </div>
    </div>
  );
}