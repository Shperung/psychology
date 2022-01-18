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
       <h1 data-heading>
          <T>Відео відгук</T>         
       </h1>
       <center style={{paddingBottom: '64px', marginTop: '-16px'}}>         
       <video width="750" height="500" controls >
        <source src="/video/review1.mp4" type="video/mp4"/>
       </video>
       </center>
    </>
  );
}
