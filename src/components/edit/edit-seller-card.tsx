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
          background: "linear-gradient(to top, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.4) 30%, transparent 50%)"
        }}
      />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <div>
          <h3 className="text-[13px] font-light tracking-wide text-edit-ivory mb-1">
            {seller.name}
          </h3>
          <p className="text-[11px] font-light text-edit-ivory/70">
            {seller.tagline}
          </p>
        </div>
        <button className="px-3 py-1.5 text-[10px] font-light tracking-wider text-edit-ivory border border-edit-ivory/60 hover:border-edit-gold hover:text-edit-gold transition-colors">
          OBSERWUJ
        </button>
      </div>
    </div>
  );
}
