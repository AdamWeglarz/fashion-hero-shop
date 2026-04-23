import { products } from "./products";
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

// ============================================
// FH Edit Select Brands Directory
// ============================================

export interface EditBrand {
  id: string;
  name: string;
  origin: string;
  description: string;
  priceRange: string;
  tag: "anchor" | "polish" | "quiet-luxury" | "heritage" | "discovery";
  tagLabel: string;
  category: "clothing" | "polish" | "cashmere" | "footwear" | "accessories";
}

export const editBrands: EditBrand[] = [
  // Odzież — contemporary premium
  {
    id: "ganni",
    name: "Ganni",
    origin: "Dania",
    description: "Najchętniej szukana marka przez segment 28–40. Prints, sukienki, casualwear z charakterem.",
    priceRange: "400–1 200 PLN",
    tag: "anchor",
    tagLabel: "Kotwica",
    category: "clothing",
  },
  {
    id: "toteme",
    name: "Totême",
    origin: "Szwecja",
    description: "Definicja old money estetyki. Zero logo, doskonałe kroje, materiały które mówią same za siebie.",
    priceRange: "600–2 500 PLN",
    tag: "quiet-luxury",
    tagLabel: "Quiet luxury",
    category: "clothing",
  },
  {
    id: "apc",
    name: "A.P.C.",
    origin: "Francja",
    description: "Denim i basics najwyższej jakości. Klient który nie chce się wyróżniać. Klasyk który nie starzeje się.",
    priceRange: "300–1 200 PLN",
    tag: "quiet-luxury",
    tagLabel: "Quiet luxury",
    category: "clothing",
  },
  {
    id: "filippa-k",
    name: "Filippa K",
    origin: "Szwecja",
    description: "Inwestycyjne kawałki. Skandynawski minimalizm, konsekwentny sizing — niska zwrotność.",
    priceRange: "400–1 800 PLN",
    tag: "quiet-luxury",
    tagLabel: "Minimalizm",
    category: "clothing",
  },
  {
    id: "closed",
    name: "Closed",
    origin: "Niemcy",
    description: "Denim i knitwear premium. Mało obecny w Polsce — typ odkrycia które Edit powinien robić.",
    priceRange: "350–1 400 PLN",
    tag: "quiet-luxury",
    tagLabel: "Quiet luxury",
    category: "clothing",
  },
  {
    id: "sezane",
    name: "Sézane",
    origin: "Francja",
    description: "Accessible French premium. Rozpoznawalna w Polsce. Słaba dystrybucja lokalnie — szansa.",
    priceRange: "250–900 PLN",
    tag: "anchor",
    tagLabel: "Kotwica",
    category: "clothing",
  },

  // Polskie — Select kandydaci
  {
    id: "ania-kuczynska",
    name: "Ania Kuczyńska",
    origin: "Polska · Warszawa",
    description: "Minimalistyczna projektantka. Kultowa wśród świadomych kupujących premium. Ponadsezonowa.",
    priceRange: "500–2 200 PLN",
    tag: "anchor",
    tagLabel: "Kotwica PL",
    category: "polish",
  },
  {
    id: "risk",
    name: "RISK Made in Warsaw",
    origin: "Polska · Warszawa",
    description: "Rozpoznawalny lifestyle brand. Silna estetyka, klientka pokrywa się z Twoim segmentem premium.",
    priceRange: "400–700 PLN",
    tag: "polish",
    tagLabel: "Polska",
    category: "polish",
  },
  {
    id: "bizuu",
    name: "Bizuu",
    origin: "Polska",
    description: "Contemporary occasionwear. Mocna w mediach modowych, dobra komunikacja rozmiarów.",
    priceRange: "350–900 PLN",
    tag: "polish",
    tagLabel: "Polska",
    category: "polish",
  },
  {
    id: "zabel",
    name: "Zabèl",
    origin: "Polska",
    description: "Kaszmiry i wełna, produkcja polska. Mało znana, wysoka jakość. Idealna historia sprzedawcy Select.",
    priceRange: "400–900 PLN",
    tag: "quiet-luxury",
    tagLabel: "Kaszmir PL",
    category: "polish",
  },

  // Kaszmiry & płaszcze — old money core
  {
    id: "hemisphere",
    name: "Hemisphere",
    origin: "Niemcy",
    description: "Kaszmiry premium, nieznana w Polsce. Klientka poczuje że znalazła coś czego inne nie mają.",
    priceRange: "500–1 200 PLN",
    tag: "discovery",
    tagLabel: "Odkrycie",
    category: "cashmere",
  },
  {
    id: "max-mara",
    name: "Max Mara",
    origin: "Włochy",
    description: "Klasyczne płaszcze, ikona old money. Trudna rekrutacja — ale linia weekend może być rozmową.",
    priceRange: "800–3 500 PLN",
    tag: "heritage",
    tagLabel: "Ikona",
    category: "cashmere",
  },
  {
    id: "massimo-dutti",
    name: "Massimo Dutti",
    origin: "Hiszpania",
    description: "Najłatwiejsza kotwica old money. Estetycznie spójna, szeroka rozpoznawalność w Polsce.",
    priceRange: "200–800 PLN",
    tag: "quiet-luxury",
    tagLabel: "Accessible",
    category: "cashmere",
  },

  // Obuwie
  {
    id: "scarosso",
    name: "Scarosso",
    origin: "Włochy · Marche",
    description: "Made in Italy, już DTC — dla nich FH Edit to dodatkowy kanał, nie zagrożenie. Najrealistyczniejszy.",
    priceRange: "400–900 PLN",
    tag: "anchor",
    tagLabel: "Rekrutowalny",
    category: "footwear",
  },
  {
    id: "grenson",
    name: "Grenson",
    origin: "Wielka Brytania",
    description: "Northampton cobbling tradition. Fashion-forward niż klasyczne domy, mała obecność w Polsce.",
    priceRange: "700–1 800 PLN",
    tag: "heritage",
    tagLabel: "Heritage",
    category: "footwear",
  },
  {
    id: "meermin",
    name: "Meermin",
    origin: "Hiszpania · Mallorca",
    description: "Duże community w Polsce wśród świadomych mężczyzn. Najlepszy stosunek jakości do ceny.",
    priceRange: "300–700 PLN",
    tag: "heritage",
    tagLabel: "Heritage",
    category: "footwear",
  },
  {
    id: "kazar",
    name: "Kazar",
    origin: "Polska",
    description: "Polska marka butów premium. Select tier dla lepszych kolekcji — idealne dopełnienie do sukienek.",
    priceRange: "300–700 PLN",
    tag: "polish",
    tagLabel: "Polska",
    category: "footwear",
  },

  // Akcesoria
  {
    id: "wouters-hendrix",
    name: "Wouters & Hendrix",
    origin: "Belgia",
    description: "Subtelna biżuteria rzemieślnicza. Nieoczywista, dobra historia — dokładnie typ odkrycia dla Edit.",
    priceRange: "300–1 200 PLN",
    tag: "discovery",
    tagLabel: "Odkrycie",
    category: "accessories",
  },
  {
    id: "wittchen",
    name: "Wittchen",
    origin: "Polska",
    description: "Polska skórzana galanteria. Rozpoznawalna, ceniona. Select dla premium linii torebek.",
    priceRange: "250–800 PLN",
    tag: "polish",
    tagLabel: "Polska",
    category: "accessories",
  },
  {
    id: "balagan",
    name: "Balagan",
    origin: "Polska · Warszawa",
    description: "Małe serie, ręczna robota, butiki w Warszawie. Idealna narracja Select — coś do opowiedzenia.",
    priceRange: "200–600 PLN",
    tag: "polish",
    tagLabel: "Polska",
    category: "accessories",
  },
];

