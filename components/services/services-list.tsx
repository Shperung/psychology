import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// data
import data from '../../data/interesting.json';

// styles
import styles from './services.module.scss';

export default function ServicesListBlock(props) {
  const { inMain = false } = props;
  const { t } = useTrans();
  const { locale } = useRouter();

  return (
    <section data-container>
      <div className={styles.container}>
        <div className={styles.prof_blocks}>
          <figure data-figure className={styles.prof_figure}>
            <img loading="lazy" src="/photo/Photo_429_2x.jpeg" alt="Редько Тетяна Георгіївна" />
          </figure>
          <figcaption className={styles.figcaption}>
            <h1>
              <T>В яких випадках я можу Вам допомогти:</T>
            </h1>
            <ul className={styles.prof_ul}>
              {data.interesting.map(item => {
                return <li key={item.id}>{item[locale].label}</li>;
              })}
            </ul>
          </figcaption>
        </div>
      </div>
    </section>
  );
}
