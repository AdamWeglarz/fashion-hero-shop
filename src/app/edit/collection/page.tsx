import { EditSidebarFilter } from "@/components/edit/edit-sidebar-filter";
import { EditProductCard } from "@/components/edit/edit-product-card";
import { EditFallbackSeparator } from "@/components/edit/edit-fallback-separator";
import { getEditProducts, getFallbackProducts } from "@/data/edit-products";

export default function EditCollectionPage() {
  const editProducts = getEditProducts();
  const fallbackProducts = getFallbackProducts(4);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <EditSidebarFilter />

      {/* Main Content */}
      <main className="flex-1 bg-edit-ivory py-12 px-12">
        {/* Edit Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {editProducts.map((product) => (
            <EditProductCard key={product.id} product={product} isEditProduct />
          ))}
        </div>

        {/* Fallback Separator */}
        <EditFallbackSeparator />

        {/* Fallback Products Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {fallbackProducts.map((product) => (
            <EditProductCard
              key={product.id}
              product={product}
              isEditProduct={false}
              size="small"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
