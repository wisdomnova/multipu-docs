"use client";

import React from "react";
import { navGroups } from "./docs-data";
import { cn } from "@/lib/utils";

interface LeftSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  onCloseMobile?: () => void;
}

export function LeftSidebar({
  activeId,
  onSelect,
  onCloseMobile,
}: LeftSidebarProps) {
  const getBadgeStyle = (badge?: string) => {
    if (!badge) return "";
    switch (badge) {
      case "GET":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "POST":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "MCP":
        return "bg-violet-500/10 text-violet-300 border-violet-500/20";
      default:
        return "bg-white/[0.06] text-zinc-400 border-white/[0.08]";
    }
  };

  return (
    <aside className="w-full h-full flex flex-col py-6 px-3.5 md:px-5 overflow-y-auto custom-scrollbar">
      <div className="space-y-6">
        {navGroups.map((group) => (
          <div key={group.name} className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold px-2.5 py-1">
              {group.name}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        onSelect(item.id);
                        if (onCloseMobile) onCloseMobile();
                      }}
                      className={cn(
                        "group flex items-center justify-between w-full px-2.5 py-1.5 rounded-xl text-[13px] transition-all text-left cursor-pointer",
                        isActive
                          ? "bg-[#181818] border border-white/[0.08] font-medium text-white shadow-xs"
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.03] border border-transparent"
                      )}
                    >
                      <span className="flex items-center gap-2 truncate">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        )}
                        <span className={isActive ? "translate-x-0 truncate" : "pl-3.5 truncate"}>
                          {item.title}
                        </span>
                      </span>

                      {item.badge && (
                        <span
                          className={cn(
                            "ml-2 text-[9px] font-mono px-1.5 py-0.5 rounded-md border font-semibold shrink-0 uppercase",
                            getBadgeStyle(item.badge)
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
