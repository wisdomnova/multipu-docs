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
    <div className="rounded-lg overflow-hidden bg-[#0c0d14] border border-white/[0.08] text-gray-200 text-xs font-mono my-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          {title && <span className="text-gray-400 font-sans text-xs font-medium mr-2">{title}</span>}
          {tabs && (
            <div className="flex items-center gap-1">
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(i)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                    activeTab === i
                      ? "bg-white/[0.1] text-white font-medium"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
          {!tabs && (
            <span className="text-[10px] uppercase text-gray-400 tracking-wider font-semibold">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white transition-colors p-1 rounded cursor-pointer"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <IconCheck size={13} className="text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <IconCopy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code contents */}
      <div className="p-4 overflow-x-auto leading-relaxed max-h-[460px]">
        <pre className="font-mono text-[12.5px] leading-6 text-gray-200">
          <code>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
}
