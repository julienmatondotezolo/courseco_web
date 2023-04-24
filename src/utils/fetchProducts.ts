import { apiConfig } from "@/config";
import { Product } from "@/types";

export const fetchProduct = async () => {
  const res = await fetch(apiConfig.products.all, { method: "POST" });
  const data = await res.json();

  const products: Product[] = data.products;

  return products;
};
