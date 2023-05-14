import Image from "next/image";
import React from "react";

import { Store } from "@/types";
import { formatDistance } from "@/utils";

type Props = {
  stores: Store[];
};

export function StoreList({ stores }: Props) {
  return (
    <div className="bg-white w-full rounded-xl overflow-hidden">
      <div className="flex justify-between w-full p-4 bg-light-grey">
        <input
          className="searchInput md:w-80 flex-grow"
          type="search"
          name="search"
          placeholder="Chercher des magasins..."
        />
        <button className="primaryButton ml-4">Recherche</button>
      </div>
      <section className="w-full md:h-[22rem] md:overflow-y-scroll">
        <ul>
          {stores.map((store) => (
            <li
              key={store.properties.placeId}
              className="flex flex-wrap justify-between align-middle px-6 py-2 border-b text-sm cursor-pointer hover:bg-light-grey"
            >
              <article className="flex w-full md:w-1/2 mb-2 md:mb-0">
                <figure className="flex items-center w-8 md:w-8 mr-4">
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
                    {store.properties.address.street} {store.properties.address.cityName}{" "}
                    {store.properties.address.zipCode}
                  </p>
                </div>
              </article>
              <div className="flex flex-wrap flex-row items-center w-8/12 md:w-fit">
                <button className="roundedButton bg-green-notification mr-2">Ouvert</button>
                <p className="text-green-notification text-sm">jusqu&apos;à 22:00</p>
              </div>
              <article>
                <p className="font-medium">Distance</p>
                <p>{formatDistance(store.properties.distance)}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
