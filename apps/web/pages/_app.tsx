import "../styles/globals.css";
import type { AppProps } from "next/app";

import { MainLayout } from "ui";
import { globalStyles } from "ui/globalReset";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
