"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

interface CodeBlockProps {
  tabs?: { label: string; code: string; language?: string }[];
  code?: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ tabs, code, language = "json", title }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = tabs ? tabs[activeTab]?.code : code || "";

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-[#141414] border border-white/[0.08] text-zinc-200 text-xs font-mono my-4 shadow-xl">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-[#181818]/70">
        <div className="flex items-center gap-2">
          {title && <span className="text-zinc-300 font-sans text-xs font-medium mr-2">{title}</span>}
          {tabs && (
            <div className="flex items-center gap-1 bg-[#101010] p-0.5 rounded-full border border-white/[0.06]">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                    activeTab === i
                      ? "bg-white/[0.12] text-white font-medium border border-white/[0.08] shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
          {!tabs && (
            <span className="text-[10px] uppercase text-zinc-400 tracking-wider font-semibold font-mono bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors px-2.5 py-1 rounded-full hover:bg-white/[0.06] cursor-pointer"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <IconCheck size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-sans font-medium">Copied</span>
            </>
          ) : (
            <>
              <IconCopy size={13} />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code contents */}
      <div className="p-4 sm:p-5 overflow-x-auto leading-relaxed max-h-[460px] bg-[#101010]">
        <pre className="font-mono text-[12.5px] leading-6 text-zinc-300">
          <code>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
}
