import React from "react";

import { Store } from "@/types";

import { StoreList } from "../storeList";
import { StoreMap } from "../storeMap";

type Props = {
  stores: Store[];
};

export function StoresFinder({ stores }: Props) {
  return (
    <div className="relative w-full h-full bg-orange-opaque">
      <div className="absolute hidden md:block top-0 right-0 w-2/3 h-full overflow-hidden">
        <StoreMap stores={stores} />
      </div>
      <div className="absolute md:left-[4%] w-full md:w-auto contents md:block">
        <section className="flex flex-col mx-auto w-11/12 md:max-w-screen-xl">
          <h1 className="sm:w-full py-8 text-2xl md:text-5xl font-medium">
            Tous les magasins
            <br />
            Près de chez vous.
          </h1>
          {stores ? <StoreList stores={stores} /> : <div>Loading...</div>}
        </section>
      </div>
    </div>
  );
}
