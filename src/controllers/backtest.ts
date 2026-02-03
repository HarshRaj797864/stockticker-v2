interface TypedQueue {
  pushJob: (name: string, data: any) => Promise<any>;
}
// importing the schema from zod
import { BacktestSchema } from "../schemas/backtest.ts";
import { type Request, type Response } from "express";
export const backtestController =
  (queue: TypedQueue) => async (req: Request, res: Response, next: any) => {
    try {
      const {ticker, days} = BacktestSchema.parse(req.body);
      queue.pushJob("BacktestJob", {ticker, days});
      res.status(202).json({ message: "Accepted", jobId: 1 }); // not sure about jobId here
    } catch (e) {
      next(e);
    }
  };
