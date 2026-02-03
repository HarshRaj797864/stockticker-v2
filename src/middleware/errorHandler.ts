import { type Request, type Response, type NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (process.env.NODE_ENV !== "test") {
    // debugging messages to be removed later
    console.error(`❌ [Error]: ${err.message}`);
    if (err.stack) console.error(err.stack);
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "fail",
      message: "Validation Failed",
      errors: err.issues.map(i => ({
        path: i.path.join('.'),
        message: i.message
      }))
    });
  }
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? "Internal Server Error" : err.message;

  res.status(statusCode).json({
    status: statusCode >= 500 ? "error" : "fail",
    message: message,
  });
};
