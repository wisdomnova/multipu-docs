export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

export interface DocSection {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements?: string[];
  contentHtml?: string;
  codeSnippet?: {
    language?: string;
    code?: string;
    title?: string;
    tabs?: { label: string; code: string; language?: string }[];
  };
  tableData?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  responseSnippet?: {
    code: string;
    status: number;
  };
  toc: TocItem[];
}

export interface NavGroup {
  name: string;
  items: {
    id: string;
    title: string;
    badge?: string;
  }[];
}

export const navGroups: NavGroup[] = [
  {
    name: "Overview",
    items: [
      { id: "introduction", title: "Introduction" },
      { id: "quickstart", title: "Quickstart Guide" },
      { id: "api-reference", title: "API Reference" },
    ],
  },
  {
    name: "Concepts",
    items: [
      { id: "authentication", title: "Authentication & Keys" },
      { id: "multi-launch", title: "Multi-Launch Orchestration" },
      { id: "bonding-curves", title: "Bonding Curves & DLMM" },
      { id: "fee-treasury", title: "Fee Routing & Royalties" },
    ],
  },
  {
    name: "AI Agents & MCP",
    items: [
      { id: "keeperhub-mcp", title: "KeeperHub MCP Server", badge: "MCP" },
      { id: "mcp-tools", title: "Agent Tool Declarations" },
      { id: "olaxbt-signals", title: "OlaXBT Signal Stream" },
    ],
  },
  {
    name: "Supported Networks",
    items: [
      { id: "solana", title: "Solana Cluster" },
      { id: "bsc", title: "BNB Smart Chain" },
      { id: "robinhood", title: "Robinhood Chain" },
    ],
  },
  {
    name: "REST Endpoints",
    items: [
      { id: "endpoint-tokens", title: "Tokens API (/api/tokens)" },
      { id: "endpoint-launches", title: "Launches API (/api/launches)" },
      { id: "endpoint-explore", title: "DEX Scanner (/api/explore)" },
      { id: "endpoint-trade", title: "Instant Swaps (/api/trade)" },
      { id: "endpoint-balances", title: "Wallet Balances (/api/balances)" },
      { id: "endpoint-earnings", title: "Creator Earnings (/api/earnings)" },
    ],
  },
  {
    name: "Developers",
    items: [
      { id: "rate-limits", title: "Rate Limits & Quotas" },
      { id: "error-codes", title: "Error Codes & Statuses" },
      { id: "sdk-typescript", title: "TypeScript SDK" },
      { id: "changelog", title: "Changelog" },
    ],
  },
];

