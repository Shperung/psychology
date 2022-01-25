import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';
import ReviewsBlock from '../components/reviews/reviews';


export default function Reviews() {
  const { t } = useTrans();

  return (
    <>
      <Head>
        <title>
          {t('Відгуки')} | {t('Редько Тетяна Георгіївна')}
        </title>
      </Head>
      <ReviewsBlock />
      
    </>
  );
}
