import Image from "next/image";
import React from "react";

import { imagesConfig } from "@/config";

export function StoreList() {
  const store = "aldi.png";
  const imageUrl = imagesConfig.root.url + "images/" + store;

  return (
    <div className="bg-white top-1/2 w-full md:w-1/2 rounded-xl">
      <section className="w-full overflow-hidden">
        <ul>
          <li className="flex flex-wrap justify-between align-middle px-6 py-2 border-b text-sm">
            <article className="flex">
              <figure className="flex items-center w-4 md:w-8 mr-4">
                <Image className="object-contain" src={imageUrl} alt="Hero image" width={100} height={100} />
              </figure>
              <div>
                <h3 className="font-medium">Store name</h3>
                <p className="float-left">Street</p>
              </div>
            </article>
            <div>
              <button className="buttonPrimary">Ouvert</button>
              <p className="text-green-notification text-sm">jusqu'à 22:00</p>
            </div>
            <article>
              <p className="font-medium">Distance</p>
              <p>500m</p>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}
