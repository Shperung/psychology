import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import Banner from '../components/banner/banner';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Редько Тетяна Георгіївна</title>
      </Head>
      <Banner />
    </>
  );
}
