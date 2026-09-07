export function SitelinksJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://docs.multipu.fun/#website",
        "url": "https://docs.multipu.fun",
        "name": "Multipu Developer Documentation",
        "description": "Developer documentation, REST API endpoints, and KeeperHub Model Context Protocol (MCP) server specifications.",
        "publisher": {
          "@type": "Organization",
          "name": "Multipu",
          "url": "https://multipu.fun",
          "logo": {
            "@type": "ImageObject",
            "url": "https://docs.multipu.fun/logo.png"
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://docs.multipu.fun/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://docs.multipu.fun/#navigation",
        "name": [
          "Platform Guide",
          "Quickstart Guide",
          "API Reference",
          "KeeperHub MCP Server",
          "REST Endpoints",
          "Rate Limits & Quotas",
          "Changelog"
        ],
        "url": [
          "https://docs.multipu.fun/#introduction",
          "https://docs.multipu.fun/#quickstart",
          "https://docs.multipu.fun/#api-reference",
          "https://docs.multipu.fun/#keeperhub-mcp",
          "https://docs.multipu.fun/#endpoint-tokens",
          "https://docs.multipu.fun/#rate-limits",
          "https://docs.multipu.fun/#changelog"
        ]
      },
      {
        "@type": "TechArticle",
        "@id": "https://docs.multipu.fun/#article",
        "headline": "Multipu API & KeeperHub MCP Developer Documentation",
        "description": "Automate multi-chain token creation, dispatching, and agent market telemetry with Multipu API & KeeperHub MCP server.",
        "url": "https://docs.multipu.fun",
        "inLanguage": "en-US",
        "about": {
          "@type": "SoftwareApplication",
          "name": "Multipu Engine",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": "All"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
