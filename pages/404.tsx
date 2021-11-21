import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Error() {
  const router = useRouter();

  useEffect(() => {
    // редірект на головну при 404
    const timeout = setTimeout(() => {
      router.push('/');
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div>
      <Head>
        <title>Редько Тетяна Георгіївна | Сторінка відсутня</title>
      </Head>
      Error
    </div>
  );
}
