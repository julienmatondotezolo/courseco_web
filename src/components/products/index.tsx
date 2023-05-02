import Image from "next/image";
import React from "react";

import { Product } from "@/types";

type Props = {
  products: Product[];
};

export function Products({ products }: Props) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-x-2 md:gap-x-5 gap-y-10 overflow-hidden">
      {products.map((product) => (
        <div className="relative flex flex-wrap rounded-lg w-[100%] border " key={product.id}>
          {product.promotion ? (
            <p className="absolute px-3 py-2 text-xs text-white bg-red-notification">{product.promotion}</p>
          ) : (
            ""
          )}
          <article className="flex flex-col p-5">
            <figure className="flex justify-center w-[100%] p-5 object-contain">
              <Image src={product.images} alt={product.name} width={100} height={100} />
            </figure>
            <p>{product.store}</p>
            <h3>{product.name}</h3>
            {product.discountedPriceFormatted ? <p>{product.discountedPriceFormatted}</p> : <p>{product.price}</p>}
          </article>
        </div>
      ))}
    </div>
  );
}
