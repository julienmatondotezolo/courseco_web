import { atom } from "recoil";

import { Store } from "@/types";

export const storeAtom = atom<Store>({
  key: "storeAtom", // unique ID (with respect to other atoms/selectors)
  default: {}, // valeur par défaut (alias valeur initials)
});
