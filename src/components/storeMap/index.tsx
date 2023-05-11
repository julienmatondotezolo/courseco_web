import React, { useState } from "react";
import Map from "react-map-gl";

import { Store } from "@/types";

type Props = {
  stores: Store[];
};

export function StoreMap({ stores }: Props) {
  const [viewport, setViewPort] = useState({
    with: "100%",
    height: "100%",
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 3.5,
  });

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/julienmt/ckx6t9wl86f0u14nqm714f3th"
    ></Map>
  );
}
