import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './about.module.scss';
import stylesBtns from '../button/button.module.scss';

export default function AboutBlock(props) {
  const { inMain = false } = props;
  const { t } = useTrans();

  return (
    <section data-container className={styles.container}>
      <figure data-figure>
        <img
          src={inMain ? '/photo/Photo_462_2x.jpeg' : '/photo/Photo_367_2x.jpeg'}
          alt={t('Редько Тетяна Георгіївна')}
          width="400px"
        />
      </figure>
      <figcaption className={styles.figcaption}>
        <h1>
          <T>Редько Тетяна Георгіївна</T>
        </h1>
        <h2>
          <T>Лікар-психіатр вищої кваліфікаційної категорії.</T> <T>Кандидат медичних наук.</T>
        </h2>
        <p>
          <T>Медичний психолог, психотерапевт, регресивний гіпнолог.</T>
        </p>
        <div>
          {inMain ? (
            <Link href="/pro-mene">
              <a className={`${stylesBtns.btn} ${styles.link}`}>
                <T>Детальніше</T>
              </a>
            </Link>
          ) : null}
          <Link href="/kontakti">
            <a className={`${stylesBtns.btn} ${styles.link}`}>
              <T>Зв'язатися</T>
            </a>
          </Link>
        </div>
      </figcaption>
    </section>
  );
}
