import Link from "next/link";
import React from "react";

export function Navigation() {
  return (
    <nav className="flex flex-row flex-wrap justify-between w-full py-4">
      <div className="hidden md:flex">
        <button className="primaryButton mr-8">Parcourir les catégories</button>
        <ul className="flex items-center justify-between md:w-48">
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>Offres spéciales</li>
        </ul>
      </div>

      <div className="flex items-center md:hidden relative">
        <button className="flex items-center justify-center p-2 text-gray-500 transition duration-300 ease-in-out rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-300">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
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
