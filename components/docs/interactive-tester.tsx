"use client";

import React, { useState } from "react";
import { IconPlayerPlay, IconCheck, IconCopy } from "@tabler/icons-react";

interface InteractiveTesterProps {
  endpoint: string;
  method?: string;
  defaultPayload?: string;
}

export function InteractiveTester({
  endpoint,
  method = "POST",
  defaultPayload = '{\n  "name": "Pepe Quantum",\n  "symbol": "PEPEQ",\n  "supply": "1000000000",\n  "decimals": 9\n}',
}: InteractiveTesterProps) {
  const [apiKey, setApiKey] = useState("mp_live_demo_key_7789");
  const [payload, setPayload] = useState(defaultPayload);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  const [responseBody, setResponseBody] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTest = async () => {
    setLoading(true);
    setResponseStatus(null);
    setResponseBody(null);

    // Simulate mock testing response with realistic latency
    setTimeout(() => {
      try {
        let parsed = {};
        try {
          parsed = JSON.parse(payload);
        } catch {
          parsed = { error: "Invalid JSON format in payload body" };
        }

        setResponseStatus(200);
        setResponseBody(
          JSON.stringify(
            {
              success: true,
              message: "Endpoint simulation executed successfully",
              timestamp: new Date().toISOString(),
              endpoint,
              method,
              receivedData: parsed,
              result: {
                status: "confirmed",
                network: "solana-devnet",
                txSignature:
                  "5Kj9bXwV7M3...qL4rN8tP2 (simulated non-custodial execution)",
              },
            },
            null,
            2
          )
        );
      } catch (err: unknown) {
        setResponseStatus(500);
        setResponseBody(
          JSON.stringify(
            { error: err instanceof Error ? err.message : "Execution failed" },
            null,
            2
          )
        );
      } finally {
        setLoading(false);
      }
    }, 450);
  };

  const handleCopyResponse = () => {
    if (responseBody) {
      navigator.clipboard.writeText(responseBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 uppercase">
            {method}
          </span>
          <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
            {endpoint}
          </span>
        </div>
        <span className="text-[11px] text-zinc-600 dark:text-zinc-300 font-medium">
          Live Sandbox Tester
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            API Key (x-api-key header)
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full text-xs font-mono px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="mp_live_..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            Target Environment
          </label>
          <div className="flex items-center gap-2 h-[35px] text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>https://multipu.fun (Devnet & Mainnet-beta)</span>
          </div>
        </div>
      </div>

      {method !== "GET" && (
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
            Request Body (JSON)
          </label>
          <textarea
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            rows={5}
            className="w-full text-xs font-mono p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 leading-relaxed resize-none"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={handleTest}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 cursor-pointer"
        >
          <IconPlayerPlay className="w-3.5 h-3.5" />
          {loading ? "Executing Request..." : "Send Request"}
        </button>
      </div>

      {responseBody && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Response Status:
              </span>
              <span
                className={`font-mono px-2 py-0.5 rounded text-[11px] font-bold ${
                  responseStatus === 200
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400"
                    : "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400"
                }`}
              >
                {responseStatus} OK
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyResponse}
              className="flex items-center gap-1 text-[11px] text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <IconCheck className="w-3 h-3 text-emerald-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <IconCopy className="w-3 h-3" />
                  <span>Copy Body</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-3 text-xs font-mono rounded-lg bg-zinc-900 text-zinc-100 dark:bg-black overflow-x-auto">
            {responseBody}
          </pre>
        </div>
      )}
    </div>
  );
}
