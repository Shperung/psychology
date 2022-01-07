import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// data
import data from '../../data/services.json';

// styles
import styles from './services.module.scss';

export default function ServicesBlock(props) {
  const { inMain = false } = props;
  const { t } = useTrans();
  const { locale } = useRouter();

  return (
    <section data-container>
      <div className={styles.container}>
        {data.services.map(item => {
          return (
            <article key={item.id} className={styles.article}>
              <figure className={styles.figure}>
                <img src={item.img} alt={item[locale].label} />
                <figcaption className={styles.label}>{item[locale].label}</figcaption>
              </figure>
            </article>
          );
        })}
      </div>
    </section>
  );
}
