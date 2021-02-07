import Link from 'next/link';

//helpers
import Trans from '../trans/trans';

// styles
import styles from './index.module.scss';

export default function IndexContent(props) {
  const { lang } = props;
  const isRu = lang === 'ru';
  const href = isRu ? '/ru#' : '/#';

  return (
    <main>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.header_container}`}>
          <Link href={href}>
            <a className={styles.logo}>Psychology</a>
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
      <h1 className={styles.title}>
        <Trans lang={lang}>1</Trans>
        <Trans lang={lang}>11</Trans>
      </h1>
    </main>
  );
}
