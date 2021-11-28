import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log('%c --- router', 'color:green', router);

  return (
    <div>
      <Head>
        <title>Редько Тетяна Георгіївна</title>
      </Head>
      home
    </div>
  );
}
