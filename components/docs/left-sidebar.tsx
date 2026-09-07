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
  return (
    <aside className="w-full h-full flex flex-col py-6 px-4 md:px-6 overflow-y-auto custom-scrollbar">
      <div className="space-y-6">
        {navGroups.map((group) => (
          <div key={group.name} className="space-y-1.5">
            <div className="text-[11px] font-semibold tracking-wider text-zinc-400 dark:text-zinc-500 uppercase px-2">
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
                        "group flex items-center justify-between w-full px-2.5 py-1.5 rounded-md text-[13.5px] transition-colors text-left cursor-pointer",
                        isActive
                          ? "bg-zinc-100 dark:bg-zinc-800/80 font-medium text-zinc-900 dark:text-zinc-100"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100 shrink-0" />
                        )}
                        <span className={isActive ? "translate-x-0" : "pl-3.5"}>
                          {item.title}
                        </span>
                      </span>

                      {item.badge && (
                        <span className="ml-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold">
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
