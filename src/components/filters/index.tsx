import React from "react";

import { FilterButton } from "../filterButton";

export function Filters() {
  return (
    <div className="w-full pr-12">
      <section className="mb-4">
        <h3 className="text-lg font-medium mb-4">Filtrer par:</h3>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </section>
      <section className="mb-4">
        <h3 className="text-lg font-medium mb-4">Catégorie</h3>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </section>
    </div>
  );
}
