import { type Job, Worker } from "bullmq";
import { createRedisConnection } from "./lib/redis.ts";
import { type JobPayloads } from "./lib/queue.ts";
import os from "os";

const connection = createRedisConnection();
const cpuCount = os.cpus().length;

const worker = new Worker<JobPayloads[keyof JobPayloads]>(
  "agent-queue",
  async (job: Job) => {
    switch (job.name) {
      case "BacktestJob":
        const backtestData = job.data as JobPayloads["BacktestJob"];
        console.log(`📈 Processing Backtest for ${backtestData.ticker}...`);
        // await handleBacktest(backtestData);
        return { status: "COMPLETED", result: "Backtest Done" };

      case "AnalystJob":
        const analystData = job.data as JobPayloads["AnalystJob"];
        console.log(`📰 Reading News for ${analystData.ticker}...`);
        return { status: "COMPLETED", result: "Analysis Done" };

      default:
        throw new Error(`Unknown job: ${job.name}`);
    }
  },
  {
    connection, 
    concurrency: Math.max(1, cpuCount - 1), 
  }
);
// shutdown()
const shutdown = async () => {
  await worker.close();
  await connection.quit();
  process.exit(0);
};

// using shutdown
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
