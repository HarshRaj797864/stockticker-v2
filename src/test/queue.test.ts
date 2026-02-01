import { describe, it, expect, vi, beforeEach } from 'vitest';

// 1. Mock ioredis
vi.mock('ioredis', () => {
  class MockRedis {
    constructor() {}
    status = 'ready';
    on = vi.fn();
    quit = vi.fn();
  }
  return { Redis: MockRedis };
});

// 2. Mock BullMQ - Define methods on the prototype
vi.mock('bullmq', async (importOriginal) => {
  const actual = await importOriginal<typeof import('bullmq')>();
  
  class MockQueue {
    name: string;
    opts: any;
    
    constructor(name: string, opts?: any) {
      this.name = name;
      this.opts = opts;
    }
  }
  
  // Define methods on the prototype so super.add() can find them
  MockQueue.prototype.add = vi.fn().mockResolvedValue({ id: '123' });
  MockQueue.prototype.close = vi.fn().mockResolvedValue(undefined);

  return {
    ...actual,
    Queue: MockQueue,
  };
});

// 3. Import after mocks
import { TypedQueue } from '../lib/queue.js';
import { Redis } from 'ioredis';

describe('TypedQueue', () => {
  let mockRedis: any;
  let queue: TypedQueue;

  beforeEach(() => {
    vi.clearAllMocks();
    mockRedis = new Redis();
    queue = new TypedQueue('test-queue', mockRedis);
  });

  it('should push a BacktestJob with correct types', async () => {
    const jobData = { ticker: 'AAPL', days: 30 };
    
    const result = await queue.pushJob('BacktestJob', jobData);
    
    // Verify the add method was called correctly
    expect(queue.add).toHaveBeenCalledWith('BacktestJob', jobData, undefined);
    expect(result).toEqual({ id: '123' });
  });

  it('should push an AnalystJob with correct types', async () => {
    const jobData = { ticker: 'GOOGL', newsSource: 'Reuters' };
    
    const result = await queue.pushJob('AnalystJob', jobData);
    
    expect(queue.add).toHaveBeenCalledWith('AnalystJob', jobData, undefined);
    expect(result).toEqual({ id: '123' });
  });

  it('should pass options to the underlying add method', async () => {
    const jobData = { ticker: 'TSLA', days: 7 };
    const opts = { delay: 5000, priority: 1 };
    
    const result = await queue.pushJob('BacktestJob', jobData, opts);
    
    expect(queue.add).toHaveBeenCalledWith('BacktestJob', jobData, opts);
    expect(result).toEqual({ id: '123' });
  });
});
