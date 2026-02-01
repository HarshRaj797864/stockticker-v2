import { vi } from 'vitest';

vi.mock('ioredis', () => {
  
  const Redis = vi.fn(function() {
    return {
      get: vi.fn(),
      set: vi.fn(),
      quit: vi.fn().mockResolvedValue('OK'),
      on: vi.fn(), 
    };
  });

  return { Redis };
});
