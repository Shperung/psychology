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
    </footer>
  );
}