export const docSections: Record<string, DocSection> = {
  introduction: {
    id: "introduction",
    category: "Overview",
    title: "Platform Guide",
    description:
      "If you're automating token creation and trading execution across multiple launchpads, Multipu provides a unified orchestration control plane. This guide addresses how to integrate Multipu REST endpoints, Model Context Protocol (MCP) servers, and multi-chain launch tooling.",
    requirements: [
      "Obtain an authenticated developer API Key or connect via Web3 SIWS / SIWB wallet.",
      "Identify target launchpads (Pump.fun, Meteora, Bags, Four.meme, or Pons).",
      "Connect your agent framework (Claude Desktop, Cursor, Custom Agent) to KeeperHub MCP.",
    ],
    toc: [
      { id: "guide-summary", title: "Platform Guide" },
      { id: "you-will-need", title: "You'll need to:" },
      { id: "account-structure", title: "Account structure" },
      { id: "supported-chains", title: "Supported Chains" },
      { id: "next-steps", title: "Next steps" },
    ],
  },

  quickstart: {
    id: "quickstart",
    category: "Overview",
    title: "Quickstart Guide",
    description:
      "Get up and running with the Multipu API in under five minutes. You can create a token, dispatch to launchpads, and query live market data programmatically using standard HTTP requests or the KeeperHub MCP server.",
    requirements: [
      "Generate an API key in your Multipu Dashboard under API Keys.",
      "Include the header 'x-api-key: mp_live_...' in all requests.",
      "Use 'https://multipu.fun' as your base endpoint.",
    ],
    codeSnippet: {
      language: "bash",
      title: "Create and Dispatch Token in 1 Request",
      tabs: [
        {
          label: "cURL",
          language: "bash",
          code: `curl -X POST https://multipu.fun/api/tokens \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: mp_live_your_api_key_here" \\
  -d '{
    "name": "Pepe Quantum",
    "symbol": "PEPEQ",
    "supply": "1000000000",
    "decimals": 9,
    "description": "Next generation AI-curated meme token.",
    "imageUrl": "https://arweave.net/example-logo.png"
  }'`,
        },
        {
          label: "TypeScript",
          language: "typescript",
          code: `import { MultipuClient } from "@multipu/sdk";

const client = new MultipuClient({
  apiKey: process.env.MULTIPU_API_KEY!,
});

const token = await client.tokens.create({
  name: "Pepe Quantum",
  symbol: "PEPEQ",
  supply: "1000000000",
  decimals: 9,
  description: "Next generation AI-curated meme token.",
});

console.log("Created draft token ID:", token.id);`,
        },
        {
          label: "Python",
          language: "python",
          code: `import requests

url = "https://multipu.fun/api/tokens"
headers = {
    "Content-Type": "application/json",
    "x-api-key": "mp_live_your_api_key_here"
}
payload = {
    "name": "Pepe Quantum",
    "symbol": "PEPEQ",
    "supply": "1000000000",
    "decimals": 9,
    "description": "Next generation AI-curated meme token."
}

res = requests.post(url, json=payload, headers=headers)
print(res.json())`,
        },
      ],
    },
    responseSnippet: {
      status: 201,
      code: `{
  "token": {
    "id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "Pepe Quantum",
    "symbol": "PEPEQ",
    "supply": "1000000000",
    "decimals": 9,
    "status": "pending",
    "network": "devnet",
    "created_at": "2026-09-07T14:48:33.602Z"
  }
}`,
    },
    toc: [
      { id: "quickstart-intro", title: "Overview" },
      { id: "you-will-need", title: "You'll need to:" },
      { id: "code-example", title: "Code Example" },
      { id: "response-payload", title: "Response Payload" },
    ],
  },

  "api-reference": {
    id: "api-reference",
    category: "Overview",
    title: "Global API Reference",
    description:
      "The Multipu REST API follows standard RESTful conventions with JSON payloads and HTTP status codes. All endpoints require HTTPS and validate origin requests and rate quotas.",
    tableData: {
      title: "Core Endpoints Summary",
      headers: ["Method", "Endpoint", "Description", "Auth"],
      rows: [
        ["POST", "/api/tokens", "Create token draft or pre-mint record", "API Key / Session"],
        ["PUT", "/api/tokens", "Edit pending un-minted token metadata", "API Key / Session"],
        ["PATCH", "/api/tokens", "Confirm on-chain token mint signature", "API Key / Session"],
        ["GET", "/api/tokens", "List all created and deployed tokens", "API Key / Session"],
        ["POST", "/api/launches", "Dispatch token to launchpads", "API Key / Session"],
        ["GET", "/api/launches/explore", "Scan live multi-chain meme markets", "Public"],
        ["POST", "/api/trade/swap", "Execute terminal swap order", "API Key / Session"],
        ["GET", "/api/olaxbt/signals", "Query OlaXBT momentum alpha stream", "API Key / Session"],
      ],
    },
    toc: [
      { id: "api-ref-intro", title: "API Reference" },
      { id: "endpoints-summary", title: "Core Endpoints Summary" },
      { id: "rate-limits", title: "Rate Limits" },
    ],
  },

  authentication: {
    id: "authentication",
    category: "Concepts",
    title: "Authentication & Security",
    description:
      "Multipu provides non-custodial Web3 session authentication alongside developer API Keys for server-to-server and AI agent operations.",
    requirements: [
      "Include the 'x-api-key' header for programmatic access.",
      "Web sessions utilize iron-session encrypted cookies signed via SIWS (Solana) or SIWB (EVM).",
      "Never expose your service keys or developer secrets in client bundles.",
    ],
    codeSnippet: {
      language: "http",
      title: "API Key Header Format",
      code: `GET /api/tokens HTTP/1.1
Host: multipu.fun
x-api-key: mp_live_9f83a2e1d0c4b5a6
Content-Type: application/json`,
    },
    toc: [
      { id: "auth-intro", title: "Authentication Overview" },
      { id: "you-will-need", title: "You'll need to:" },
      { id: "api-keys", title: "API Keys" },
      { id: "web3-sessions", title: "Web3 Session Cryptography" },
    ],
  },

  "multi-launch": {
    id: "multi-launch",
    category: "Concepts",
    title: "Multi-Launchpad Push Architecture",
    description:
      "Rather than writing isolated deployment scripts for every DEX or launchpad, Multipu acts as a cross-chain meta-dispatcher. A single token configuration can simultaneously seed pools on Solana, BNB Chain, and Robinhood Chain.",
    tableData: {
      title: "Supported Launchpads Matrix",
      headers: ["Launchpad", "Network", "Mechanism", "Status"],
      rows: [
        ["Pump.fun", "Solana", "Bonding Curve", "Live"],
        ["Meteora", "Solana", "Dynamic DLMM", "Live"],
        ["Bags App", "Solana", "Fair Launch Curve", "Live"],
        ["Four.meme", "BNB Chain", "Bonding Pool", "Live"],
        ["Pons Protocol", "Robinhood Chain", "Time-Prioritized Sequencer", "Live"],
      ],
    },
    toc: [
      { id: "multi-launch-intro", title: "Architecture" },
      { id: "supported-matrix", title: "Supported Launchpads Matrix" },
      { id: "dispatch-lifecycle", title: "Dispatch Lifecycle" },
    ],
  },

  "keeperhub-mcp": {
    id: "keeperhub-mcp",
    category: "AI Agents & MCP",
    title: "KeeperHub MCP Server Protocol",
    description:
      "KeeperHub is the Model Context Protocol (MCP) server for autonomous AI agents. It exposes structured tools enabling LLMs to deploy tokens, query live market telemetry, and execute trading strategies without browser prompts or manual clicks.",
    requirements: [
      "Install Claude Desktop, Cursor, or your preferred MCP client.",
      "Add Multipu KeeperHub MCP configuration to your agent's config file.",
      "Provide your 'MULTIPU_API_KEY' environment variable.",
    ],
    codeSnippet: {
      language: "json",
      title: "mcpServers Configuration (claude_desktop_config.json / cursor)",
      code: `{
  "mcpServers": {
    "multipu-keeperhub": {
      "command": "npx",
      "args": ["-y", "@multipu/keeperhub-mcp"],
      "env": {
        "MULTIPU_API_KEY": "mp_live_your_api_key_here",
        "MULTIPU_RPC_CLUSTER": "devnet"
      }
    }
  }
}`,
    },
    toc: [
      { id: "mcp-overview", title: "KeeperHub MCP Overview" },
      { id: "you-will-need", title: "You'll need to:" },
      { id: "mcp-config", title: "Client Configuration" },
      { id: "agent-workflows", title: "Agent Workflows" },
    ],
  },

  "mcp-tools": {
    id: "mcp-tools",
    category: "AI Agents & MCP",
    title: "MCP Agent Tool Declarations",
    description:
      "When connected to KeeperHub, AI agents gain access to deterministic tool calls matching JSON schema declarations. Each tool provides automated input validation and returns real-time blockchain states.",
    tableData: {
      title: "Exposed MCP Tools",
      headers: ["Tool Name", "Arguments", "Description"],
      rows: [
        ["create_token", "name, symbol, supply, decimals, description", "Generates token draft and metadata record"],
        ["dispatch_launch", "tokenId, launchpad (pumpfun|meteora|bags|fourmeme|pons)", "Seeds liquidity pool on chosen pad"],
        ["get_market_intelligence", "query, chain, category, minVolume", "Returns live bonding curves & velocity signals"],
        ["execute_dex_swap", "tokenAddress, amount, action (buy|sell), slippage", "Executes non-custodial DEX swap order"],
        ["read_wallet_balances", "walletAddress, networks", "Returns aggregated SOL, BNB, ETH balances"],
      ],
    },
    toc: [
      { id: "tools-overview", title: "Agent Tool Declarations" },
      { id: "tools-table", title: "Exposed MCP Tools" },
      { id: "agent-sample", title: "Agent Execution Sample" },
    ],
  },

  "olaxbt-signals": {
    id: "olaxbt-signals",
    category: "AI Agents & MCP",
    title: "OlaXBT Signal Stream",
    description:
      "OlaXBT continuously scans meme tokens for momentum triggers, sudden volume spikes, top-10 holder concentrations, and sniper percentages. Query signals programmatically or subscribe to the SSE stream.",
    codeSnippet: {
      language: "bash",
      title: "Query Live Signals",
      code: `curl -X GET "https://multipu.fun/api/olaxbt/signals?limit=10" \\
  -H "x-api-key: mp_live_your_api_key_here"`,
    },
    responseSnippet: {
      status: 200,
      code: `{
  "signals": [
    {
      "id": "sig-8849",
      "token": "PEPEQ",
      "type": "VOLUME_SURGE",
      "confidence": 0.94,
      "volume_spike_pct": 340,
      "bonding_curve_pct": 86,
      "recommended_action": "MONITOR_BREAKOUT",
      "timestamp": "2026-09-07T14:52:10.000Z"
    }
  ]
}`,
    },
    toc: [
      { id: "signals-intro", title: "OlaXBT Signals" },
      { id: "signals-code", title: "Code Example" },
      { id: "signals-response", title: "Response Payload" },
    ],
  },

  "endpoint-tokens": {
    id: "endpoint-tokens",
    category: "REST Endpoints",
    title: "Tokens Endpoint (/api/tokens)",
    description:
      "Create, edit, query, and confirm token records across the Multipu network. Supports managing draft tokens before on-chain minting, as well as confirming signed transactions.",
    tableData: {
      title: "POST /api/tokens Parameters",
      headers: ["Field", "Type", "Required", "Description"],
      rows: [
        ["name", "string (1-32)", "Yes", "The public name of your token (e.g. MoonCoin)"],
        ["symbol", "string (1-10)", "Yes", "The ticker symbol, auto-uppercased (e.g. MOON)"],
        ["supply", "string (numeric)", "Yes", "Total token supply (e.g. 1000000000)"],
        ["decimals", "number (0-9)", "No (default 9)", "Token decimal precision"],
        ["description", "string (max 500)", "No", "Short description of the token project"],
        ["imageUrl", "string (URL)", "No", "Public URL of token icon / logo"],
      ],
    },
    codeSnippet: {
      language: "bash",
      title: "Update Pending Draft Token (PUT /api/tokens)",
      code: `curl -X PUT https://multipu.fun/api/tokens \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: mp_live_your_api_key_here" \\
  -d '{
    "tokenId": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "name": "Updated Token Name",
    "description": "Refined description before on-chain mint."
  }'`,
    },
    toc: [
      { id: "tokens-intro", title: "Tokens Overview" },
      { id: "post-tokens", title: "POST /api/tokens" },
      { id: "put-tokens", title: "PUT /api/tokens (Edit Draft)" },
      { id: "patch-tokens", title: "PATCH /api/tokens (Confirm Mint)" },
    ],
  },

  "endpoint-launches": {
    id: "endpoint-launches",
    category: "REST Endpoints",
    title: "Launches Endpoint (/api/launches)",
    description:
      "Dispatch minted or draft tokens to selected decentralized launchpads. Handles pool generation and tracking on Pump.fun, Meteora, Bags, Four.meme, and Pons.",
    tableData: {
      title: "POST /api/launches Parameters",
      headers: ["Field", "Type", "Required", "Description"],
      rows: [
        ["tokenId", "UUID", "Yes", "ID of the token from /api/tokens"],
        ["launchpad", "string", "Yes", "One of: meteora, bags, pumpfun, fourmeme, pons"],
        ["initialLiquidity", "number", "No", "Initial pool seed liquidity amount"],
      ],
    },
    toc: [
      { id: "launches-intro", title: "Launches Overview" },
      { id: "post-launches", title: "POST /api/launches" },
      { id: "get-launches", title: "GET /api/launches" },
    ],
  },

  "endpoint-explore": {
    id: "endpoint-explore",
    category: "REST Endpoints",
    title: "DEX Scanner (/api/launches/explore)",
    description:
      "Query aggregated live tokens, active bonding curve progress, 24h trading volume, and liquidity pool metrics across Solana, BNB Chain, and Robinhood Chain.",
    codeSnippet: {
      language: "bash",
      title: "GET /api/launches/explore",
      code: `curl -X GET "https://multipu.fun/api/launches/explore?chain=solana&category=new"`,
    },
    toc: [
      { id: "explore-intro", title: "Explorer Overview" },
      { id: "query-params", title: "Query Parameters" },
      { id: "response-format", title: "Response Format" },
    ],
  },

  "endpoint-trade": {
    id: "endpoint-trade",
    category: "REST Endpoints",
    title: "Instant Swaps (/api/trade/swap)",
    description:
      "Submit and execute programmatic non-custodial swaps on live bonding curves and graduated AMM pools with dynamic slippage protection.",
    codeSnippet: {
      language: "bash",
      title: "Execute Swap Order",
      code: `curl -X POST https://multipu.fun/api/trade/swap \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: mp_live_your_api_key_here" \\
  -d '{
    "poolAddress": "DemoPoolPumpFun8849",
    "action": "buy",
    "amount": "0.5",
    "slippagePct": 1.0
  }'`,
    },
    toc: [
      { id: "trade-intro", title: "Swap Overview" },
      { id: "swap-params", title: "Parameters" },
      { id: "execution-flow", title: "Execution Flow" },
    ],
  },

  "endpoint-balances": {
    id: "endpoint-balances",
    category: "REST Endpoints",
    title: "Wallet Balances (/api/wallet/balances)",
    description:
      "Fetch real-time balances for Solana (SOL), BNB Chain (BNB), and Robinhood Chain (ETH) for any authenticated wallet address.",
    codeSnippet: {
      language: "bash",
      title: "GET /api/wallet/balances",
      code: `curl -X GET https://multipu.fun/api/wallet/balances \\
  -H "x-api-key: mp_live_your_api_key_here"`,
    },
    toc: [
      { id: "balances-intro", title: "Balances Overview" },
      { id: "balances-sample", title: "Sample Request" },
    ],
  },

  "endpoint-earnings": {
    id: "endpoint-earnings",
    category: "REST Endpoints",
    title: "Creator Earnings (/api/earnings)",
    description:
      "Retrieve detailed creator royalty earnings and fee accruals across all launched token pools.",
    toc: [
      { id: "earnings-intro", title: "Earnings Overview" },
      { id: "fee-breakdown", title: "Fee Breakdown" },
    ],
  },

  "rate-limits": {
    id: "rate-limits",
    category: "Developers",
    title: "Rate Limits & Quotas",
    description:
      "To ensure high availability and fair allocation, requests are rate-limited per IP and API key using sliding-window rate limiters.",
    tableData: {
      title: "Tier Limits",
      headers: ["Tier", "Rate Limit", "Burst Window", "Concurrent AI Sockets"],
      rows: [
        ["Public (Unauthenticated)", "30 req / min", "5 req / sec", "1 socket"],
        ["Standard API Key", "120 req / min", "15 req / sec", "5 sockets"],
        ["KeeperHub Pro Agent", "600 req / min", "50 req / sec", "20 sockets"],
      ],
    },
    toc: [
      { id: "rate-limits-intro", title: "Rate Limits Overview" },
      { id: "tier-limits", title: "Tier Limits" },
      { id: "headers", title: "Rate Limit Response Headers" },
    ],
  },

  "error-codes": {
    id: "error-codes",
    category: "Developers",
    title: "Error Codes & Statuses",
    description:
      "All API errors return standard HTTP error codes with a JSON error object containing the error reason and validation details.",
    tableData: {
      title: "Standard Error Codes",
      headers: ["HTTP Code", "Error Name", "Description"],
      rows: [
        ["400", "Bad Request", "Malformed JSON payload or schema validation failure"],
        ["401", "Unauthorized", "Missing or invalid API key or expired Web3 session"],
        ["403", "Forbidden", "Origin verification error or restricted mainnet policy"],
        ["404", "Not Found", "Token, launchpad, or pool address does not exist"],
        ["429", "Rate Limited", "Request exceeded tier rate limit quota"],
        ["500", "Server Error", "Blockchain RPC timeout or internal server exception"],
      ],
    },
    toc: [
      { id: "error-intro", title: "Error Codes Overview" },
      { id: "codes-table", title: "Standard Error Codes" },
    ],
  },

  "sdk-typescript": {
    id: "sdk-typescript",
    category: "Developers",
    title: "TypeScript SDK (@multipu/sdk)",
    description:
      "The official TypeScript client provides strong types, automatic challenge signing for SIWS/SIWB, and built-in retry mechanisms.",
    codeSnippet: {
      language: "bash",
      title: "Installation",
      code: `npm install @multipu/sdk
# or
pnpm add @multipu/sdk`,
    },
    toc: [
      { id: "sdk-intro", title: "TypeScript SDK" },
      { id: "install", title: "Installation" },
      { id: "client-methods", title: "Client Methods" },
    ],
  },

  changelog: {
    id: "changelog",
    category: "Developers",
    title: "Changelog",
    description:
      "Recent protocol releases, feature additions, and API version notes.",
    requirements: [
      "v0.1.0 (Current): Initial public developer release of Multipu REST API, KeeperHub MCP server, and 3-chain launchpad orchestrator.",
      "Added support for Pons Protocol on Robinhood Chain.",
      "Introduced pending draft token editing and live simulation pipeline.",
    ],
    toc: [
      { id: "changelog-intro", title: "Changelog" },
      { id: "release-notes", title: "Release Notes" },
    ],
  },
};
