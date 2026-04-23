"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FilterGroup {
  title: string;
  options: string[];
}

const filterGroups: FilterGroup[] = [
  {
    title: "SPRZEDAWCA",
    options: ["Bella Donna", "EcoThreads", "Modna Szafa"],
  },
  {
    title: "KATEGORIA",
    options: ["Obuwie", "Odzież", "Akcesoria"],
  },
  {
    title: "PRZEDZIAŁ CENOWY",
    options: ["Do 300 zł", "300–500 zł", "Powyżej 500 zł"],
  },
];

export function EditSidebarFilter() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const handleFilterClick = (group: string, option: string) => {
    setActiveFilters((prev) => {
      if (prev[group] === option) {
        const { [group]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [group]: option };
    });
  };

  return (
    <aside className="w-60 shrink-0 sticky top-0 h-screen py-12 px-6 bg-edit-ivory border-r border-edit-gold/30">
      <h2 className="text-[10px] font-light tracking-[0.3em] text-edit-gold uppercase mb-6">
        FILTRUJ
      </h2>

      <div className="space-y-8">
        {filterGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-[11px] font-medium tracking-wider text-edit-graphite mb-4">
              {group.title}
            </h3>
            <ul className="space-y-2">
              {group.options.map((option) => {
                const isActive = activeFilters[group.title] === option;
                return (
                  <li key={option}>
                    <button
                      onClick={() => handleFilterClick(group.title, option)}
                      className={cn(
                        "text-[13px] font-light text-edit-graphite hover:text-edit-gold transition-colors",
                        isActive && "text-edit-gold underline underline-offset-4"
                      )}
                    >
                      {option}
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
