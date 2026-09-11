"use client";

import React from "react";
import Image from "next/image";
import { IconSun, IconMoon, IconBrandGithub, IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";

interface TopNavProps {
  currentSection: string;
  onSelectSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function TopNav({
  currentSection,
  onSelectSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  theme,
  toggleTheme,
}: TopNavProps) {
  const topLinks = [
    { label: "Documentation", id: "introduction" },
    { label: "API Reference", id: "api-reference" },
    { label: "MCP Engine", id: "keeperhub-mcp" },
    { label: "Changelog", id: "changelog" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#121212]/90 backdrop-blur-md transition-colors">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo, Title & Docs Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSelectSection("introduction")}
            className="flex items-center gap-2.5 focus:outline-none group cursor-pointer"
          >
            <div className="relative w-7 h-7 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Multipu Logo"
                fill
                sizes="28px"
                className="object-contain transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-white">
              Multipu
            </span>
          </button>
          
          <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.08]">
            DOCS
          </span>
        </div>

        {/* Right Area: Navigation Links, Divider, Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-1.5 text-xs text-zinc-400">
            {topLinks.map((link) => {
              const isActive =
                (link.id === "introduction" && (currentSection === "introduction" || currentSection === "quickstart")) ||
                (link.id === "api-reference" && (currentSection.startsWith("endpoint") || currentSection === "api-reference")) ||
                (link.id === "keeperhub-mcp" && (currentSection === "keeperhub-mcp" || currentSection === "mcp-tools" || currentSection === "olaxbt-signals")) ||
                currentSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onSelectSection(link.id)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer text-xs ${
                    isActive
                      ? "text-white font-medium bg-white/[0.08] border border-white/[0.08] shadow-xs"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden sm:block h-4 w-[1px] bg-white/[0.08]" />

          <div className="flex items-center gap-2">
            {/* Launch App Pill Button */}
            <a
              href="https://multipu.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 active:scale-95 transition-all shadow-xs"
            >
              <span>Launch App</span>
              <IconArrowUpRight size={13} stroke={2.5} />
            </a>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors cursor-pointer"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
            </button>

            {/* GitHub Repo */}
            <a
              href="https://github.com/wisdomnova/multipu-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors cursor-pointer"
              title="GitHub Repository"
              aria-label="GitHub"
            >
              <IconBrandGithub size={16} />
            </a>

            {/* Mobile Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors cursor-pointer"
              aria-label="Toggle documentation navigation menu"
            >
              {mobileMenuOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
