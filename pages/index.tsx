import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../trans/trans';
import Banner from '../components/banner/banner';
import AboutBlock from '../components/about/about';
import PricesBlock from '../components/prices/prices';

export default function Home() {
  const router = useRouter();
  const { t } = useTrans();

  return (
    <>
      <Head>
        <title>{t('Редько Тетяна Георгіївна')}</title>
      </Head>
      <Banner />
      <AboutBlock inMain />
      <h1 data-heading>
        <T>Ціни</T>
      </h1>
      <PricesBlock />
    </>
  );
}
