"use client";

import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";

export function EditNavbar() {
  return (
    <nav className="w-full bg-edit-ivory border-b border-edit-gold">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/edit" className="flex flex-col items-center">
          <span className="text-[14px] font-light tracking-[0.4em] text-edit-graphite">
            FH EDIT
          </span>
          <span className="w-10 h-[1px] bg-edit-gold mt-1" />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            href="/edit/collection"
            className="text-[12px] font-light tracking-[0.15em] text-edit-graphite hover:text-edit-gold transition-colors"
          >
            KOLEKCJE
          </Link>
          <Link
            href="/edit/sellers"
            className="text-[12px] font-light tracking-[0.15em] text-edit-graphite hover:text-edit-gold transition-colors"
          >
            SPRZEDAWCY
          </Link>
          <Link
            href="/edit/about"
            className="text-[12px] font-light tracking-[0.15em] text-edit-graphite hover:text-edit-gold transition-colors"
          >
            O EDIT
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <button
            className="p-2 hover:text-edit-gold transition-colors"
            aria-label="Koszyk"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[11px] font-light tracking-wide text-edit-graphite hover:text-edit-gold transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            FashionHero
          </Link>
        </div>
      </div>
    </nav>
  );
}
