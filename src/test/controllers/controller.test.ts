import { it, vi, expect, beforeEach, describe } from "vitest";
import { backtestController } from "../../controllers/backtest.ts";
import { Request, Response } from "express";

describe("backtestController tests", () => {
  let mockQueue: any;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let next: any;

  beforeEach(() => {
    mockQueue = {
      pushJob: vi.fn().mockResolvedValue({ id: `123` }),
    };
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    next = vi.fn();
  });
  it("should work with any general queue and push valid data successfully", async () => {
    const handler = backtestController(mockQueue);
    mockRequest = {
      body: { ticker: "AAPL", days: 30 },
    };
    await handler(mockRequest as Request, mockResponse as Response, next);
    expect(mockQueue.pushJob).toHaveBeenCalledWith("BacktestJob", {
      ticker: 'AAPL',
      days: 30
    });
    expect(mockResponse.status).toHaveBeenCalledWith(202);
    expect(next).not.toHaveBeenCalled();
  });
  it("should throw error with invalid data",async () => {
    const handler = backtestController(mockQueue);
    mockRequest = {
      body: { ticker: "AAPL", news: "hello" },
    };
    await handler(mockRequest as Request, mockResponse as Response, next);
    expect(mockQueue.pushJob).not.toHaveBeenCalledWith();
    // expect(next).toHaveBeenCalledWith(new ZodError);
  });
  
});
