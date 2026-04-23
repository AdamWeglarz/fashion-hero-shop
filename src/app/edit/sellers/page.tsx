import { getAllBrands, categoryLabels, type EditBrand } from "@/data/edit-products";
import { EditSectionLabel } from "@/components/edit/edit-section-label";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Select Marki — FH Edit",
  description: "Wyselekcjonowane marki FH Edit. Zweryfikowane. Tylko tutaj.",
};

// Tag color mapping
const tagColors: Record<EditBrand["tag"], string> = {
  anchor: "bg-edit-gold text-white",
  polish: "bg-edit-graphite text-white",
  "quiet-luxury": "bg-stone-600 text-white",
  heritage: "bg-amber-800 text-white",
  discovery: "bg-teal-700 text-white",
};

function BrandCard({ brand }: { brand: EditBrand }) {
  return (
    <div className="bg-white p-6 border border-stone-200 hover:border-edit-gold transition-colors">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-serif text-[22px] text-edit-graphite mb-1">
            {brand.name}
          </h3>
          <p className="text-[11px] font-light tracking-wide text-warm-gray uppercase">
            {brand.origin}
          </p>
        </div>
        <span
          className={`px-2 py-1 text-[9px] font-medium tracking-[0.1em] uppercase ${tagColors[brand.tag]}`}
        >
          {brand.tagLabel}
        </span>
      </div>

      {/* Description */}
      <p className="text-[13px] font-light leading-relaxed text-edit-graphite/80 mb-4">
        {brand.description}
      </p>

      {/* Price Range */}
      <p className="text-[12px] font-light text-edit-gold">
        {brand.priceRange}
      </p>
    </div>
  );
}

function CategorySection({
  category,
  brands,
}: {
  category: EditBrand["category"];
  brands: EditBrand[];
}) {
  return (
    <section className="mb-16">
      <h2 className="text-[13px] font-light tracking-[0.2em] text-edit-gold uppercase mb-8 border-b border-edit-gold/30 pb-3">
        {categoryLabels[category]}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  );
}

export default function SellersPage() {
  const allBrands = getAllBrands();

  // Group brands by category
  const categories: EditBrand["category"][] = [
    "clothing",
    "polish",
    "cashmere",
    "footwear",
    "accessories",
  ];

  const brandsByCategory = categories.reduce(
    (acc, cat) => {
      acc[cat] = allBrands.filter((b) => b.category === cat);
      return acc;
    },
    {} as Record<EditBrand["category"], EditBrand[]>
  );

  return (
    <main className="bg-edit-ivory min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center border-b border-edit-gold/20">
        <EditSectionLabel
          label="SELECT MARKI"
          subtitle="Marki warte zatrzymania się. Wyselekcjonowane. Zweryfikowane. Tylko tutaj."
        />
        <p className="max-w-2xl mx-auto mt-6 text-[14px] font-light leading-relaxed text-edit-graphite/70">
          Każda marka w katalogu FH Edit przeszła weryfikację. Sprawdzamy jakość,
          historię, komunikację rozmiarów i zgodność z naszą estetyką. To nie jest
          marketplace wszystkiego — to kolekcja marek, które warto znać.
        </p>
      </section>

      {/* Brand Directory */}
      <section className="py-16 px-8 max-w-7xl mx-auto">
        {categories.map((category) => (
          <CategorySection
            key={category}
            category={category}
            brands={brandsByCategory[category]}
          />
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-edit-graphite text-center">
        <h3 className="font-serif text-[28px] text-white mb-4">
          Jesteś marką?
        </h3>
        <p className="text-[13px] font-light text-white/70 mb-8 max-w-lg mx-auto">
          FH Edit to zamknięty katalog — ale rozmawiamy. Jeśli uważasz, że Twoja
          marka pasuje do naszej selekcji, napisz do nas.
        </p>
        <a
          href="mailto:edit@fashionhero.pl"
          className="inline-block px-8 py-3 text-[12px] font-light tracking-[0.15em] text-white border border-white hover:border-edit-gold hover:text-edit-gold transition-colors"
        >
          APLIKUJ DO EDIT
        </a>
      </section>
    </main>
  );
}
