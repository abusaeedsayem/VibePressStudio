import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/20 py-20 border-b">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl text-center">
          <Badge className="mb-4">About VibePress Studio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineered for Performance. Built for Growth.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            VibePress Studio is a premier software engineering firm founded by Lead Architect Abu Saeed Sayem. We specialize in developing high-performance WordPress plugins, resilient offline-first desktop systems, and robust creator tools.
          </p>
        </div>
      </div>

      <div className="container px-4 md:px-6 py-16 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet the Lead Architect</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm <strong>Abu Saeed Sayem</strong>. With years of experience architecting scalable systems and full-stack applications, I founded VibePress Studio to solve complex problems with elegant, lightweight code. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My philosophy is simple: software should be fast, offline-capable where possible, and completely devoid of unnecessary bloat. Whether I'm writing Rust for a native desktop app or optimizing PHP for WordPress, performance is always the top priority.
            </p>
          </div>
          <Card className="bg-primary/5 border-primary/20 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Our Core Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="h-6 w-6 text-indigo-500" />
                  <span className="font-medium">React, Next.js & TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-6 w-6 text-blue-500" />
                  <span className="font-medium">PHP, WordPress Core & MySQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 text-amber-500" />
                  <span className="font-medium">Rust & Tauri (Desktop OS)</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                  <span className="font-medium">SQLite (Offline-First Storage)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
