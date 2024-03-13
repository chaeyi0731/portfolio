import Main from '../pages/main';
import Head from 'next/head';
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <Main />
    </main>
  );
}
