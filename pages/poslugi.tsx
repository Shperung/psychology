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
          {t('Редько Тетяна Георгіївна')} | {t('Послуги')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Послуги</T>
      </h1>
      <ServicesBlock />
    </div>
  );
}
