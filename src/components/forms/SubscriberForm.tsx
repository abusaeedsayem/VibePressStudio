"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

type SubscriberFormProps = {
  source: "footer" | "lab_hero";
  variant: "compact" | "expanded";
  buttonLabel?: string;
};

type FormState = "idle" | "loading" | "success" | "error";

export function SubscriberForm(props: SubscriberFormProps) {
  const { source, variant, buttonLabel = "Subscribe" } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setStatus("idle");
    setErrorMessage(null);
  }, [source, variant]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trim inputs
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    // Validate name
    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage("Name must be at least 2 characters long");
      setStatus("error");
      return;
    }

    // Validate email
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          source,
          honeypot: honeypot.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setErrorMessage(data.message || "An error occurred");
        setStatus("error");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setErrorMessage(
        "Network connection error. Please check your internet connection and try again."
      );
      setStatus("error");
    }
  };

  // Map variant to idle button text
  const idleButtonText =
    variant === "expanded" ? "Join Studio Alpha Dispatch" : "Subscribe";
  const finalButtonLabel = status === "loading" ? "" : buttonLabel || idleButtonText;

  const renderCompact = () => {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Label htmlFor="name" className="hidden">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent/60 px-3 py-1 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50",
            "placeholder:font-medium placeholder:text-muted-foreground"
          )}
        />
        <Label htmlFor="email" className="hidden">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@organization.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent/60 px-3 py-1 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50",
            "placeholder:font-medium placeholder:text-muted-foreground"
          )}
        />
        <input
          type="hidden"
          name="honeypot"
          
          style={{ display: "none", caretColor: "transparent" }}
tabIndex={-1}
          defaultValue=""
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "flex h-10 w-full rounded-md border border-primary bg-primary/20 text-primary hover:bg-primary/30 transition-all items-center justify-center gap-2",
            "shadow-sm focus-visible:ring-2 focus-visible:ring-primary/50"
          )}
        >
          {status === "loading" && (
            <span className="flex-1">
              <svg
                className="h-4 w-4 animate-spin text-primary"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke-width="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Subscribing…
            </span>
          )}
          {finalButtonLabel}
        </Button>
      </form>
    );
  };

  const renderExpanded = () => {
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Stay Ahead of Studio Releases
        </p>
        <Label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={status === "loading"}
          className={cn(
            "rounded-md border border-input bg-transparent/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50 block w-full",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-placeholder"
          )}
        />
        <Label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="name@organization.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className={cn(
            "rounded-md border border-input bg-transparent/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50 block w-full",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-placeholder"
          )}
        />
        <input
          type="hidden"
          name="honeypot"
          
          style={{ display: "none", caretColor: "transparent" }}
tabIndex={-1}
          defaultValue=""
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "w-full h-12 rounded-md bg-primary text-primary-foreground font-bold text-sm transition-all shadow-lg hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50",
            "flex items-center justify-center gap-2"
          )}
        >
          {status === "loading" && (
            <span className="flex-1">
              <svg
                className="h-4 w-4 animate-spin text-primary"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke-width="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Subscribing…
            </span>
          )}
          {finalButtonLabel}
        </Button>
      </form>
    );
  };

  const renderSuccess = () => {
    return (
      <div className="space-y-4">
        <div
          className="rounded-full bg-emerald-500/10 emerald-500/20 p-4 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="h-8 w-8 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-foreground text-center">You're on the list</h3>
        <p className="text-base text-muted-foreground text-center">
          Thank you for subscribing to VibePress Studio, we will keep you updated on new releases, architectural notes, and digital utilities.
        </p>
      </div>
    );
  };

  const renderError = (err?: string) => {
    return (
      <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-md p-4 text-sm font-medium">
        {err || "An unexpected error occurred. Please try again."}
      </div>
    );
  };

  // Initial state based on variant
  useEffect(() => {
    setStatus("idle");
  }, [variant]);

  if (status === "success") {
    return renderSuccess();
  }

  if (variant === "compact") {
    return renderCompact();
  }

  return renderExpanded();
}