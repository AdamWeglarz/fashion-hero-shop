"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types";
import { getSellerById } from "@/data/sellers";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditProductInfoProps {
  product: Product;
}

export function EditProductInfo({ product }: EditProductInfoProps) {
  const seller = getSellerById(product.sellerId);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showMaterials, setShowMaterials] = useState(false);

  return (
    <div className="p-12 sticky top-0">
      {/* Edit Tag */}
      <span className="block text-[10px] font-light tracking-[0.4em] text-edit-gold uppercase mb-4">
        FH EDIT — SELECT
      </span>

      {/* Product Name */}
      <h1 className="font-serif text-[48px] leading-[1.1] text-edit-graphite mb-4">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-[22px] text-edit-gold mb-4">
        {product.price} zł
      </p>

      {/* Seller */}
      {seller && (
        <p className="text-[11px] font-light text-fh-gray mb-6">
          Sold by{" "}
          <Link
            href={`/edit/sellers/${seller.slug}`}
            className="text-[13px] text-edit-graphite hover:text-edit-gold transition-colors"
          >
            {seller.name}
          </Link>
        </p>
      )}

      {/* Divider */}
      <div className="w-full h-[1px] bg-edit-gold my-6" />

      {/* Description */}
      <p className="text-[14px] font-light leading-[1.8] text-edit-graphite line-clamp-3 mb-6">
        {product.description}
      </p>

      {/* Expandable Materials Section */}
      <button
        onClick={() => setShowMaterials(!showMaterials)}
        className="flex items-center justify-between w-full py-3 border-t border-edit-gold/30 text-[12px] font-light tracking-wider text-edit-graphite"
      >
        <span>MATERIAŁ I WYMIARY</span>
        {showMaterials ? (
          <ChevronUp size={16} strokeWidth={1.5} />
        ) : (
          <ChevronDown size={16} strokeWidth={1.5} />
        )}
      </button>
      {showMaterials && (
        <div className="py-4 text-[13px] font-light leading-relaxed text-edit-graphite/80">
          <p className="mb-2">{product.materials}</p>
          <p>{product.care}</p>
        </div>
      )}

      {/* Size Selector */}
      <div className="mt-6 mb-6">
        <p className="text-[11px] font-light tracking-wider text-edit-graphite mb-3">
          ROZMIAR
        </p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "min-w-[48px] px-4 py-2 text-[12px] font-light border transition-colors",
                selectedSize === size
                  ? "bg-edit-graphite text-edit-ivory border-edit-graphite"
                  : "border-edit-graphite/30 text-edit-graphite hover:border-edit-graphite"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full py-4 bg-edit-graphite text-edit-ivory text-[12px] font-light tracking-[0.3em] hover:bg-edit-gold hover:text-edit-graphite transition-colors">
        DODAJ DO KOSZYKA
      </button>

      {/* Shipping Info */}
      <p className="text-center text-[11px] font-light text-fh-gray mt-4">
        Bezpłatny zwrot · Dostawa 2–3 dni
      </p>

      {/* Seller Section */}
      {seller && (
        <div className="mt-10 pt-6 border-t border-edit-gold">
          <h3 className="font-serif text-[24px] text-edit-graphite mb-1">
            {seller.name}
          </h3>
          <p className="text-[11px] font-light text-fh-gray mb-3">
            Dołączył w {seller.joinedYear}
          </p>
          <p className="text-[13px] font-light leading-relaxed text-edit-graphite/80 mb-4">
            {seller.description}
          </p>
          <button className="px-6 py-2 text-[10px] font-light tracking-wider text-edit-graphite border border-edit-graphite hover:border-edit-gold hover:text-edit-gold transition-colors">
            OBSERWUJ SPRZEDAWCĘ
          </button>
        </div>
      )}
    </div>
  );
}
