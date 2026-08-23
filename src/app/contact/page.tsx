"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Send, CheckCircle2, LifeBuoy, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/10">
      <div className="border-b bg-background">
        <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-4">Support & Contact Center</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How can we help you?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need technical assistance, have a billing question, or want to report a bug, we're here to help.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-12 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="md:col-span-1 space-y-6">
            <Card className="border-primary/20 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" /> Direct Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries, email the lead developer directly at:</p>
                <a href="mailto:asaeedmsayem@gmail.com" className="font-medium text-primary hover:underline">
                  asaeedmsayem@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" /> SLA Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our official response time for active Pro License holders is <strong className="text-foreground">24-48 business hours</strong> (Monday-Friday).
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-500/10 border-amber-500/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
                  <p className="text-sm text-amber-800 dark:text-amber-400">
                    <strong>Before submitting:</strong> Please ensure you have checked the <a href="/docs" className="underline font-medium hover:text-amber-900">Documentation Knowledgebase</a> as 90% of configuration issues are solved there.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <LifeBuoy className="h-6 w-6" /> Open a Support Ticket
                </CardTitle>
                <CardDescription>
                  Please provide as much detail as possible so we can route your request efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold">Ticket Submitted Successfully</h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for reaching out. We have received your request and will get back to you at your provided email address within our SLA timeframe.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                      Submit Another Ticket
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product">Related Product</Label>
                        <Select defaultValue="cloaker">
                          <SelectTrigger id="product">
                            <SelectValue placeholder="Select Product" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cloaker">Smart Affiliate Link Cloaker</SelectItem>
                            <SelectItem value="shelfmaster">ShelfMaster Desktop</SelectItem>
                            <SelectItem value="other">General / Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Support Category *</Label>
                        <Select required>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wp-org">Free Plugin Community Support (WordPress.org)</SelectItem>
                            <SelectItem value="pro-billing">Pro License Billing & Activation (Freemius)</SelectItem>
                            <SelectItem value="appsumo">AppSumo Code Redemption</SelectItem>
                            <SelectItem value="bug">Technical Bug Report</SelectItem>
                            <SelectItem value="feature">Custom Feature Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="license">License Key / AppSumo Code</Label>
                      <Input id="license" placeholder="sk_live_xxxxxxxx or AppSumo code (Optional for Free users)" />
                      <p className="text-xs text-muted-foreground">Required for priority Pro support routing.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Description *</Label>
                      <Textarea 
                        id="message" 
                        required 
                        placeholder="Please describe your issue in detail. If reporting a bug, include steps to reproduce..." 
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" className="w-full h-12 text-base" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center">Processing...</span>
                      ) : (
                        <span className="flex items-center">Submit Ticket <Send className="ml-2 h-4 w-4" /></span>
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
