import DefaultLayout from "@/components/layouts/DefaultLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Recipe Book</title>
        <meta name="description" content="Figma Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        home
      </DefaultLayout>

    </>
  );
}
