// pages/_app.tsx
import '../app/globals.css'; // 글로벌 스타일
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
