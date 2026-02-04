import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler.ts";

const app = express();

app.use(errorHandler);
export default app;

