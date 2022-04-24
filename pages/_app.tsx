import '../styles/globals.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Gta5 Typescript</title>
      <link key={1} rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href='../fonts/GhotamPro/stylesheet.css'></link>
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
