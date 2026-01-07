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
              <T>Консультація психіатра, нарколога</T>
            </h3>
            <div className={styles.flexWrap}>
              <div className={styles.flex}>
                <b className={styles.summ}>2500 грн</b>
              </div>
            </div>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>

        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Консультація мед. психолога, психотерапевта</T>
            </h3>
            <div className={styles.flexWrap}>
              <div className={styles.flex}>
                <b className={styles.summ}>2500 грн</b>
              </div>
            </div>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>

        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              Online - <T>Консультація</T> <sup>*</sup>
            </h3>
            <div className={styles.flexWrap}>
              <div className={styles.flex}>
                <b className={styles.summ}>2500 грн</b>
              </div>
            </div>
            <h4 className={styles.h4}>
              1 <T>прийом</T> - 50 <T>хвилин</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Cесія регресивного гіпнозу</T>
            </h3>
            <div className={styles.flexWrap}>
              <b className={styles.summ}>6000 грн</b>
            </div>
            <h4 className={styles.h4}>
              1 <T>сесія</T> - 2 <T>години</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Термінова консультація</T>
            </h3>
            <div className={styles.flexWrap}>
              <b className={styles.summ}>3000 грн</b>
            </div>
            <h4 className={styles.h4}>
              1 <T>прийом</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.article_inner}>
            <h3 className={styles.h3}>
              <T>Консультація сімейної пари</T>
            </h3>
            <div className={styles.flexWrap}>
              <b className={styles.summ}>3500 грн</b>
            </div>
            <h4 className={styles.h4}>
              1 <T>прийом</T>
            </h4>
            <Link href="/kontakti">
              <a className={stylesBtns.btn}>
                <T>Зв'язатися</T>
              </a>
            </Link>
          </div>
        </article>
      </div>
      <p className={styles.info}>
        <sup>*</sup>
        <b>
          Online - <T>Консультація</T>
        </b>{' '}
        <T>проходе у</T> Viber, Telegram, WhatsApp.
      </p>
      <p className={styles.info}>
        <T>Підбір медикаментозного лікування входить в вартість консультації</T>
      </p>
    </section>
  );
}
