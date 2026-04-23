import { notFound } from "next/navigation";
import Image from "next/image";
import { EditProductInfo } from "@/components/edit/edit-product-info";
import { EditProductCard } from "@/components/edit/edit-product-card";
import { EditFallbackSeparator } from "@/components/edit/edit-fallback-separator";
import { EditSectionLabel } from "@/components/edit/edit-section-label";
import { getEditProducts, getComplementaryProducts } from "@/data/edit-products";

interface EditProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { slug } = await params;
  const editProducts = getEditProducts();
  const product = editProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const complementaryProducts = getComplementaryProducts(product, 3);
  const mainImage = product.colors[0]?.image || product.images[0];

  return (
    <div className="bg-edit-ivory min-h-screen">
      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Left - Image (60%) */}
        <div className="lg:w-[60%] bg-edit-ivory">
          <div className="relative aspect-[3/4] lg:aspect-auto lg:h-screen lg:sticky lg:top-0">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right - Product Info (40%) */}
        <div className="lg:w-[40%] bg-edit-ivory">
          <EditProductInfo product={product} />
        </div>
      </div>

      {/* Complementary Products Section */}
      <section className="bg-edit-fallback-bg py-16 px-[8%]">
        <EditSectionLabel
          label="DOPASUJ STYLIZACJĘ"
          subtitle="Z kolekcji FashionHero"
        />
        
        <div className="max-w-5xl mx-auto mt-4">
          <EditFallbackSeparator text="Uzupełnij stylizację z FashionHero" />
        </div>

        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {complementaryProducts.map((p) => (
            <EditProductCard
              key={p.id}
              product={p}
              isEditProduct={false}
              size="small"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const editProducts = getEditProducts();
  return editProducts.map((product) => ({
    slug: product.slug,
  }));
}
