import Link from 'next/link';

//helpers
import Trans from '../trans/trans';

// styles
import styles from './footer.block.module.scss';

export default function FooterBlock(props) {
  const { lang } = props;
  const isRu = lang === 'ru';
  const href = isRu ? '/ru#' : '/#';
  return (
    <footer className={styles.footer}>
      <div data-container className={styles.footer_container}>
        <div className={styles.logo_footer_wrap}>
          <Link href={href}>
            <a className={styles.logo_footer}>
              <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
            </a>
          </Link>
        </div>
        <div className={styles.footer_item}>
          <h3>Email:</h3>
          <ul>
            <li className={styles.hover_li}>
              <a href="mailto:uamentalhealth@gmail.com">uamentalhealth@gmail.com</a>
            </li>
          </ul>
        </div>
        <address className={styles.footer_item}>
          <h3>
            <Trans lang={lang}>Адреса</Trans>:
          </h3>
          <p>
            <Trans lang={lang}>вул. Хмельницьке Шосе, 23, поверх 2, каб. 115 м.</Trans>
          </p>
          <p>
            <Trans lang={lang}>Вінниця</Trans>, 21036
          </p>
        </address>

        <div className={styles.footer_item}>
          <h3>
            <Trans lang={lang}>Графік роботи</Trans>:
          </h3>
          <ul>
            <li>
              <Trans lang={lang}>Вівторок</Trans> 16.00-19.00
            </li>
            <li>
              <Trans lang={lang}>Четвер</Trans> 16.00-19.00
            </li>
            <li>
              <Trans lang={lang}>Субота</Trans> 10.00-15.00
            </li>
          </ul>
        </div>
        <div className={styles.footer_item}>
          <h3>
            <Trans lang={lang}>Телефон</Trans>:
          </h3>
          <ul>
            <li className={styles.hover_li}>
              <a href="tel:+380509584113">+38-050-958-41-13</a>
            </li>
            <li className={styles.hover_li}>
              <a href="tel:+380939167544">+38-093-916-75-44 (viber)</a>
            </li>
            <li className={styles.hover_li}>
              <a href="tel:+380681627732">+38-068-162-77-32</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_info_wrap}>
        <div data-container className={styles.footer_info}>
          <b>{new Date().getFullYear()}</b>
          <div className={styles.langs}>
            <Link href="/">
              <a className={`${styles.lang_link} ${!isRu ? styles.lang_link_active : ''}`}>ua</a>
            </Link>
            <Link href="/ru">
              <a className={`${styles.lang_link} ${isRu ? styles.lang_link_active : ''}`}>ru</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
