import Image from "next/image";
import React from "react";

import { Store } from "@/types";

type Props = {
  stores: Store[];
};

export function StoreList({ stores }: Props) {
  return (
    <div className="bg-white top-1/2 w-full md:w-1/2 rounded-xl">
      <section className="w-full overflow-hidden">
        <ul>
          {stores.map((store, i) => (
            <li key={i} className="flex flex-wrap justify-between align-middle px-6 py-2 border-b text-sm">
              <article className="flex">
                <figure className="flex items-center w-4 md:w-8 mr-4">
                  <Image
                    className="object-contain"
                    src={store.properties.logoStore}
                    alt="Hero image"
                    width={100}
                    height={100}
                  />
                </figure>
                <div>
                  <h3 className="font-medium">{store.properties.commercialName}</h3>
                  <p className="float-left">
                    {store.properties.address.street}, {store.properties.address.cityName}{" "}
                    {store.properties.address.zipCode}
                  </p>
                </div>
              </article>
              <div className="hidden md:flex flex-wrap flex-row items-center">
                <button className="roundedButton bg-green-notification mr-2">Ouvert</button>
                <p className="text-green-notification text-sm">jusqu'à 22:00</p>
              </div>
              <article>
                <p className="font-medium">Distance</p>
                <p>{store.properties.distance}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
