import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';
import PricesBlock from '../components/prices/prices';

export default function Prise() {
  const { t } = useTrans();

  return (
    <div>
      <Head>
        <title>
          {t('Редько Тетяна Георгіївна')} | {t('Ціни')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Ціни</T>
      </h1>
      <PricesBlock />
    </div>
  );
}
