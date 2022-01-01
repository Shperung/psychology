import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';

export default function Contacts() {
  const { t } = useTrans();

  return (
    <div>
      <Head>
        <title>
          {t('Котнакти')} | {t('Редько Тетяна Георгіївна')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Котнакти</T>
      </h1>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Сторінка на стадії розробки</h3>
    </div>
  );
}
