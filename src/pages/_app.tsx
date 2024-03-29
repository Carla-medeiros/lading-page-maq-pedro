import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements" as any)).default;
    };
    use();
  }, []);

  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
