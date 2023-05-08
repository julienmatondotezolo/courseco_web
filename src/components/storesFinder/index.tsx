import React from "react";

import { StoreList } from "../storeList";

export function StoresFinder() {
  return (
    <div className="w-full h-full bg-orange-opaque">
      <div className="flex flex-col mx-auto w-11/12 md:max-w-screen-xl relative">
        <h1 className="sm:w-full py-8 text-2xl md:text-5xl font-medium">
          Tous les magasins
          <br />
          Près de chez vous.
        </h1>
        <StoreList />
      </div>
    </div>
  );
}
