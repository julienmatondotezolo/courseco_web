export interface Product {
  promotion: string;
  images: string;
  manufacturerName: string;
  discountedPriceFormatted: string;
  nutriScoreLetter: string;
  price: number;
  id: string;
  name: string;
  store: string;
}

export interface Store {
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  type: string;
  properties: {
    address: {
      street: string;
      cityName: string;
      zipCode: string;
    };
    commercialName: string;
    distance: number;
    groceryName: string;
    logoStore: string;
    placeId: number;
  };
}
