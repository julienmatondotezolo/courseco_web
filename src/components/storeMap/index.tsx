import Image from "next/image";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";

import { Store } from "@/types";

type Props = {
  stores: Store[];
};

export function StoreMap({ stores }: Props) {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 14,
  });

  // stores.map((store) => console.log("store:", store.geometry.coordinates));

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN}
      // onMove={(nextViewPort) => setViewPort(nextViewPort)}
      onMove={(evt) => setViewPort(evt)}
      mapStyle="mapbox://styles/julienmt/clhkkbjcq01nk01pg9m593nk6"
    >
      {stores.map((store) => (
        <Marker
          key={store.properties.placeId}
          latitude={store.geometry.coordinates[1]}
          longitude={store.geometry.coordinates[0]}
          anchor="center"
        >
          <Image className="object-contain" src={store.properties.logoStore} alt="Hero image" width={50} height={50} />
        </Marker>
      ))}
    </Map>
  );
}
