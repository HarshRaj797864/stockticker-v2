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

export class TypedQueue<TData extends Record<string, any>> extends Queue<
  any,
  any,
  string
> {
  constructor(name: string, opts?: QueueOptions) {
    super(name, opts);
  }

  async addJob<K extends keyof TData & string>(
    name: K,
    data: TData[K],
    opts?: JobsOptions,
  ): Promise<Job<TData[K], any, K>> {
    return super.add(name, data, opts) as any;
  }
}


const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const connection = new Redis(REDIS_URL, { maxRetriesPerRequest: null });

const q = new AppQueue<JobPayloads>("my-queue", {connection});

// This works and autocompletes 'ticker' and 'days'
q.addJob("BacktestJob", { ticker: "TSLA", days: 5 });

// This will now throw a RED error because 'newsSource' doesn't belong to 'BacktestJob'
// q.addJob("BacktestJob", { ticker: "TSLA", newsSource: "Twitter" });
