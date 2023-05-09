import { apiConfig } from "@/config";
import { Store } from "@/types";

export const fetchStores = async (position: { lat: any; long: any }) => {
  const courseco_url = apiConfig.store.nearby;
  const { lat, long } = position;

  // const url = `${courseco_url}?latitude=${lat}&longitude=${long}`;
  const url = courseco_url;

  console.log("url:", url);

  try {
    const res = await fetch(url, { method: "POST" });

    const data = await res.json();

    const stores: Store[] = data.groceryObj.features;

    return stores;
  } catch (error) {
    throw new Error(`HTTP error!: ${error}`);
  }
};
