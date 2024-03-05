import Main from '../pages/main';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>꾸준히 발전하는 개발자 이채이</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Main />
      </main>
    </>
  );
}
