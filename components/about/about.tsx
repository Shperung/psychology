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
    <>
      <section data-container className={styles.container}>
        <figure data-figure>
          <img
            src={inMain ? '/photo/Photo_256_2x.jpeg' : '/photo/Photo_367_2x.jpeg'}
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
            <br />
            <T>Медичний психолог, психотерапевт, регресивний гіпнолог.</T>
          </h2>

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
      <section data-container>
        <div className={styles.info}>
          <p>
            <T>
              Як психіатр, медичний психолог, психотерапевт, я працюю з сотнями пацієнтів і знаюся
              на тонкощах різних психологічних проблем, з якими стикаються люди.
            </T>
          </p>
          <p>
            <T>
              Я намагаюся бути дружелюбною, дисциплінованою, організованою з гнучким підходом до
              своїх пацієнтів і допомагаю їм вирішити їхні проблеми, щоб відкрити двері до
              яскравішого та впевненішого майбутнього.
            </T>
          </p>
        </div>
        <figure className={styles.license}>
          <img loading="lazy" src="/icons/license.svg" alt="Ліцензія" width="100px" />
          <figcaption>
            <T>Ліцензія МОЗ України від 03.10.18р. № 0310/13-М</T>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
