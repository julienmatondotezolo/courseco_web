import Image from "next/image";
import React from "react";

import { imagesConfig } from "@/config";

type Props = {
  username: String;
};

export function Hero({ username }: Props) {
  return (
    <figure className="w-full pr-12">
      <article>
        <h1>
          Bonjour, <span>{username}</span>
        </h1>
        <h1>Economisez sur vos courses</h1>
        <h1>
          avec <span>CoursEco</span>
        </h1>
      </article>
      <Image src={imagesConfig.images.hero} alt="Hero image" width={100} height={100} />
    </figure>
  );
}
