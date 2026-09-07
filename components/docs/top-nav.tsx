"use client";

import React from "react";
import Image from "next/image";
import { IconSun, IconMoon, IconBrandGithub, IconMenu2, IconX } from "@tabler/icons-react";

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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-colors">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand Logo & Title */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => onSelectSection("introduction")}
            className="flex items-center gap-2.5 focus:outline-none group cursor-pointer"
          >
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Multipu Logo"
                fill
                sizes="24px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Multipu
            </span>
          </button>
        </div>

        {/* Right Area: Navigation Links, Divider, Theme Toggle, GitHub */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-normal text-zinc-600 dark:text-zinc-400">
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
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? "text-zinc-950 dark:text-zinc-50 font-medium"
                      : "hover:text-zinc-950 dark:hover:text-zinc-100"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Vertical divider line matching screenshot */}
          <div className="hidden sm:block h-4 w-[1px] bg-zinc-200 dark:bg-zinc-800" />

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle color theme"
            >
              {theme === "dark" ? <IconSun size={17} /> : <IconMoon size={17} />}
            </button>

            {/* GitHub Repo */}
            <a
              href="https://github.com/wisdomnova/multipu-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
              title="GitHub Repository"
              aria-label="GitHub"
            >
              <IconBrandGithub size={17} />
            </a>

            {/* Mobile Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 rounded-md transition-colors cursor-pointer ml-1"
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
