"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { hashPassword, verifyPassword } from "@/lib/hash";

type LoginFormProps = {
  onSuccess: () => void;
};

export function AdminLoginPage({ onSuccess }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const expectedHash = process.env.ADMIN_PASSWORD_HASH;

      if (!expectedHash) {
        // Fallback: if no hash is set, allow any password (for initial setup)
        onSuccess();
        router.push("/admin/dashboard");
        return;
      }

      const isValid = await verifyPassword(password, expectedHash);

      if (isValid) {
        onSuccess();
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-foreground text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-md p-4 mb-6 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <span className="block text-sm font-medium text-foreground mb-2">
              Email
            </span>
            <Input
              type="email"
              placeholder="admin@vibepressstudio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full rounded-md border border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-foreground mb-2">
              Password
            </span>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              className="w-full rounded-md border border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-primary text-primary-foreground font-bold py-3 transition-all hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin text-primary-foreground"
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
                Logging in…
              </span>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}