import {z} from "zod";
import "dotenv/config";

const envSchema = z.object({
    PORT: z.coerce.number().default(10000),
    REDIS_HOST: z.string().min(1, "REDIS_HOST is required"),
    REDIS_PORT: z.coerce.number().default(6379),
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Invalid environment variables:", parsedEnv.error.format());
  process.exit(1); 
}

export const env = parsedEnv.data;
