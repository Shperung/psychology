import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';

export default function Reviews() {
  const { t } = useTrans();

  return (
    <div>
      <Head>
        <title>
          {t('Редько Тетяна Георгіївна')} | {t('Відгуки')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Відгуки</T>
      </h1>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Сторінка на стадії розробки</h3>
    </div>
  );
}
