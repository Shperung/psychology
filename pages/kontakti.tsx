import Head from 'next/head';

// components
import T, { useTrans } from '../trans/trans';
import ContactsBlock from '../components/contacts/contacts';

export default function Contacts() {
  const { t } = useTrans();

  return (
    <div>
      <Head>
        <title>
          {t('Контакти')} | {t('Редько Тетяна Георгіївна')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Контакти</T>
      </h1>
      <ContactsBlock />
    </div>
  );
}
