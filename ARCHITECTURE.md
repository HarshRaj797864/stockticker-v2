# ARCHITECTURE.md - The Agentic Algo-Trading Orchestrator

## 1. High-Level Concept: The "Agentic" Shift

We are moving beyond a standard "Linear Chain" architecture. We are building an **Agentic Orchestration System** where a Federation of Specialized Agents collaborates to form a trade consensus.

### The Agent Federation
1.  **The Analyst Agent (GenAI):** Reads news, digests unstructured text, and intuits market sentiment.
2.  **The Quant Agent (ML):** Predicts trends using Price/Volume data (Python/XGBoost).
3.  **The Risk Agent (C++ High-Performance):** Deterministic execution engine. Runs high-speed backtests and math-heavy risk calculations.
4.  **The Orchestrator (Node.js):** Manages state, synchronization, and final execution.

---

## 2. The Tech Stack (The "Polyglot" Engine)

### The Orchestrator (The Nervous System)
* **Tech:** TypeScript (Node.js)
* **Role:** API Gateway, WebSocket Streaming, State Management.
* **Why:** High-concurrency I/O to manage multiple agents without blocking.

### The Agents (The Brains & Muscle)
* **Analyst/Quant Agent:** Python (LangChain, Stable-Baselines3).
    * *Why:* Best-in-class libraries for AI and ML.
* **Risk Agent (Service B):** C++ (Native Child Process).
    * *Why:* **"God-Tier" Performance.** Handles heavy number-crunching (Backtesting) with near-zero latency, avoiding Node's event loop blocking.

### The Infrastructure (AWS Free Tier)
* **Compute:** AWS EC2 (t2.micro / Ubuntu).
* **State:** PostgreSQL (Persistence) & Redis (Communication).
* **Networking:** Nginx Reverse Proxy, Docker Compose Mesh Network.

---

## 3. The Roadmap & Implementation Phases

### Phase 1: The Event-Driven Backbone
**Goal:** Build the "Nervous System" and Shared Truth.
* **1.1 The "God Mode" Schema:**
    * PostgreSQL `market_data` table using `NUMERIC` types.
    * `agent_logs` for debugging AI thought processes.
* **1.2 The Async Message Bus:**
    * Redis/BullMQ for fault-tolerant agent communication.

### Phase 2: The High-Performance Runtime (C++ Integration)
**Goal:** Build the C++ Execution Engine.
* **2.1 The "Sandboxed" Environment:**
    * Docker containerization for polyglot services (Node + Python + C++).
* **2.2 Service B (The Risk Agent):**
    * Node.js spawns a localized C++ binary for backtesting.
    * Data passed via IPC (Inter-Process Communication) or Shared Volumes to minimize serialization overhead.

### Phase 3: The Quantitative Agent (Python)
**Goal:** RL & ML Logic.
* **3.1 Training:** Offline RL pipeline (Gymnasium).
* **3.2 Inference:** FastAPI microservice serving real-time predictions.

### Phase 4: The Analyst Agent (GenAI)
**Goal:** Semantic Understanding.
* **4.1 RAG:** `pgvector` for financial news context.
* **4.2 Sentiment:** LangChain pipeline for textual analysis.

### Phase 5: Cloud Deployment (AWS)
**Goal:** Production DevOps.
* **5.1 Security:** VPC configuration, Security Groups (Firewall), SSH hardening.
* **5.2 Orchestration:** Docker Compose on EC2 with Nginx as the entry point.
