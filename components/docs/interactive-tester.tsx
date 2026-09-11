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

  const isGet = method === "GET";

  return (
    <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#181818] p-5 sm:p-6 space-y-5 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded-md border uppercase ${
              isGet
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                : "bg-purple-500/15 text-purple-400 border-purple-500/30"
            }`}
          >
            {method}
          </span>
          <span className="font-mono text-xs text-zinc-300 bg-[#121212] px-2.5 py-1 rounded-lg border border-white/[0.06]">
            {endpoint}
          </span>
        </div>
        <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
          Live Sandbox Tester
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            API Key (x-api-key header)
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full text-xs font-mono px-3 py-2 rounded-xl border border-white/[0.08] bg-[#141414] text-white focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 transition-all placeholder:text-zinc-600"
            placeholder="mp_live_..."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Target Environment
          </label>
          <div className="flex items-center gap-2 h-[35px] px-3 rounded-xl border border-white/[0.08] bg-[#141414] text-xs font-mono text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse inline-block shrink-0"></span>
            <span className="truncate">https://multipu.fun (Devnet & Mainnet)</span>
          </div>
        </div>
      </div>

      {!isGet && (
        <div className="space-y-1.5">
          <label className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
            Request Body (JSON)
          </label>
          <textarea
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            rows={5}
            className="w-full text-xs font-mono p-3 rounded-xl border border-white/[0.08] bg-[#141414] text-zinc-200 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/30 leading-relaxed resize-none transition-all"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={handleTest}
          disabled={loading}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 active:scale-95 transition-all disabled:opacity-50 cursor-pointer shadow-md"
        >
          <IconPlayerPlay className="w-3.5 h-3.5 fill-current" />
          {loading ? "Executing Request..." : "Send Request"}
        </button>
      </div>

      {responseBody && (
        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 font-medium">Response Status:</span>
              <span
                className={`font-mono px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                  responseStatus === 200
                    ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                    : "bg-red-500/15 text-red-400 border-red-500/30"
                }`}
              >
                {responseStatus} OK
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyResponse}
              className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer px-2.5 py-1 rounded-full hover:bg-white/[0.06]"
            >
              {copied ? (
                <>
                  <IconCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <IconCopy className="w-3 h-3" />
                  <span>Copy Body</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 text-xs font-mono rounded-xl bg-[#101010] text-zinc-300 border border-white/[0.06] overflow-x-auto leading-relaxed">
            {responseBody}
          </pre>
        </div>
      )}
    </div>
  );
}
