import Link from 'next/link';
import { useContext } from 'react';

// context
import { AuthContext } from '../../context/auth.context';
//contacts
import SocialBlock from '../contacts/social';
// styles
import styles from './footer.module.scss';

export default function Footer() {
  const { iaAdmin } = useContext(AuthContext);

  console.log('%c ||||| iaAdmin', 'color:yellowgreen', iaAdmin);

  return (
    <>
      {!iaAdmin ? (
        <>
          {/* <iframe
            src="https://web-1011.webnode.ru/widgets/googlemaps/?z=15&amp;a=%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5+23%2C+%D0%BC.+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F+21036&amp;s=LcwxCsAgDEbhu2QuQlfP0U0cHH6LkGpJ0kHEu9dC5-_xwqCMZI_g6DfIk0mqWsxxqaCNwLhQ7ccT7YJJd7kwL1XrDFHyYZB-l2Sl1RXuNOOMLw.."
            className={styles.google_map}
            loading="lazy"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.4035322895799!2d30.521678076944465!3d50.45398304761681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce45528d4805%3A0xf26e2d297f185d98!2s20B%2C%20Mykhailivs&#39;ka%20St%2C%2020%D0%91%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2sus!4v1695238366397!5m2!1sen!2sus"
            className={styles.google_map}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      ) : null}

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
