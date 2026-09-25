import { useRouter } from 'next/router';
import Head from 'next/head';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// types
import type { NewsType } from '../../types/news.types';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from '../../components/layout/post.module.scss';
import PhonesBlock from '../../components/contacts/phones';

type Props = {
  newsOne: NewsType;
};

export async function getServerSideProps(context) {
  const db = getFirestore();
  const { unique } = context.params;

  // новина
  let newsOne = null;
  try {
    const docSnap = await getDoc(doc(db, 'news', unique));
    newsOne = docSnap.exists() ? docSnap.data() : null;
  } catch (e) {
    console.error('Firestore error:', e);
  }
  if (!newsOne) {
    return { notFound: true };
  }

  return {
    props: {
      newsOne,
    },
  };
}

export default function NewsOne(props: Props) {
  const { newsOne } = props;
  const router = useRouter();
  const { t } = useTrans();
  console.log('%c ||||| router', 'color:yellowgreen', router);
  const header = newsOne.h1;

  return (
    <div>
      <Head>
        <title>
          {header} | {t('Редько Тетяна Георгіївна')}
        </title>
        <meta name="description" content={newsOne.descr} />
        <meta name="keywords" content={newsOne.keywords} />
        <meta property="og:url" content={`https://tetiana-redko.com/${router.asPath}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={header} />
        <meta property="og:description" content={newsOne.descr} />
        <meta property="og:image" content={newsOne.img} />
      </Head>
      <figure className={styles.post_figure} data-container>
        <h1 data-heading>{header}</h1>
        <img className={styles.post_img} src={newsOne.img} alt={header} />
        <figcaption
          className={styles.post_content}
          dangerouslySetInnerHTML={{ __html: newsOne.html }}
        />
        <div className={styles.post_content}>
          <p>
            З повагою, лікар-психіатр вищої категорії, медичний психолог, гіпнотерапевт, кандидат
            медичних наук Тетяна Редько.
            <br />{' '}
          </p>
          <p>
            Проводжу консультації пацієнтів очно та онлайн.
            <br />{' '}
          </p>
          <p>Запис на консультацію:</p>
          <div className={styles.phones}>
            <PhonesBlock />
          </div>
        </div>
      </figure>
    </div>
  );
}
