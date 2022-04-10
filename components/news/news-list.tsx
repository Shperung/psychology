import Link from 'next/link';
import { useRouter } from 'next/router';

// types
import type { NewsListType } from '../../types/news.types';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './news-list.module.scss';

type Props = {
  news: NewsListType;
};

export default function NewsListBlock(props: Props) {
  const { news } = props;
  const { t } = useTrans();
  const { locale } = useRouter();
  return (
    <section data-container>
      {news?.length ? (
        <div className={styles.container}>
          {news.map(item => {
            return (
              <article key={item.unique} className={styles.article}>
                <Link href={`/novini/[unique]`} as={`/novini/${item.unique}`}>
                  <a className={styles.figure}>
                    <img src={item.img_s} alt={item.h1} />
                    <figcaption className={styles.label}>{item.h1}</figcaption>
                  </a>
                </Link>
              </article>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
