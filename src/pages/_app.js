import DefaultLayout from '@/components/layouts/DefaultLayout';
import '@/styles/bootstrap-custom.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

import "@/styles/globals.scss";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web Recipe Book</title>
        <meta name="description" content="Figma Community" />
        <meta name="viewport" content="width=device-width, initial-scale=1, use-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
        <Component {...pageProps} />;
      </DefaultLayout>
    </>
  )

}
