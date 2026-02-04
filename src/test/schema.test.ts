import { it, vi, expect, beforeEach, describe } from "vitest";
import {z} from "zod";
import {BacktestSchema} from "../schemas/backtest.ts"


describe("backtest schema tests", () => {
  const TestSchema = z.object({
    ticker: z.string().min(1).max(5),
  });
  it("should validate a correct payload", () => {
    const validData = { ticker: "TSLA", days: 30};
    const result = BacktestSchema.safeParse(validData);
    expect(result.success).toBe(true);
    expect(result.data).toEqual(validData);
  });
//   should also test ticker and days constraints
});
