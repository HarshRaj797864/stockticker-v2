-- CreateTable
CREATE TABLE "market_data" (
    "symbol" VARCHAR(20) NOT NULL,
    "timestamp" TIMESTAMPTZ(6) NOT NULL,
    "open" DECIMAL(15,6) NOT NULL,
    "up" DECIMAL(15,6) NOT NULL,
    "down" DECIMAL(15,6) NOT NULL,
    "close" DECIMAL(15,6) NOT NULL,
    "volume" BIGINT NOT NULL,

    CONSTRAINT "market_data_pkey" PRIMARY KEY ("symbol","timestamp")
);

-- CreateTable
CREATE TABLE "agent_logs" (
    "id" BIGSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "agentName" VARCHAR(50) NOT NULL,
    "context" JSONB NOT NULL,
    "decision" TEXT,

    CONSTRAINT "agent_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "market_data_symbol_timestamp_idx" ON "market_data"("symbol", "timestamp" DESC);

-- CreateIndex
CREATE INDEX "agent_logs_createdAt_idx" ON "agent_logs"("createdAt" DESC);
