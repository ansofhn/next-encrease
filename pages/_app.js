import { useEffect } from "react";
import { store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    store.AuthStore.isAuthenticated();
    // store.UserStore.setUser();
  }, [store.AuthStore.isLoggin]);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
