"use client";

import React, { useState, useEffect } from "react";
import { TopNav } from "@/components/docs/top-nav";
import { LeftSidebar } from "@/components/docs/left-sidebar";
import { TocSidebar } from "@/components/docs/toc-sidebar";
import { ContentView } from "@/components/docs/content-view";
import { docSections } from "@/components/docs/docs-data";

export default function DocsPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Initialize theme from system or localStorage, default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("multipu-docs-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("multipu-docs-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentSection = docSections[activeSectionId] || docSections.introduction;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-zinc-900 dark:text-white selection:bg-purple-600 selection:text-white relative transition-colors duration-200">
      {/* Background dot matrix grid matching Multipu landing */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(rgba(0,0,0,0.07)_1.1px,transparent_1.1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1.1px,transparent_1.1px)] [background-size:22px_22px] pointer-events-none opacity-60 z-0 transition-opacity" 
        aria-hidden="true" 
      />

      {/* Top Header Navigation */}
      <TopNav
        currentSection={activeSectionId}
        onSelectSection={handleSelectSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main 3-Column Container */}
      <div className="flex-1 w-full max-w-[1440px] mx-auto flex relative z-10">
        {/* Left Navigation Sidebar (Desktop) */}
        <div className="hidden md:block w-64 shrink-0 border-r border-zinc-200/80 dark:border-white/[0.06] sticky top-16 h-[calc(100vh-4rem)] transition-colors">
          <LeftSidebar
            activeId={activeSectionId}
            onSelect={handleSelectSection}
          />
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/60 dark:bg-black/70 backdrop-blur-md">
            <div className="w-4/5 max-w-sm h-full bg-white dark:bg-[#141414] border-r border-zinc-200 dark:border-white/[0.08] p-5 shadow-2xl flex flex-col transition-colors">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-zinc-900 dark:text-white">Documentation</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">v0.1.0</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-[#1e1e1e] dark:hover:bg-[#252525] text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-white/[0.06] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto pt-2">
                <LeftSidebar
                  activeId={activeSectionId}
                  onSelect={handleSelectSection}
                  onCloseMobile={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Center Content Article */}
        <main className="flex-1 min-w-0 flex justify-center">
          <ContentView
            section={currentSection}
            onNavigateSection={handleSelectSection}
          />
        </main>

        {/* Right Table of Contents Sidebar (Desktop) */}
        <div className="hidden lg:block w-60 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-l border-zinc-200/80 dark:border-white/[0.06] transition-colors">
          <TocSidebar items={currentSection.toc} />
        </div>
      </div>
    </div>
  );
}
