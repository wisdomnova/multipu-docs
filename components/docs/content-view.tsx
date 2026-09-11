"use client";

import React from "react";
import { DocSection } from "./docs-data";
import { CodeBlock } from "./code-block";
import { InteractiveTester } from "./interactive-tester";
import { IconChevronRight, IconArrowUpRight, IconCircleCheck } from "@tabler/icons-react";
import { motion, fadeUp } from "@/components/motion";

interface ContentViewProps {
  section: DocSection;
  onNavigateSection?: (sectionId: string) => void;
}

export function ContentView({ section, onNavigateSection }: ContentViewProps) {
  return (
    <motion.article
      key={section.id}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="max-w-3xl w-full py-8 px-4 sm:px-8 md:px-10 space-y-10"
    >
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
        <span className="text-zinc-500">Docs</span>
        <IconChevronRight className="w-3 h-3 text-zinc-600" />
        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-300">
          {section.category}
        </span>
        <IconChevronRight className="w-3 h-3 text-zinc-600" />
        <span className="text-white font-medium">{section.title}</span>
      </div>

      {/* Main Title & Description */}
      <div id={section.toc[0]?.id || "guide-summary"} className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          {section.title}
        </h1>
        <p className="text-[15px] sm:text-base leading-relaxed text-zinc-400">
          {section.description}
        </p>
      </div>

      {/* "You'll need to:" Section styled in a sleek card */}
      {section.requirements && section.requirements.length > 0 && (
        <section id="you-will-need" className="p-5 sm:p-6 rounded-2xl border border-white/[0.08] bg-[#181818] space-y-3.5 shadow-lg">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            Prerequisites & Requirements
          </h2>
          <ul className="space-y-2.5 text-[13.5px] text-zinc-300">
            {section.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <IconCircleCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{req}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Introduction specific cards or details */}
      {section.id === "introduction" && (
        <>
          <section id="account-structure" className="space-y-3 pt-2">
            <h2 className="text-lg font-semibold text-white">
              Account structure
            </h2>
            <p className="text-[14.5px] leading-relaxed text-zinc-400">
              Typically we recommend spinning up an individual developer session or API key for each of your bot workers or autonomous agent instances. This ensures segregated key limits, transparent activity logs, and real-time execution tracking. Account generation is instantaneous and non-custodial.
            </p>
            <p className="text-[14.5px] leading-relaxed text-zinc-400">
              Alternatively, multiple agents can operate under a pooled creator treasury, enabling collective liquidity injection and automated fee-claim distribution to your parent vault address.
            </p>
          </section>

          <section id="supported-chains" className="space-y-4 pt-2">
            <h2 className="text-lg font-semibold text-white">
              Supported Chains & Launchpads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#181818] hover:border-purple-500/40 transition-all space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white">Solana</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">Fast</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pump.fun, Meteora DLMM, and Bags fair launch curves with sub-second finality.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#181818] hover:border-purple-500/40 transition-all space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white">BNB Chain</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">Low Gas</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Four.meme bonding curve integration with low gas overhead.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#181818] hover:border-purple-500/40 transition-all space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-white">Robinhood Chain</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">Pons</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pons Protocol sequencer with fair time-prioritization ordering.
                </p>
              </div>
            </div>
          </section>

          <section id="next-steps" className="space-y-3 pt-2">
            <h2 className="text-lg font-semibold text-white">
              Next steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <button
                type="button"
                onClick={() => onNavigateSection && onNavigateSection("quickstart")}
                className="p-5 rounded-2xl border border-white/[0.08] hover:border-purple-500/50 bg-[#181818] hover:bg-[#1a1a1a] text-left transition-all cursor-pointer group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    Quickstart Guide
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-xs text-zinc-400 mt-1.5">
                  Deploy your first token in 5 minutes
                </div>
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection && onNavigateSection("keeperhub-mcp")}
                className="p-5 rounded-2xl border border-white/[0.08] hover:border-purple-500/50 bg-[#181818] hover:bg-[#1a1a1a] text-left transition-all cursor-pointer group shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    KeeperHub MCP Setup
                  </div>
                  <IconArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-xs text-zinc-400 mt-1.5">
                  Plug AI agents directly into market tools
                </div>
              </button>
            </div>
          </section>
        </>
      )}

      {/* Code Snippets if present */}
      {section.codeSnippet && (
        <section id="code-example" className="space-y-3 pt-2">
          {section.codeSnippet.title && (
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              {section.codeSnippet.title}
            </h2>
          )}
          <CodeBlock
            code={section.codeSnippet.code}
            language={section.codeSnippet.language}
            tabs={section.codeSnippet.tabs}
          />
        </section>
      )}

      {/* Response Snippet if present */}
      {section.responseSnippet && (
        <section id="response-payload" className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Sample Response
            </h2>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              HTTP {section.responseSnippet.status}
            </span>
          </div>
          <CodeBlock
            code={section.responseSnippet.code}
            language="json"
            tabs={[{ label: "Response Body", code: section.responseSnippet.code, language: "json" }]}
          />
        </section>
      )}

      {/* Table Data if present */}
      {section.tableData && (
        <section id="table-parameters" className="space-y-3 pt-2">
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            {section.tableData.title}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#181818] shadow-xl">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#141414] text-zinc-400">
                  {section.tableData.headers.map((h, i) => (
                    <th key={i} className="py-3 px-4 font-semibold text-xs font-mono uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {section.tableData.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    {row.map((col, colIdx) => (
                      <td
                        key={colIdx}
                        className={`py-3 px-4 ${
                          colIdx === 0
                            ? "font-mono font-medium text-purple-300"
                            : "text-zinc-300"
                        }`}
                      >
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Interactive Tester for Endpoints */}
      {section.id.startsWith("endpoint-") && (
        <InteractiveTester
          endpoint={
            section.id === "endpoint-tokens"
              ? "/api/tokens"
              : section.id === "endpoint-launches"
              ? "/api/launches"
              : section.id === "endpoint-explore"
              ? "/api/launches/explore"
              : section.id === "endpoint-trade"
              ? "/api/trade/swap"
              : section.id === "endpoint-balances"
              ? "/api/wallet/balances"
              : "/api/earnings"
          }
          method={
            section.id === "endpoint-explore" ||
            section.id === "endpoint-balances" ||
            section.id === "endpoint-earnings"
              ? "GET"
              : "POST"
          }
        />
      )}

      {/* Footer Navigation */}
      <div className="pt-10 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
        <div>
          <span>Documentation updated for Multipu v0.1.0</span>
        </div>
        <a
          href="https://github.com/wisdomnova/multipu-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
        >
          <span>Edit this page on GitHub</span>
          <IconArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.article>
  );
}
