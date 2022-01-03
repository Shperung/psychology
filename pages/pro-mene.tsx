import Head from 'next/head';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../trans/trans';
import AboutBlock from '../components/about/about';

// data
import data from '../data/about.json';

// style
import styles from '../components/about/about.module.scss';

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
        <img src={'/photo/Photo_102_2x.jpeg'} alt={t('Редько Тетяна Георгіївна')} width="300px" />
        {data.aboutText[locale].map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      <div data-container className={styles.content}></div>
    </div>
  );
}
