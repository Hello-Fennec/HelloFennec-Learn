import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { AnimatePresence } from "framer-motion";
import Nav from "../layout/navbar";
import Head from "next/head";
import Icon from "../assets/images/Fennec_icon.webp"

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>HelloFennec - Learn</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Nav />
      {/* <AnimatePresence mode="wait"> */}
      <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
