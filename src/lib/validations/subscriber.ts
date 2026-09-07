import { z } from "zod";

export const subscriberInputSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(80, "Name must be at most 80 characters long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .transform((val) => val.toLowerCase()),
  source: z.string().optional().default("footer"),
  honeypot: z.string().optional(),
});