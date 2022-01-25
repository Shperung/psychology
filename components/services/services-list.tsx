import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// data
import data from '../../data/services.json';

// styles
import styles from './services.module.scss';

export default function ServicesListBlock(props) {
  const { inMain = false } = props;
  const { t } = useTrans();
  const { locale } = useRouter();

  return (
    <>
      <section data-container>
        <div className={styles.container}>
          <div className={styles.prof_blocks}>
            <figure data-figure className={styles.prof_figure}>
              <img loading="lazy" src="/photo/Photo_429_2x.jpeg" alt="Редько Тетяна Георгіївна" />
            </figure>
            <figcaption className={styles.figcaption}>
              <h1>
                <T>Займаюся лікуванням</T>:
              </h1>
              <ul className={`${styles.prof_ul} ${styles.double}`}>
                {data.services.map(item => {
                  return <li key={item.id}>{item[locale]}</li>;
                })}
              </ul>
              <ul className={styles.prof_ul}>
                {data.servicesLong.map(item => {
                  return <li key={item.id}>{item[locale]}</li>;
                })}
              </ul>
            </figcaption>
          </div>
        </div>
      </section>
      <section data-container>
        <div className={styles.container}>
          <div className={styles.prof_blocks}>
            <figure data-figure className={styles.prof_figure}>
              <img loading="lazy" src="/photo/Photo_277.jpeg" alt="Редько Тетяна Георгіївна" />
            </figure>
            <figcaption className={styles.figcaption}>
              <h1>
                <T>Займаюся гіпнотерапією</T>.
              </h1>
              <h2>
                <T>Проводжу опрацювання у регресивному гіпнозі пацієнтів</T>:
              </h2>
              <ul className={`${styles.prof_ul} ${styles.double}`}>
                {data.gipno.map(item => {
                  return <li key={item.id}>{item[locale]}</li>;
                })}
              </ul>
              <ul className={styles.prof_ul}>
                {data.gipnoLong.map(item => {
                  return <li key={item.id}>{item[locale]}</li>;
                })}
              </ul>
            </figcaption>
          </div>
        </div>
      </section>
      <div data-container className={`${styles.info}`}>
        {data.info.map(item => {
          return <p key={item.id}>{item[locale]}</p>;
        })}
      </div>
    </>
  );
}
