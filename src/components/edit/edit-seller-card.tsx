import Image from "next/image";
import type { EditSeller } from "@/data/edit-products";

interface EditSellerCardProps {
  seller: EditSeller;
}

export function EditSellerCard({ seller }: EditSellerCardProps) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={seller.image}
        alt={seller.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Bottom Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.5) 35%, transparent 60%)"
        }}
      />

      {/* Tag Badge */}
      {seller.tag && (
        <div className="absolute top-4 left-4">
          <span className="inline-block px-2.5 py-1 text-[9px] font-medium tracking-[0.15em] uppercase bg-edit-gold/90 text-white">
            {seller.tag}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="mb-3">
          <h3 className="font-serif text-[22px] font-normal text-white mb-1">
            {seller.name}
          </h3>
          <p className="text-[11px] font-light tracking-wide text-white/70 mb-1">
            {seller.location}
          </p>
          <p className="text-[12px] font-light text-white/80 leading-relaxed">
            {seller.tagline}
          </p>
          {seller.priceRange && (
            <p className="text-[11px] font-light text-edit-gold mt-2">
              {seller.priceRange}
            </p>
          )}
        </div>
        <button className="px-4 py-2 text-[10px] font-light tracking-wider text-white border border-white/60 hover:border-edit-gold hover:text-edit-gold transition-colors">
          ZOBACZ MARKĘ
        </button>
      </div>
    </div>
  );
}
