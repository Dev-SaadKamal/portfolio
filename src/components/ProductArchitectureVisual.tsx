"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Database, 
  ArrowDown, 
  ShieldCheck, 
  Server, 
  CheckCircle2, 
  Activity
} from "lucide-react";

export function ProductArchitectureVisual() {
  const [activeTab, setActiveTab] = useState<"architecture" | "endpoint" | "schema">("architecture");

  return (
    <div className="relative w-full rounded-2xl bg-[#14171C] text-[#FAFAF7] border border-[#2A2E38] shadow-2xl overflow-hidden">
      {/* Visual Window Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#242832] bg-[#111317]">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E85D5D]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E8A94F]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#2FBF8F]/80" />
          <span className="ml-2 font-mono text-[11px] text-ash-light tracking-wider">
            system_architecture.v1.prod
          </span>
        </div>

        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === "architecture"
                ? "bg-[#242933] text-emerald-signal border border-emerald-signal/40"
                : "text-ash hover:text-[#FAFAF7]"
            }`}
          >
            System Pipeline
          </button>
          <button
            onClick={() => setActiveTab("endpoint")}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === "endpoint"
                ? "bg-[#242933] text-emerald-signal border border-emerald-signal/40"
                : "text-ash hover:text-[#FAFAF7]"
            }`}
          >
            REST API
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
              activeTab === "schema"
                ? "bg-[#242933] text-emerald-signal border border-emerald-signal/40"
                : "text-ash hover:text-[#FAFAF7]"
            }`}
          >
            Data Model
          </button>
        </div>
      </div>

      {/* Main Visual Display */}
      <div className="p-4 sm:p-6 lg:p-7">
        {activeTab === "architecture" && (
          <div className="space-y-4 sm:space-y-5">
            {/* 1. Client Layer */}
            <div className="p-4 rounded-xl bg-[#1A1E26] border border-[#2C313E] relative group hover:border-emerald-signal/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-dim border border-emerald-signal/30 flex items-center justify-center text-emerald-signal">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-signal font-semibold">
                        Frontend Tier
                      </span>
                      <span className="text-[10px] font-mono bg-[#242832] text-ash-light px-1.5 py-0.5 rounded">
                        Client Layer
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#FAFAF7] mt-0.5">
                      React.js &amp; Next.js Reactive Interface
                    </h4>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-1 text-[11px] font-mono text-emerald-signal bg-emerald-dim px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-signal animate-pulse" />
                  <span>Interactive UI</span>
                </div>
              </div>
              <p className="text-xs text-ash-light mt-2.5 leading-relaxed">
                Componentized dashboard views, modular Tailwind styling, role-filtered states, and client-side route guards.
              </p>
            </div>

            {/* Pipeline Connection 1 */}
            <div className="flex items-center justify-center -my-2 relative z-10">
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111317] border border-[#2B303C] text-[10px] font-mono text-ash-light">
                <ArrowDown className="w-3 h-3 text-emerald-signal" />
                <span>REST / JSON · HTTPS / TLS</span>
                <span className="text-emerald-signal">200 OK</span>
              </div>
            </div>

            {/* 2. API Gateway & Business Logic */}
            <div className="p-4 rounded-xl bg-[#1A1E26] border border-[#2C313E] relative group hover:border-amber-warm/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-dim border border-amber-warm/30 flex items-center justify-center text-amber-warm">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-amber-warm font-semibold">
                        Backend Service
                      </span>
                      <span className="text-[10px] font-mono bg-[#242832] text-ash-light px-1.5 py-0.5 rounded">
                        Express &amp; Node
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#FAFAF7] mt-0.5">
                      RESTful API Gateway &amp; JWT Middleware
                    </h4>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono text-amber-warm bg-amber-dim px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Role Authorization</span>
                </div>
              </div>
              <p className="text-xs text-ash-light mt-2.5 leading-relaxed">
                Stateless token verification, bcrypt password hashing, payload validation, and controller-level business logic.
              </p>
            </div>

            {/* Pipeline Connection 2 */}
            <div className="flex items-center justify-center -my-2 relative z-10">
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111317] border border-[#2B303C] text-[10px] font-mono text-ash-light">
                <ArrowDown className="w-3 h-3 text-emerald-signal" />
                <span>Mongoose ORM Queries</span>
                <span className="text-emerald-signal">12ms Latency</span>
              </div>
            </div>

            {/* 3. Database Layer */}
            <div className="p-4 rounded-xl bg-[#1A1E26] border border-[#2C313E] relative group hover:border-emerald-signal/50 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-dim border border-emerald-signal/30 flex items-center justify-center text-emerald-signal">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-signal font-semibold">
                        Data Persistence
                      </span>
                      <span className="text-[10px] font-mono bg-[#242832] text-ash-light px-1.5 py-0.5 rounded">
                        MongoDB Atlas
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#FAFAF7] mt-0.5">
                      Structured Document Schemas &amp; Indexing
                    </h4>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-1 text-[11px] font-mono text-emerald-signal bg-emerald-dim px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ACID Validated</span>
                </div>
              </div>
              <p className="text-xs text-ash-light mt-2.5 leading-relaxed">
                Structured collections for users, tasks, cohort assignments, and submission status with indexing for query efficiency.
              </p>
            </div>
          </div>
        )}

        {activeTab === "endpoint" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-lg bg-[#0E1014] border border-[#242832]">
              <div className="flex items-center justify-between text-ash mb-2 pb-2 border-b border-[#1E222A]">
                <span className="text-emerald-signal font-semibold">POST /api/v1/auth/login</span>
                <span className="text-emerald-signal bg-emerald-dim px-1.5 py-0.5 rounded text-[10px]">200 OK · 24ms</span>
              </div>
              <pre className="text-ash-light overflow-x-auto text-[11px] leading-5">
{`// Client Request Payload
{
  "email": "lead@company.com",
  "role": "admin"
}

// Server Response (JWT Signed)
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "user": { "id": "usr_9918", "permissions": ["cohort:write", "review:approve"] }
}`}
              </pre>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0E1014] border border-[#242832]">
              <div className="flex items-center justify-between text-ash mb-2 pb-2 border-b border-[#1E222A]">
                <span className="text-amber-warm font-semibold">PATCH /api/v1/tasks/:id/status</span>
                <span className="text-emerald-signal bg-emerald-dim px-1.5 py-0.5 rounded text-[10px]">200 OK · 16ms</span>
              </div>
              <pre className="text-ash-light overflow-x-auto text-[11px] leading-5">
{`// Status Transition Payload
{
  "submissionId": "sub_842",
  "approvalStatus": "APPROVED",
  "reviewerNotes": "Code adheres to standards. Merged."
}`}
              </pre>
            </div>
          </div>
        )}

        {activeTab === "schema" && (
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3.5 rounded-lg bg-[#0E1014] border border-[#242832]">
              <div className="flex items-center justify-between text-ash mb-2 pb-2 border-b border-[#1E222A]">
                <span className="text-emerald-signal font-semibold">Schema: TaskSubmission</span>
                <span className="text-ash-light text-[10px]">Mongoose Model</span>
              </div>
              <pre className="text-ash-light overflow-x-auto text-[11px] leading-5">
{`const TaskSubmissionSchema = new mongoose.Schema({
  cohortId:     { type: ObjectId, ref: 'Cohort', required: true },
  internId:     { type: ObjectId, ref: 'User', required: true },
  repositoryUrl:{ type: String, trim: true },
  submittedAt:  { type: Date, default: Date.now },
  status:       { type: String, enum: ['PENDING', 'APPROVED', 'REVISION'], default: 'PENDING' },
  evaluatedBy:  { type: ObjectId, ref: 'User' }
}, { timestamps: true });`}
              </pre>
            </div>
          </div>
        )}

        {/* System Telemetry Footer */}
        <div className="mt-4 pt-3.5 border-t border-[#222630] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-ash">
          <div className="flex items-center space-x-2">
            <Activity className="w-3.5 h-3.5 text-emerald-signal" />
            <span>MERN Stack Architecture</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-ash-light">Frontend ↔ API ↔ MongoDB</span>
            <span className="text-emerald-signal">● 100% Type-Safe Contracts</span>
          </div>
        </div>
      </div>
    </div>
  );
}
