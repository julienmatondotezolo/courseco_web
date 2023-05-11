import React from "react";

import { Store } from "@/types";

type Props = {
  stores: Store[];
};

export function StoreMap({ stores }: Props) {
  return (
    <div className="w-full h-full bg-primary-color">
      <h1>Map</h1>
      {/* {stores.map((store) => (
        <li>Test</li>
      ))} */}
    </div>
  );
}
