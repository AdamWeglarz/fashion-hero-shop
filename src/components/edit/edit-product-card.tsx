"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types";
import { getSellerById } from "@/data/sellers";

interface EditProductCardProps {
  product: Product;
  isEditProduct?: boolean;
  size?: "normal" | "small";
}

export function EditProductCard({ 
  product, 
  isEditProduct = true,
  size = "normal" 
}: EditProductCardProps) {
  const seller = getSellerById(product.sellerId);
  const firstImage = product.colors[0]?.image || product.images[0];
  
  // Determine the link path
  const href = isEditProduct 
    ? `/edit/product/${product.slug}` 
    : `/products/${product.slug}`;

  return (
    <Link href={href} className="group block">
      {/* Image Container */}
      <div 
        className={`relative overflow-hidden mb-4 ${
          isEditProduct ? "bg-edit-card-bg" : "bg-fh-white"
        }`}
        style={{ aspectRatio: "3/4" }}
      >
        {/* FashionHero Badge for fallback products */}
        {!isEditProduct && (
          <span className="absolute top-3 left-3 z-10 px-2 py-1 text-[8px] font-light tracking-wide text-edit-graphite bg-white/90">
            z FashionHero
          </span>
        )}
        
        <Image
          src={firstImage}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-400 ease-out group-hover:scale-[1.03]"
        />
      </div>
      
      {/* Product Info */}
      <div>
        <h3 className={`font-serif text-edit-graphite mb-1 ${
          size === "small" ? "text-[16px]" : "text-[20px]"
        }`}>
          {product.name}
        </h3>
        <p className={`text-edit-gold mb-1 ${
          size === "small" ? "text-[14px]" : "text-[16px]"
        }`}>
          {product.price} zł
        </p>
        {seller && (
          <p className={`font-light text-fh-gray ${
            size === "small" ? "text-[10px]" : "text-[11px]"
          } ${!isEditProduct ? "opacity-70" : ""}`}>
            Sold by {seller.name}
          </p>
        )}
      </div>
    </Link>
  );
}
