import Image from "next/image";
import React from "react";

import { Product } from "@/types";

type Props = {
  products: Product[];
};

export function Products({ products }: Props) {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product, i) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <Image src={product.images} alt={product.name} width={100} height={100} />
          <p>
            Project {i + 1} of {products.length}
          </p>
        </div>
      ))}
    </div>
  );
}
