interface TypedQueue {
  pushJob: (name: string, data: any) => Promise<any>;
}
import { ZodError } from "zod";
import { errorHandler } from "../middleware/errorHandler.ts";
// importing the schema from zod
import { BacktestSchema } from "../schemas/backtest.ts";
import { type Request, type Response } from "express";
export const backtestController =
  (queue: TypedQueue) => async (req: Request, res: Response, next: any) => {
    try {
      const { ticker, days } = BacktestSchema.parse(req.body);

      const job = await queue.pushJob("BacktestJob", { ticker, days });
      res
        .status(202)
        .json({ status: "success", message: "Accepted", jobId: job?.id });
    } catch (e) {
      next(e);
    }
  };
