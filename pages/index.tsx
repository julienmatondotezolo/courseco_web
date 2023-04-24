import Head from "next/head";

import { Products } from "../src/components/";

export default function Home() {
  return (
    <>
      <Head>
        <title>Courseco - Economisez sur vos courses</title>
        <meta name="description" content="Economisez sur vos courses avec Courseco." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world...</h1>
        <Products />
      </main>
    </>
  );
}
