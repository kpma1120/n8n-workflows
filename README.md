## 🤖🧩 n8n Workflow Patterns — RAG, Agentic & Safety

## 📌 Overview
This repository is a **portfolio of [n8n](https://n8n.io) workflow patterns**, demonstrating how retrieval‑augmented generation (RAG), agentic orchestration, and safety engineering can be applied to real‑world knowledge work.  
Each subfolder corresponds to a **pattern showcase**, making the repo extensible and consistent as new workflows are added.

👉 Explore the current showcases by clicking the links below:

- [**RAG Pattern — HR Policies Q&A**](./RAG%20Pattern%20-%20HR%20Policies%20Q%26A/)  
  Imports HR Policies Handbook into a vector store, sets up embeddings and retrieval, and exposes a chat endpoint for interactive Q&A.

- [**Agent Planning & Decomposition Pattern — Multi‑Agent Equity Research Pipeline**](./Agent%20Planning%20%26%20Decomposition%20Pattern%20-%20Equity%20Research/)  
  Automates investor‑ready equity research reports from SEC 10‑K filings, combining analyst role prompts, drafting, editorial refinement, and final export.  

---

## 📂 Repository Structure
```
n8n-workflow-patterns/
├── Agent Planning & Decomposition Pattern - Equity Research/    # Agent Planning & Decomposition Pattern Showcase
├── RAG Pattern - HR Policies Q&A/                               # RAG Pattern Showcase
└── README.md                                                    # Top-level Overview
```
---

## 🧩 Common n8n Patterns
In LLM workflow orchestration, several **design patterns** are widely recognized.  
They can be grouped under three umbrellas: **RAG**, **Agentic**, and **Safety & Reliability**.

**RAG**
- **RAG (Retrieval‑Augmented Generation)** — grounding answers in external knowledge bases
- **Cross‑Corpus / Multi‑Document RAG** — synthesizing knowledge across multiple sources 
- **Evaluation & Reranking** — improving retrieval quality through scoring and reordering

**Agentic**
- **Agent Planning & Decomposition** — breaking complex tasks into subtasks and coordinating multiple agents
- **Reflection Loop** — iterative self‑critique and refinement of outputs

**Safety & Reliability**
- **Guardrails** — enforcing constraints, validation, and compliance checks on inputs/outputs
- **Reliability** — ensuring robustness via retries, fallbacks, and redundancy
- **LLMOps Monitoring** — tracking performance, accuracy, and stability in production

Several of these patterns are already demonstrated in the current showcases.

---

## 🔮 Future Scope
This portfolio will continue to explore **other valuable n8n workflow patterns** (e.g., Reflection Loop, Reranking, Cross‑Corpus RAG, Guardrails, Monitoring) and add them as new showcases under this repository.