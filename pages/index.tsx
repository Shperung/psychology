import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../trans/trans';
import Banner from '../components/banner/banner';
import AboutBlock from '../components/about/about';
import PricesBlock from '../components/prices/prices';
import ContactsBlock from '../components/contacts/contacts';
import ServicesListBlock from '../components/services/services-list';
import ReviewsBlock from '../components/reviews/reviews';

export default function Home() {
  const router = useRouter();
  const { t } = useTrans();

  return (
    <>
      <Head>
        <title>{t('Редько Тетяна Георгіївна')}</title>
      </Head>
      <AboutBlock inMain />
      <Banner />
      <h2 data-heading>
        <T>Ціни</T>
      </h2>
      <PricesBlock />
      <ServicesListBlock />
      <ReviewsBlock />
      <h2 data-heading>
        <T>Котнакти</T>
      </h2>
      <ContactsBlock />
    </>
  );
}
