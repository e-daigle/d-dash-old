import type { AppProps } from "next/app";
import "../themes/default.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
