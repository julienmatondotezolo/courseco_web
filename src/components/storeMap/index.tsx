import React, { useState } from "react";
import Map, { Layer, Source } from "react-map-gl";

import { Store } from "@/types";

type Props = {
  stores: Store[];
};

const layerStyle = {
  id: "string",
  type: "string",
};

export function StoreMap({ stores }: Props) {
  const [viewport, setViewPort] = useState({
    with: "100%",
    height: "100%",
    latitude: 50.850346,
    longitude: 4.351721,
    zoom: 14,
  });

  return (
    <Map
      {...viewport}
      mapboxAccessToken={process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_ACCESS_TOKEN}
      onMove={(nextViewPort) => setViewPort(nextViewPort)}
      mapStyle="mapbox://styles/julienmt/clhkkbjcq01nk01pg9m593nk6"
    >
      {stores.map((store) => (
        <Source key={store.properties.placeId} id="my-data" type="geojson" data={store}>
          <Layer {...layerStyle} />
        </Source>
      ))}
    </Map>
  );
}