// Get brands by category
export function getBrandsByCategory(category: EditBrand["category"]): EditBrand[] {
  return editBrands.filter((b) => b.category === category);
}

// Get all brands
export function getAllBrands(): EditBrand[] {
  return editBrands;
}

// Get featured brands for homepage (anchor brands)
export function getFeaturedBrands(limit = 6): EditBrand[] {
  return editBrands.filter((b) => b.tag === "anchor").slice(0, limit);
}

// Featured Edit sellers with extended info (mapped from brands)
export interface EditSeller {
  id: string;
  name: string;
  tagline: string;
  location: string;
  image: string;
  tag?: string;
  priceRange?: string;
}

// Using the new brands as featured sellers
export const featuredEditSellers: EditSeller[] = [
  {
    id: "ganni",
    name: "Ganni",
    tagline: "Prints, sukienki, casualwear z charakterem.",
    location: "Dania",
    image: "/images/products/product-22.jpg",
    tag: "Kotwica",
    priceRange: "400–1 200 PLN",
  },
  {
    id: "ania-kuczynska",
    name: "Ania Kuczyńska",
    tagline: "Minimalistyczna projektantka. Kultowa wśród świadomych kupujących.",
    location: "Polska · Warszawa",
    image: "/images/products/product-17.jpg",
    tag: "Kotwica PL",
    priceRange: "500–2 200 PLN",
  },
  {
    id: "toteme",
    name: "Totême",
    tagline: "Definicja old money estetyki. Zero logo, doskonałe kroje.",
    location: "Szwecja",
    image: "/images/products/product-20.jpg",
    tag: "Quiet luxury",
    priceRange: "600–2 500 PLN",
  },
];

export function getFeaturedSellers(): EditSeller[] {
  return featuredEditSellers;
}

// Brand category labels in Polish
export const categoryLabels: Record<EditBrand["category"], string> = {
  clothing: "Odzież — contemporary premium",
  polish: "Polskie — Select kandydaci",
  cashmere: "Kaszmiry & płaszcze — old money core",
  footwear: "Obuwie",
  accessories: "Akcesoria",
};
