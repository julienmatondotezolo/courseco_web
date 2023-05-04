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
  name: string;
  street: string;
  city: string;
  logostore: string;
  distance: string;
  store: string;
}
