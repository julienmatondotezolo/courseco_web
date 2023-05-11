import type { GetServerSideProps } from "next";
import Head from "next/head";

import { Navigation, StoresFinder } from "@/components/";
import { Store } from "@/types";
import { fetchStores } from "@/utils";

type Props = {
  stores: Store[];
};

export default function Stores({ stores }: Props) {
  return (
    <>
      <Head>
        <title>Courseco - Economisez sur vos courses</title>
        <meta name="description" content="Economisez sur vos courses avec Courseco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <aside className="flex flex-wrap w-full py-2 bg-blue-opaque">
        <div className="flex flex-wrap justify-between mx-auto w-11/12 md:max-w-screen-xl">
          <p className="text-xs">Rue de la déportation 26, 1500 Ixelles</p>
          <p className="text-xs">
            NL | <span className="font-medium">FR</span>
          </p>
        </div>
      </aside>
      <header className="flex flex-wrap mx-auto w-11/12 md:max-w-screen-xl">
        <Navigation />
      </header>
      <main className="md:h-[calc(100vh-6.8rem)]">
        <StoresFinder stores={stores} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const stores: Store[] = await fetchStores({ lat: "50.850346", long: "4.351721" });

  return {
    props: {
      stores,
    },
    // revalidate: 10,
  };
};
