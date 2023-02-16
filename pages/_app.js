import { useEffect } from "react";
import { UserProvider } from "../context/UserDetailContext";
import { store } from "../store/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    store.AuthStore.isAuthenticated();
  }, [store.AuthStore.isLoggin]);

  return getLayout(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
