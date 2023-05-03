import React from "react";

import { Product } from "@/types";

import { Filters } from "../filters";
import { ProductGrid } from "../productGrid";

type Props = {
  products: Product[];
};

export function Products({ products }: Props) {
  return (
    <div className="w-full">
      <section className="flex flex-wrap justify-between items-end w-[100%] py-8 border-b">
        <article className="sm:w-full md:w-1/2">
          <h2 className="text-2xl font-medium">Offres spéciales</h2>
          <p>{products.length} produits</p>
        </article>
        <div className="flex items-center">
          <p className="mr-4">Trier par:</p>
          <select className="filterButton">
            <option value="relevance">Relevance</option>
            <option value="name-asc">Nom (A-Z)</option>
            <option value="name-desc">Nom (Z-A)</option>
            <option value="price-asc">Prix (0-9)</option>
            <option value="price-desc">Prix (9-0)</option>
          </select>
        </div>
      </section>
      <div className="flex flex-wrap w-[100%] py-12">
        <div className="sm:w-full md:w-3/12">
          <Filters />
        </div>
        <div className="sm:w-full md:w-9/12">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
