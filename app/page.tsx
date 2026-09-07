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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from system or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("multipu-docs-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900 transition-colors">
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
      <div className="flex-1 w-full max-w-[1440px] mx-auto flex">
        {/* Left Navigation Sidebar (Desktop) */}
        <div className="hidden md:block w-64 shrink-0 border-r border-zinc-200/80 dark:border-zinc-800/80 sticky top-14 h-[calc(100vh-3.5rem)]">
          <LeftSidebar
            activeId={activeSectionId}
            onSelect={handleSelectSection}
          />
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
            <div className="w-4/5 max-w-sm h-full bg-white dark:bg-zinc-950 p-4 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <span className="font-semibold text-sm">Documentation Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                >
                  Close
                </button>
              </div>
              <div className="h-[calc(100vh-5rem)] overflow-y-auto">
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
        <div className="hidden lg:block w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <TocSidebar items={currentSection.toc} />
        </div>
      </div>
    </div>
  );
}
