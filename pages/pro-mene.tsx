import Head from 'next/head';
import { useRouter } from 'next/router';

import AboutBlock from '../components/about/about';
// style
import styles from '../components/about/about.module.scss';
// data
import data from '../data/about.json';
// components
import T, { useTrans } from '../trans/trans';

export default function About() {
  const { t } = useTrans();
  const { locale } = useRouter();

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
      <div data-content data-container className={styles.content}>
        <img
          src={'/photo/Photo_102_2x.jpeg'}
          alt={t('Редько Тетяна Георгіївна')}
          loading="lazy"
          width="300px"
        />
        {data.aboutText[locale].map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <figure data-container className={styles.sert}>
        <img src="/certificates/next2.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/next1.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/sert.jpeg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/new_s4.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/new_s3.jpeg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/new_s2.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/s5.jpeg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/s6.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <figure data-container className={styles.sert}>
        <img src="/certificates/s7.jpg" alt={t('Редько Тетяна Георгіївна')} loading="lazy" />
      </figure>
      <div data-container className={styles.content}></div>
    </div>
  );
}
