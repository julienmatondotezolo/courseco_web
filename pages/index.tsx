import type { GetStaticProps } from "next";
import Head from "next/head";

import { Products } from "@/components/";
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
      <main>
        <h1>Hello world...</h1>
        <Products products={products} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products: Product[] = await fetchProduct();

  return {
    props: {
      products,
    },
    // revalidate: 10,
  };
};
