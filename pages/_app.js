import Navbar from "../components/navbar";
import Footer from '../components/Footer'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
