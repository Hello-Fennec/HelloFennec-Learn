import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Nav from "../layout/navbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <header>
        <title>HelloFennec - Learn</title>
      </header>
      <Nav />
      {/* <AnimatePresence mode="wait"> */}
      <Component {...pageProps} key={router.route} />
      {/* </AnimatePresence> */}
    </>
  );
}

export default MyApp;
