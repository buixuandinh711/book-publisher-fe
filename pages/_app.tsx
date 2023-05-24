import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UserProvider } from "@/contexts/UserContext";
import { CartProvider } from "@/contexts/CartContext";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}
