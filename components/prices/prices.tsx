import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './prices.module.scss';
import stylesBtns from '../button/button.module.scss';

export default function PricesBlock(props) {
  const { inMain = false } = props;
  const { t } = useTrans();
  const { locale } = useRouter();

  return (
    <section data-container className={styles.container}>
      <div className={styles.wrap}>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Консультація психіатра</T>
            </h3>
            <b className={styles.summ}>900 грн</b>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <a className={stylesBtns.btn}>
              <T>Зв'язатися</T>
            </a>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Консультація мед. психолога, психотерапевта</T>
            </h3>
            <b className={styles.summ}>900 грн</b>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <a className={stylesBtns.btn}>
              <T>Зв'язатися</T>
            </a>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              Online - <T>Консультація</T> <sup>*</sup>
            </h3>
            <b className={styles.summ}>1000 грн</b>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <a className={stylesBtns.btn}>
              <T>Зв'язатися</T>
            </a>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Cесія регресивного гіпнозу</T>
            </h3>
            <b className={styles.summ}>4000 грн</b>
            <h4 className={styles.h4}>
              1 <T>сесія</T> - 2 <T>години</T>
            </h4>
            <a className={stylesBtns.btn}>
              <T>Зв'язатися</T>
            </a>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Термінова консультація</T>
            </h3>
            <b className={styles.summ}>1800 грн</b>
            <h4 className={styles.h4}>
              1 <T>прийом</T>
            </h4>
            <a className={stylesBtns.btn}>
              <T>Зв'язатися</T>
            </a>
          </div>
        </article>
      </div>
      <p className={styles.info}>
        <sup>*</sup>
        <b>
          Online - <T>Консультація</T>
        </b>{' '}
        <T>проходе у</T> Viber, Telegram <T>в форматі відеозвязку</T>.{' '}
        <T>Наявність відео під часть проведення консультації - обовязкова умова.</T>
      </p>
    </section>
  );
}
