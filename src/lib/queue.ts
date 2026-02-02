import "dotenv/config";
import { Queue, Job, type JobsOptions, type QueueOptions } from "bullmq";
import { createRedisConnection } from "./redis.ts";

export interface JobPayloads {
  BacktestJob: {
    ticker: string;
    days: number;
  };
  AnalystJob: {
    ticker: string;
    newsSource: string;
  };
}

// adding defaultoptions
const defaultOptions: JobsOptions = {
  attempts: 3,
  backoff: {
    type: "exponential",
    delay: 1000,
  },
  removeOnFail: false,
  removeOnComplete: true,
};

export class TypedQueue extends Queue {
  constructor(name: string) {
    super(name, {
      connection: createRedisConnection(),
      defaultJobOptions: defaultOptions,
    } as QueueOptions);
  }

  async pushJob<K extends keyof JobPayloads>(
    name: K,
    data: JobPayloads[K],
    opts?: JobsOptions,
  ): Promise<any> {
    return super.add(name, data, opts);
  }
}

export const mainQueue = new TypedQueue("agent-queue");

// await mainQueue.pushJob("BacktestJob", {ticker: "AAPL", days: 23}, defaultOptions)
export const closeQueue = async () => {
  await mainQueue.close();
};
