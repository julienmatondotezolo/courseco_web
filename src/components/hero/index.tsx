import Image from "next/image";
import React from "react";

import { imagesConfig } from "@/config";

type Props = {
  username: String;
};

export function Hero({ username }: Props) {
  return (
    <figure className="overflow-hidden w-full bg-blue-opaque">
      <div className="flex mx-auto w-11/12 md:max-w-screen-xl relative">
        <figure className="absolute top-[100%] right-0 -translate-y-2/4 -rotate-[20deg] h-64 md:h-[400%] w-4/12">
          <Image className="object-contain" src={imagesConfig.images.hero} alt="Hero image" layout="fill" />
        </figure>
        <article className="sm:w-full py-8">
          <h1 className="text-2xl md:text-5xl font-medium">
            Bonjour, <span className="text-primary-color">{username}</span> <br />
            Economisez sur vos courses <br />
            avec <span className="text-secondary-color">CoursEco</span>.
          </h1>
        </article>
      </div>
    </figure>
  );
}
