import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SitelinksJsonLd } from "@/components/docs/sitelinks-json-ld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.multipu.fun"),
  title: "Multipu Developer Documentation - REST API & KeeperHub MCP Protocol",
  description:
    "Official developer documentation for Multipu. Comprehensive REST API specifications, KeeperHub Model Context Protocol (MCP) AI agent tools, and multi-chain launchpad orchestrator integration guide.",
  keywords: [
    "Multipu",
    "Multipu Docs",
    "Multipu API",
    "KeeperHub MCP",
    "Model Context Protocol",
    "Solana launchpad API",
    "Meteora DLMM",
    "Pump.fun API",
    "Bags App",
    "Four.meme",
    "Pons Protocol",
    "Robinhood Chain",
    "AI Agent Trading",
    "OlaXBT Signals",
    "DeFi API",
    "Token Launch Orchestrator",
  ],
  authors: [{ name: "Multipu Engineering", url: "https://multipu.fun" }],
  creator: "Multipu",
  publisher: "Multipu",
  alternates: {
    canonical: "https://docs.multipu.fun",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Multipu Developer Docs | REST API & KeeperHub MCP Protocol",
    description:
      "Automate token creation, multi-launchpad dispatching, and agent market telemetry with Multipu REST API and KeeperHub Model Context Protocol (MCP) server.",
    url: "https://docs.multipu.fun",
    siteName: "Multipu Developer Documentation",
    images: [
      {
        url: "https://docs.multipu.fun/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Multipu Developer Documentation - The Multi-Chain API & MCP Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multipu Developer Docs | REST API & KeeperHub MCP Protocol",
    description:
      "Official developer documentation for Multipu REST API & KeeperHub MCP server for AI agents.",
    images: ["https://docs.multipu.fun/og.png"],
    creator: "@multipu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3YYBPW61GD"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3YYBPW61GD');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#121212] text-zinc-900 dark:text-white selection:bg-purple-600 selection:text-white transition-colors duration-200">
        <SitelinksJsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
