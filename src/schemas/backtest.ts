import { z } from "zod";

export const BacktestSchema = z.object({
  ticker: z
    .string()
    .min(1)
    .max(5)
    .regex(/^[A-Z]+$/, { message: "Ticker must be uppercase (Eg:- AAPL)" }),

  days: z
    .number()
    .int({ message: "Days must be a natural number" })
    .min(1, { message: "Backtest must be atleast 1 day" })
    .max(365, { message: "Backtest duration cannot exceed 365 days" }),
});

// Inferring type via zod interface
export type BacktestJobPayload = z.infer<typeof BacktestSchema>;
