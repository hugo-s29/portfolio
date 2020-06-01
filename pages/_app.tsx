import { AppProps } from "next/app";
import { GlobalStyle } from "../components";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Limelight&family=Poiret+One&display=swap"
          rel="stylesheet"
        ></link>
        <title>Hugo SALOU</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
