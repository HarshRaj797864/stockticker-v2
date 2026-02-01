# ARCHITECTURE.md - The Agentic Algo-Trading Orchestrator

## 1. High-Level Concept: The "Agentic" Shift

We are building an **Autonomous Multi-Agent System**. Instead of a monolithic script, a Federation of Agents collaborates to manage capital and system resources.

### The Agent Federation (The Business Logic)
1.  **The Analyst Agent (GenAI):** "Right Brain." Reads news, intuits sentiment (LangChain).
2.  **The Quant Agent (ML):** "Left Brain." Predicts price action using Offline RL (Stable-Baselines3).
3.  **The Risk Agent (C++):** "The Muscle." Deterministic, high-performance execution & backtesting.

### The Infrastructure Federation (The System Logic)
4.  **The Memory Agent (RL-Cache):** "The Optimizer." Uses Reinforcement Learning to intelligently manage Redis vs. Postgres storage (Hot/Cold data tiering), replacing standard LRU policies.
5.  **The Orchestrator (Node.js):** "The Nervous System." Manages state, API Gateway, and Consensus.

---

## 2. The Tech Stack (The "Polyglot" Engine)

### The Orchestrator
* **Tech:** TypeScript (Node.js)
* **Role:** API Gateway, WebSocket Streaming, Type-Safe Job Dispatching.

### The Compute Layer
* **Risk Agent:** C++ Child Process (IPC).
* **Quant/Memory Agents:** Python (FastAPI/Gymnasium).

### The State Layer (AWS Free Tier)
* **Storage:** PostgreSQL (The Vault) & Redis (The Workspace).
* **Queue:** BullMQ (Reliability).

---

## 3. The Implementation Phases

### Phase 1: The Event-Driven Backbone (Current)
**Goal:** Build the Nervous System and Shared Truth.
* **1.1 The "God Mode" Schema:** (Done)
    * `market_data` (OHLCV, Numeric), `agent_logs`.
* **1.2 The Type-Safe Message Bus:** (In Progress)
    * TypeScript wrapper around BullMQ.
    * Enforces strict contract between Producer (API) and Consumer (Workers).

### Phase 2: The High-Performance Runtime
**Goal:** C++ Integration & Docker Sandbox.
* **2.1 Infrastructure:** Docker Compose Mesh Network.
* **2.2 Risk Agent:** C++ Binary for 10ms backtests.

### Phase 3: The Intelligent Agents (Python)
**Goal:** Reinforcement Learning Implementation.
* **3.1 Quant Agent:** Train PPO model on Price Action.
* **3.2 Memory Agent (New):**
    * **Goal:** Optimize Redis Cache Hit Rate.
    * **State:** [Access Frequency, Recency, Volatility].
    * **Action:** [Keep in Redis, Evict to Postgres, Delete].
    * **Reward:** +1 for Hit, -1 for Miss/Latency.

### Phase 4: Semantic Analysis (GenAI)
**Goal:** RAG & Sentiment.
* **4.1 RAG Pipeline:** `pgvector` for financial news.

### Phase 5: Cloud Deployment (AWS)
**Goal:** Production Hardening.
* **5.1 Security:** VPC, Firewalls.
* **5.2 CI/CD:** Automated testing pipelines.
