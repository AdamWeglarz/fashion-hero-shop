import { EditHero } from "@/components/edit/edit-hero";
import { EditSectionLabel } from "@/components/edit/edit-section-label";
import { EditSellerCard } from "@/components/edit/edit-seller-card";
import { EditProductCard } from "@/components/edit/edit-product-card";
import { EditFallbackSeparator } from "@/components/edit/edit-fallback-separator";
import {
  getFeaturedSellers,
  getEditorialProducts,
  getHomepageFallbackProducts,
} from "@/data/edit-products";

export default function EditHomePage() {
  const sellers = getFeaturedSellers();
  const editorialProducts = getEditorialProducts();
  const fallbackProducts = getHomepageFallbackProducts();

  return (
    <>
      {/* Hero Section */}
      <EditHero />

      {/* Select Sellers Section */}
      <section className="bg-edit-ivory py-20 px-8">
        <EditSectionLabel
          label="SELECT SPRZEDAWCY"
          subtitle="Poznaj ich, nie tylko ich produkty."
        />
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {sellers.map((seller) => (
            <EditSellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </section>

      {/* Editorial Selection Section */}
      <section className="bg-edit-ivory py-20 px-[8%]">
        <EditSectionLabel
          label="EDYTORSKI WYBÓR"
        />
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorialProducts.map((product) => (
            <EditProductCard key={product.id} product={product} isEditProduct />
          ))}
        </div>
      </section>

      {/* FashionHero Fallback Section */}
      <section className="bg-edit-fallback-bg py-16 px-[8%]">
        <EditFallbackSeparator />
        <div className="max-w-6xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {fallbackProducts.map((product) => (
            <EditProductCard 
              key={product.id} 
              product={product} 
              isEditProduct={false}
              size="small"
            />
          ))}
        </div>
      </section>
    </>
  );
}
