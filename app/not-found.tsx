import Link from "next/link";
import Image from "next/image";
import { IconBook, IconCode, IconServer, IconArrowRight, IconHome } from "@tabler/icons-react";

export default function NotFound() {
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
        <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
          404 Not Found
        </span>
      </header>

      {/* Center Content */}
      <main className="mx-auto w-full max-w-xl py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
          <span>Documentation Reference Error</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Document page not found.
        </h1>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto">
          The requested documentation article, API parameter schema, or guide does not exist or may have been relocated in the latest release.
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
          <Link
            href="/"
            className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <IconHome size={14} className="text-zinc-500" />
                Documentation Home
              </span>
              <IconArrowRight size={13} className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Return to the platform guide &amp; quickstart.
            </p>
          </Link>

          <Link
            href="/#api-reference"
            className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-900/30 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <IconCode size={14} className="text-zinc-500" />
                REST API Reference
              </span>
              <IconArrowRight size={13} className="text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Browse endpoint parameters and schemas.
            </p>
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono">
          <a
            href="https://multipu.fun"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            &larr; Back to multipu.fun
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <a
            href="https://github.com/wisdomnova/multipu-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            GitHub Repository
          </a>
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
