import React from "react";

export function FilterButton() {
  return (
    <button className="filterButton mb-4">
      <input className="float-left w-[20px] h-[20px] mr-2" type="checkbox" />
      <p className="float-left">
        Magasins Aldi <span className="text-gray-400">(184)</span>
      </p>
    </button>
  );
}
