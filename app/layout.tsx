import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Multipu Developer Documentation - REST API & KeeperHub MCP",
  description:
    "Developer documentation, REST API endpoints, KeeperHub Model Context Protocol (MCP) tool schemas, and multi-chain launch orchestration guide.",
  alternates: {
    canonical: "https://docs.multipu.fun",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Multipu Developer Docs | API & MCP Protocol",
    description:
      "Automate token creation, multi-launchpad dispatching, and agent market telemetry with Multipu API & KeeperHub MCP server.",
    url: "https://docs.multipu.fun",
    siteName: "Multipu Developer Documentation",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Multipu Developer Documentation - The Multi-Chain API & MCP Protocol",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multipu Developer Docs | API & MCP Protocol",
    description:
      "Developer documentation for Multipu REST API and KeeperHub Model Context Protocol (MCP).",
    images: ["/og.png"],
  },
};

import { SitelinksJsonLd } from "@/components/docs/sitelinks-json-ld";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
      <body className="min-h-full flex flex-col">
        <SitelinksJsonLd />
        {children}
      </body>
    </html>
  );
}
