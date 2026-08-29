"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Send, CheckCircle2, LifeBuoy, ShieldCheck, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import contactData from "@/content/contact.json";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const { hero, channels, directEmail, sla, form } = contactData;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* Support Hero Block */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24 border-b border-border text-center">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <Badge variant="outline" className="mb-4 text-xs font-semibold px-3 py-1">
            {hero.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Support Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Sidebar: Channels & SLA Info */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Primary Support Email */}
            <Card className="border-primary/30 shadow-sm bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" /> {directEmail.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {directEmail.description}
                </p>
                <a 
                  href={`mailto:${directEmail.email}`} 
                  className="inline-block font-mono text-sm font-bold text-primary hover:underline bg-primary/10 px-3 py-1.5 rounded border border-primary/20"
                >
                  {directEmail.email}
                </a>
              </CardContent>
            </Card>

            {/* Operating Hours & SLA */}
            <Card className="border-border shadow-sm bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" /> {sla.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {sla.description}
                </p>
              </CardContent>
            </Card>

            {/* Support Channels & Helpdesk */}
            <Card className="border-border shadow-sm bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <LifeBuoy className="h-5 w-5 text-emerald-500" /> Support Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {channels.map((ch, idx) => (
                  <div key={idx} className="border-b border-border/60 pb-3 last:border-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-foreground">
                      <span>{ch.name}</span>
                      {ch.href.startsWith("http") && (
                        <a href={ch.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{ch.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Interactive Support Form */}
          <div className="lg:col-span-2" id="contact-form">
            <Card className="border-border shadow-md bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-primary" /> {form.title}
                </CardTitle>
                <CardDescription className="text-xs">
                  {form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold">{form.successTitle}</h3>
                    <p className="text-xs text-muted-foreground max-w-md">
                      {form.successDesc}
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4 text-xs font-bold">
                      {form.submitAnother}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inputs 1 & 2 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-semibold">{form.inputs.name}</Label>
                        <Input id="name" required placeholder="Jane Doe" className="text-xs bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold">{form.inputs.email}</Label>
                        <Input id="email" type="email" required placeholder="jane@organization.com" className="text-xs bg-background" />
                      </div>
                    </div>

                    {/* Inputs 3 & 4 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product" className="text-xs font-semibold">{form.inputs.product}</Label>
                        <Select defaultValue="smart-affiliate-link-cloaker">
                          <SelectTrigger id="product" className="text-xs bg-background">
                            <SelectValue placeholder="Select Product" />
                          </SelectTrigger>
                          <SelectContent>
                            {form.productOptions.map(p => (
                              <SelectItem key={p.value} value={p.value} className="text-xs">{p.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category" className="text-xs font-semibold">{form.inputs.category}</Label>
                        <Select defaultValue="general-inquiry">
                          <SelectTrigger id="category" className="text-xs bg-background">
                            <SelectValue placeholder="Select Support Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {form.categoryOptions.map(c => (
                              <SelectItem key={c.value} value={c.value} className="text-xs">{c.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Input 5 */}
                    <div className="space-y-2">
                      <Label htmlFor="license" className="text-xs font-semibold">{form.inputs.license}</Label>
                      <Input id="license" placeholder="e.g. FM-123456789 or AppSumo Redemption Code" className="text-xs bg-background" />
                    </div>

                    {/* Input 6 */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold">{form.inputs.message}</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Please describe your technical issue, licensing query, or AppSumo code details..." 
                        className="min-h-[140px] text-xs bg-background"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" className="w-full text-xs font-bold h-12" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span>{form.processing}</span>
                      ) : (
                        <span className="flex items-center gap-2">{form.submitButton} <Send className="h-4 w-4" /></span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

    </div>
  );
}
