interface TypedQueue {
  pushJob: (name: string, data: any) => Promise<any>;
}
import { ZodValidationError } from "../middleware/errorHandler.ts";
// importing the schema from zod
import { BacktestSchema } from "../schemas/backtest.ts";
import { type Request, type Response } from "express";
export const backtestController =
  (queue: TypedQueue) => async (req: Request, res: Response, next: any) => {
    try {
      const validatedData = BacktestSchema.safeParse(req.body);
      if(!validatedData.success) {
        throw new ZodValidationError("Validation Failed");
      }
      queue.pushJob("BacktestJob", validatedData.data);
      res.status(202).json({ message: "Accepted", jobId: 1 }); // not sure about jobId here
    } catch (e) {
      next(e);
    }
  };
