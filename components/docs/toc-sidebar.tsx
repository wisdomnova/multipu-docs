"use client";

import React, { useEffect, useState } from "react";
import { TocItem } from "./docs-data";
import { cn } from "@/lib/utils";

interface TocSidebarProps {
  items: TocItem[];
  activeHeadingId?: string;
  onHeadingClick?: (id: string) => void;
}

export function TocSidebar({
  items,
  activeHeadingId,
  onHeadingClick,
}: TocSidebarProps) {
  const [activeId, setActiveId] = useState(activeHeadingId || (items[0]?.id ?? ""));

  useEffect(() => {
    if (items.length > 0 && !activeHeadingId) {
      setActiveId(items[0].id);
    } else if (activeHeadingId) {
      setActiveId(activeHeadingId);
    }
  }, [items, activeHeadingId]);

  if (!items || items.length === 0) return null;

  return (
    <div className="py-6 px-4 md:px-6 sticky top-14">
      <div className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 mb-3">
        On this page
      </div>
      <ul className="space-y-2 text-[13px] border-l border-zinc-200/80 dark:border-zinc-800">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              {isActive && (
                <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-zinc-900 dark:bg-zinc-100" />
              )}
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(item.id);
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  if (onHeadingClick) onHeadingClick(item.id);
                }}
                className={cn(
                  "block pl-4 transition-colors leading-snug py-0.5",
                  isActive
                    ? "text-zinc-950 dark:text-zinc-50 font-medium"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
