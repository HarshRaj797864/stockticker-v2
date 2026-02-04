import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler.ts";
import { backtestController } from "./controllers/backtest.ts";
import { mainQueue } from "./lib/queue.ts";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());  

const handleBacktest = backtestController(mainQueue);
app.post("/api/backtest", handleBacktest);

app.use(errorHandler);
export default app;

