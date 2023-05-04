import { apiConfig } from "@/config";
import { Store } from "@/types";

export const fetchStores = async () => {
  const res = await fetch(apiConfig.store.nearby, { method: "POST" });
  const data = await res.json();

  console.log("data:", data);

  const stores: Store[] = data.groceryObj.features;

  return stores;
};
