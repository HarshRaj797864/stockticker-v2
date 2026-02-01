import "dotenv/config";
import { Queue, Job, type JobsOptions, type QueueOptions } from "bullmq";
import { Redis } from "ioredis";

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

export class TypedQueue extends Queue {
  constructor(name: string, connection: Redis) {
    super(name, {connection} as QueueOptions);
  }

  async pushJob<K extends keyof JobPayloads>(
    name: K,
    data: JobPayloads[K],
    opts?: JobsOptions,
  ): Promise<any> {
    return super.add(name, data, opts);
  }
}


const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";
const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
const connection = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  maxRetriesPerRequest: null,
});

export const mainQueue = new TypedQueue("agent-queue", connection);

// This works and autocompletes 'ticker' and 'days'
// q.addJob("BacktestJob", { ticker: "TSLA", days: 5 });

// This will now throw a RED error because 'newsSource' doesn't belong to 'BacktestJob'
// q.addJob("BacktestJob", { ticker: "TSLA", newsSource: "Twitter" });
export const closeQueue = async () => {
  await mainQueue.close();
  await connection.quit();
}
