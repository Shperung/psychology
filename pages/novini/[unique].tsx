import { useRouter } from 'next/router';
import Head from 'next/head';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// types
import type { NewsType } from '../../types/news.types';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from '../../components/layout/post.module.scss';

type Props = {
  newsOne: NewsType;
};

export async function getServerSideProps(context) {
  const db = getFirestore();
  const { unique } = context.params;

  // новина
  const docRef = doc(db, 'news', unique);
  const docSnap = await getDoc(docRef);
  let newsOne = null;
  if (docSnap.exists()) {
    newsOne = docSnap.data();
  } else {
    console.log('No such document!');
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

  const header = newsOne.h1;

  return (
    <div>
      <Head>
        <title>
          {header} | {t('Редько Тетяна Георгіївна')}
        </title>
        <meta name="description" content={newsOne.descr} />
        <meta name="keywords" content={newsOne.keywords} />
      </Head>
      <h1 data-heading>{header}</h1>
      <figure className={styles.post_figure} data-container>
        <img className={styles.post_img} src={newsOne.img} alt={header} />
        <figcaption
          className={styles.post_content}
          dangerouslySetInnerHTML={{ __html: newsOne.html }}
        />
      </figure>
    </div>
  );
}
