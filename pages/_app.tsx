import "pages/globals.css";
import { YandexMetrika } from "../components/YandexMetrika";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <YandexMetrika />
      <Component {...pageProps} />;
    </>
  );
}
