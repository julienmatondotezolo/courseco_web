import React from "react";

export function Navigation() {
  return (
    <nav className="flex flex-row flex-wrap justify-between w-full py-4">
      <div className="flex">
        <button className="primaryButton mr-8">Parcourir les catégories</button>
        <ul className="flex items-center justify-between md:w-48">
          <li>Home</li>
          <li>Offres spéciales</li>
        </ul>
      </div>
      <div className="flex">
        <input
          className="filterButton md:w-80"
          type="search"
          name="search"
          placeholder="Rechercher des produits ou des offres..."
        />
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-secondary-color font-medium text-xs ml-8">
          MJ
        </div>
      </div>
    </nav>
  );
}
