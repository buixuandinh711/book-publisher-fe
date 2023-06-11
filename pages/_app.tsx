import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import store from "../contexts/store";
import { Provider } from "react-redux";
import { CartProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </Provider>
  );
}
