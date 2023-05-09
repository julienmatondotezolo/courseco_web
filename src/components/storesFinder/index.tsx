import React, { useEffect, useState } from "react";

import { Store } from "@/types";
import { fetchStores } from "@/utils";

import { StoreList } from "../storeList";

export function StoresFinder() {
  const [stores, setStores] = useState<Store[]>([]);
  const [position] = useState({ lat: "50.850346", long: "4.351721" });

  useEffect(() => {
    async function fetchData() {
      const data = (await fetchStores(position)) || [];

      setStores(data);
    }

    fetchData();
  }, [position]);

  return (
    <div className="w-full h-full bg-orange-opaque">
      <div className="flex flex-col mx-auto w-11/12 md:max-w-screen-xl relative">
        <h1 className="sm:w-full py-8 text-2xl md:text-5xl font-medium">
          Tous les magasins
          <br />
          Près de chez vous.
        </h1>
        {stores ? <StoreList stores={stores} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}
