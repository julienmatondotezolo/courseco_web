import Link from "next/link";
import React, { useEffect, useState } from "react";

export function TopNav() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    // Fetch data from API if `location` object is set
    if (location) {
      console.log("location", location);
    }
  }, [location]);

  return (
    <aside className="flex flex-wrap w-full py-2 bg-blue-opaque">
      <div className="flex flex-wrap justify-between mx-auto w-11/12 md:max-w-screen-xl">
        <Link href="/stores" legacyBehavior>
          <a className="text-xs">Rue de la déportation 26, 1500 Ixelles</a>
        </Link>
        <p className="text-xs">
          NL | <span className="font-medium">FR</span>
        </p>
      </div>
    </aside>
  );
}
