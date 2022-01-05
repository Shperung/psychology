import Link from 'next/link';

//contacts
import SocialBlock from '../contacts/social';

// styles
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <iframe
        src="https://web-1011.webnode.ru/widgets/googlemaps/?z=15&amp;a=%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5+23%2C+%D0%BC.+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F+21036&amp;s=LcwxCsAgDEbhu2QuQlfP0U0cHH6LkGpJ0kHEu9dC5-_xwqCMZI_g6DfIk0mqWsxxqaCNwLhQ7ccT7YJJd7kwL1XrDFHyYZB-l2Sl1RXuNOOMLw.."
        className={styles.google_map}
        loading="lazy"
      ></iframe>
      <footer className={styles.footer}>
        <div data-container className={styles.footer_info}>
          <b>{new Date().getFullYear()}</b>
          <div className={styles.langs}></div>
        </div>
        <div className={styles.social}>
          <SocialBlock />
        </div>
      </footer>
    </>
  );
}
