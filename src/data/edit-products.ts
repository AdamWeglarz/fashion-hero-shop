import { products } from "./products";
import { getSellerById } from "./sellers";
import type { Product } from "@/types";

// FH Edit curated sellers (premium sellers featured in Edit)
export const editSellerIds = ["s2", "s6", "s4"]; // Bella Donna, EcoThreads, Modna Szafa

// Get all FH Edit products (from curated sellers)
export function getEditProducts(): Product[] {
  return products.filter((p) => editSellerIds.includes(p.sellerId));
}

// Get FashionHero fallback products (from non-Edit sellers)
export function getFallbackProducts(limit = 4): Product[] {
  return products
    .filter((p) => !editSellerIds.includes(p.sellerId))
    .slice(0, limit);
}

// Get specific products by slug for editorial selection
export function getEditorialProducts(): Product[] {
  const slugs = ["cloud-runner", "wrap-dress", "ankle-boot-womens", "silk-cami"];
  return slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}

// Get specific fallback products for homepage
export function getHomepageFallbackProducts(): Product[] {
  const slugs = ["trail-pacer", "classic-tee-mens-1", "stealth-hoodie", "hemp-runner"];
  const found = slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
  
  // If not enough found by slug, get any fallback products
  if (found.length < 4) {
    const additional = getFallbackProducts(4 - found.length);
    return [...found, ...additional].slice(0, 4);
  }
  return found;
}

// Get a single Edit product by slug
export function getEditProduct(slug: string): Product | undefined {
  return getEditProducts().find((p) => p.slug === slug);
}

// Get complementary fallback products for product detail page
export function getComplementaryProducts(
  currentProduct: Product,
  limit = 3
): Product[] {
  // Get products from different categories for styling complement
  const fallback = products.filter(
    (p) =>
      !editSellerIds.includes(p.sellerId) &&
      p.id !== currentProduct.id &&
      p.productCategory !== currentProduct.productCategory
  );
  return fallback.slice(0, limit);
}

// Featured Edit sellers with extended info
export interface EditSeller {
  id: string;
  name: string;
  tagline: string;
  location: string;
  image: string;
}

export const featuredEditSellers: EditSeller[] = [
  {
    id: "s2",
    name: "Bella Donna",
    tagline: "Elegancka moda damska. Kraków.",
    location: "Kraków",
    image: "/images/products/product-22.jpg",
  },
  {
    id: "s6",
    name: "EcoThreads",
    tagline: "Zrównoważona moda. Warszawa.",
    location: "Warszawa",
    image: "/images/products/product-17.jpg",
  },
  {
    id: "s4",
    name: "Modna Szafa",
    tagline: "Polska moda na co dzień. Poznań.",
    location: "Poznań",
    image: "/images/products/product-20.jpg",
  },
];

export function getFeaturedSellers(): EditSeller[] {
  return featuredEditSellers;
}
