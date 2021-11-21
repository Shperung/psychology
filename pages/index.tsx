import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.scss';

export default function Home() {
  const router = useRouter();
  console.log('%c --- router', 'color:green', router);

  return (
    <div className={styles.container}>
      <Head>
        <title>Редько Тетяна Георгіївна</title>
      </Head>
      home
    </div>
  );
}
