import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';
import AboutBlock from '../components/about/about';

export default function About() {
  const { t } = useTrans();
  return (
    <div>
      <Head>
        <title>
          {t('Редько Тетяна Георгіївна')} | {t('Про мене')}
        </title>
      </Head>
      <AboutBlock />
      <h2 data-heading>
        <T>Про мене</T>
      </h2>
    </div>
  );
}
