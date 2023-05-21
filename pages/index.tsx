import type { GetServerSideProps } from "next";
import Head from "next/head";

import { Hero, Navigation, Products, TopNav } from "@/components/";
import { Product } from "@/types";
import { fetchProduct } from "@/utils";

type Props = {
  products: Product[];
};

export default function Home({ products }: Props) {
  return (
    <>
      <Head>
        <title>Courseco - Economisez sur vos courses</title>
        <meta name="description" content="Economisez sur vos courses avec Courseco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <header className="flex flex-wrap mx-auto w-11/12 md:max-w-screen-xl">
        <Navigation />
      </header>
      <Hero username="Julien" />
      <main className="flex mx-auto w-11/12 md:max-w-screen-xl">
        <Products products={products} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products: Product[] = await fetchProduct();

  return {
    props: {
      products,
    },
    // revalidate: 10,
  };
};
