"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-red-400 font-mono text-xs uppercase tracking-wider">
            Critical System Error
          </div>
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="text-sm text-zinc-400">
            A critical error occurred while rendering the documentation portal.
          </p>
          {error.digest && (
            <div className="p-2 bg-zinc-900 border border-zinc-800 rounded font-mono text-xs text-zinc-500">
              {error.digest}
            </div>
          )}
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-white text-black font-semibold text-xs rounded hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
