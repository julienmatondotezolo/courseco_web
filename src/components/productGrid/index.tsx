import Image from "next/image";
import React from "react";

import { Product } from "@/types";

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-x-2 md:gap-x-5 gap-y-10 overflow-hidden">
      {products.map((product) => (
        <div className="relative flex flex-wrap rounded-xl w-[100%] border" key={product.id}>
          {product.promotion ? (
            <p className="absolute rounded-tl-xl rounded-r-lg px-3 py-2 text-xs text-white bg-red-notification">
              {product.promotion}
            </p>
          ) : (
            ""
          )}
          <button className="absolute bottom-0 right-0 primaryButton rounded-bl-none rounded-tr-none">+</button>

          <section className="flex flex-col flex-1 justify-between p-5">
            <figure className="flex justify-center w-[100%] p-5 object-contain">
              <Image src={product.images} alt={product.name} width={100} height={100} />
            </figure>
            <article>
              <p className="text-xs">{product.store}</p>
              <h3 className="text-sm font-medium">{product.name}</h3>
            </article>
            {product.discountedPriceFormatted ? (
              <p className="text-lg font-bold">{product.discountedPriceFormatted}</p>
            ) : (
              <p className="text-lg font-bold">{product.price}</p>
            )}
          </section>
        </div>
      ))}
    </div>
  );
}
