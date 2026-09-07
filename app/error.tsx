"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconRefresh, IconHome, IconAlertTriangle } from "@tabler/icons-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Documentation runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-6 py-8 transition-colors">
      {/* Top Header */}
      <header className="mx-auto w-full max-w-4xl flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image src="/logo.png" alt="Multipu" fill sizes="24px" className="object-contain" priority />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Multipu <span className="text-xs font-mono font-normal text-zinc-400 dark:text-zinc-500 ml-1">Docs</span>
          </span>
        </Link>
        <span className="font-mono text-[11px] text-red-500 uppercase tracking-wider">
          Runtime Error
        </span>
      </header>

      {/* Center Error */}
      <main className="mx-auto w-full max-w-xl py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs font-mono">
          <IconAlertTriangle size={13} />
          <span>Documentation Renderer Error</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          An error occurred while loading this page.
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
          The documentation renderer encountered an unexpected issue while assembling this view.
        </p>

        {error.digest && (
          <div className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-900 font-mono text-xs text-zinc-500 border border-zinc-200 dark:border-zinc-800 inline-block">
            Digest ID: {error.digest}
          </div>
        )}

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <IconRefresh size={14} />
            <span>Retry Operation</span>
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <IconHome size={14} />
            <span>Return Home</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-4xl pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-500">
        <span>Multipu Documentation Portal</span>
        <span>Version 0.1.0</span>
      </footer>
    </div>
  );
}
