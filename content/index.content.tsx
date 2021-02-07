import Link from 'next/link';

//helpers
import Trans from '../trans/trans';

// components
import FooterBlock from '../footer/footer.block';

// styles
import styles from './index.module.scss';

export default function IndexContent(props) {
  const { lang } = props;
  const isRu = lang === 'ru';
  const href = isRu ? '/ru#' : '/#';

  return (
    <main>
      <header className={styles.header}>
        <div data-container className={styles.header_container}>
          <Link href={href}>
            <a className={styles.logo}>
              <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
            </a>
          </Link>
          <div className={styles.langs}>
            <Link href="/">
              <a className={`${styles.lang_link} ${!isRu ? styles.lang_link_active : ''}`}>ua</a>
            </Link>
            <Link href="/ru">
              <a className={`${styles.lang_link} ${isRu ? styles.lang_link_active : ''}`}>ru</a>
            </Link>
          </div>
        </div>
      </header>

      {/*  main_section */}
      <section className={styles.main_section}>
        <div className={styles.main_section_heading}>
          <h1 className={styles.title}>
            <Trans lang={lang}>Консультація психолога</Trans>
          </h1>
          <p className={styles.descr}>
            <Trans lang={lang}>психіатр, медичний психолог, гіпнотерапевт</Trans>
          </p>
          <a className={`${styles.btn} ${styles.header_btn}`}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </a>
        </div>
        <figure className={styles.main_figure}>
          <img src="https://preview.colorlib.com/theme/quantum/images/hero_bg_1.jpg" alt="" />
        </figure>
      </section>

      {/*  footer */}
      <FooterBlock />
    </main>
  );
}
