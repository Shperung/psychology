import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';
import ServicesBlock from '../components/services/services';

export default function Services() {
  const { t } = useTrans();

  return (
    <div>
      <Head>
        <title>
          {t('Цікаве')} | {t('Редько Тетяна Георгіївна')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Цікава психологія і психіатрія</T>
      </h1>
      <ServicesBlock />
    </div>
  );
}
