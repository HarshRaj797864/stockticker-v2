import { vi, beforeAll } from 'vitest';
import 'dotenv/config';

// Global Mocks
vi.mock('ioredis', () => {
  return {
    Redis: vi.fn().mockImplementation(() => ({
      get: vi.fn(),
      set: vi.fn(),
      quit: vi.fn(),
    })),
  };
});

beforeAll(() => {
  console.log('🧪 Vitest: Global setup initialized.');
});
