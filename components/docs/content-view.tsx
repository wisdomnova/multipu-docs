"use client";

import React from "react";
import { DocSection } from "./docs-data";
import { CodeBlock } from "./code-block";
import { InteractiveTester } from "./interactive-tester";
import Image from "next/image";
import { IconChevronRight, IconArrowUpRight, IconShieldLock, IconBolt, IconServer } from "@tabler/icons-react";

interface ContentViewProps {
  section: DocSection;
  onNavigateSection?: (sectionId: string) => void;
}

export function ContentView({ section, onNavigateSection }: ContentViewProps) {
  return (
    <article className="max-w-3xl w-full py-8 px-4 md:px-10 space-y-10">
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-300 font-medium">
        <span>Documentation</span>
        <IconChevronRight className="w-3.5 h-3.5" />
        <span>{section.category}</span>
        <IconChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-900 dark:text-zinc-100">{section.title}</span>
      </div>

      {/* Main Title & Description */}
      <div id={section.toc[0]?.id || "guide-summary"} className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          {section.title}
        </h1>
        <p className="text-[15px] sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {section.description}
        </p>
      </div>

      {/* "You'll need to:" Section matching screenshot */}
      {section.requirements && section.requirements.length > 0 && (
        <section id="you-will-need" className="space-y-3 pt-2">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            You&apos;ll need to:
          </h2>
          <ul className="space-y-2 text-[14px] text-zinc-600 dark:text-zinc-400">
            {section.requirements.map((req, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-zinc-400 dark:text-zinc-500 font-bold select-none">
                  •
                </span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Introduction specific cards or details */}
      {section.id === "introduction" && (
        <>
          <section id="account-structure" className="space-y-3 pt-2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Account structure
            </h2>
            <p className="text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Typically we recommend spinning up an individual developer session or API key for each of your bot workers or autonomous agent instances. This ensures segregated key limits, transparent activity logs, and real-time execution tracking. Account generation is instantaneous and non-custodial.
            </p>
            <p className="text-[14.5px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              Alternatively, multiple agents can operate under a pooled creator treasury, enabling collective liquidity injection and automated fee-claim distribution to your parent vault address.
            </p>
          </section>

          <section id="supported-chains" className="space-y-4 pt-2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Supported Chains & Launchpads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs">
                    SOL
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Solana</h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Pump.fun, Meteora DLMM, and Bags fair launch curves with sub-second finality.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-xs">
                    BNB
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">BNB Chain</h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Four.meme bonding curve integration with low gas overhead.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                    RH
                  </div>
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Robinhood Chain</h3>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Pons Protocol sequencer with fair time-prioritization ordering.
                </p>
              </div>
            </div>
          </section>

          <section id="next-steps" className="space-y-3 pt-2">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Next steps
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onNavigateSection && onNavigateSection("quickstart")}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900/50 text-left transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <IconBolt className="w-4 h-4 text-amber-500" />
                    Quickstart Guide
                  </div>
                  <div className="text-[12px] text-zinc-500 mt-1">
                    Deploy your first token in 5 minutes
                  </div>
                </div>
                <IconChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateSection && onNavigateSection("keeperhub-mcp")}
                className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white dark:bg-zinc-900/50 text-left transition-all group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                    <IconServer className="w-4 h-4 text-indigo-500" />
                    KeeperHub MCP Setup
                  </div>
                  <div className="text-[12px] text-zinc-500 mt-1">
                    Plug AI agents directly into market tools
                  </div>
                </div>
                <IconChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </section>
        </>
      )}

      {/* Code Snippets if present */}
      {section.codeSnippet && (
        <section id="code-example" className="space-y-3 pt-2">
          {section.codeSnippet.title && (
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
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
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Sample Response
            </h2>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
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
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {section.tableData.title}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200/90 dark:border-zinc-800">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400">
                  {section.tableData.headers.map((h, i) => (
                    <th key={i} className="py-2.5 px-4 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/60 dark:divide-zinc-800/60 bg-white dark:bg-zinc-950">
                {section.tableData.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors"
                  >
                    {row.map((col, colIdx) => (
                      <td
                        key={colIdx}
                        className={`py-2.5 px-4 ${
                          colIdx === 0
                            ? "font-mono font-medium text-zinc-950 dark:text-zinc-100"
                            : "text-zinc-600 dark:text-zinc-400"
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
      <div className="pt-10 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
        <div>
          <span>Documentation updated for Multipu v0.1.0</span>
        </div>
        <a
          href="https://github.com/multipu/multipu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
        >
          <span>Edit this page on GitHub</span>
          <IconArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
