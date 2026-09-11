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
    <div className="py-6 px-4 md:px-5 sticky top-16">
      <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-3.5">
        On this page
      </div>
      <ul className="space-y-1.5 text-[12.5px] border-l border-white/[0.08]">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="relative">
              {isActive && (
                <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
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
                  "block pl-3.5 transition-colors leading-snug py-0.5 cursor-pointer text-left",
                  isActive
                    ? "text-white font-medium"
                    : "text-zinc-400 hover:text-white"
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
