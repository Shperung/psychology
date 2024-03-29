import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './header.module.scss';

const MAP_URL =
  'https://www.google.com/maps?ll=49.232723,28.442532&z=16&t=m&hl=uk-UA&gl=US&mapclient=embed&q=%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5,+23+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+21000';

export default function Header() {
  const { pathname, locales, asPath, locale } = useRouter();
  const { t } = useTrans();

  const NAVIGAIONS = [
    {
      id: 1,
      title: t('Головна'),
      path: '/',
    },
    {
      id: 2,
      title: t('Про мене'),
      path: '/pro-mene',
    },
    {
      id: 3,
      title: t('Послуги'),
      path: '/poslugi',
    },
    {
      id: 4,
      title: t('Контакти'),
      path: '/kontakti',
    },
    {
      id: 5,
      title: t('Ціни'),
      path: '/tsiny',
    },
    {
      id: 6,
      title: t('Відгуки'),
      path: '/vidguki',
    },
  ];
  return (
    <>
      <header>
        <div data-container className={styles.info}>
          <div className={styles.info_item}>
            <img alt="час" width="16px" height="16px" src="/icons/time.svg" />
            <time>
              пн-суб 11<sup>00</sup> - 19<sup>00</sup>
            </time>
          </div>
          <div className={`${styles.info_item} ${styles.info_lang}`}>
            <img alt="мова" width="16px" height="16px" src="/icons/world.svg" />
            {locales.map(localeItem => {
              return (
                <Link locale={localeItem} key={localeItem} href={asPath}>
                  <a
                    className={`${styles.locale} ${locale === localeItem && styles.locale_active}`}
                  >
                    {localeItem}
                  </a>
                </Link>
              );
            })}
          </div>

          <span className={`${styles.info_item} ${styles.info_right}`}>
            <img alt="зателефонувати" width="16px" height="16px" src="/icons/call.svg" />
            <a className={styles.info_item_link} href="tel:+380939167544">
              +38-093-916-75-44
            </a>
          </span>
          <span className={styles.info_item}>
            <img alt="локація" width="16px" height="16px" src="/icons/location.svg" />
            <a className={styles.info_item_link} href={MAP_URL}>
              <T>вул. Хмельницьке Шосе, 23, поверх 2, каб. 115</T>
            </a>
          </span>
        </div>
      </header>
      <nav className={styles.nav}>
        <div data-container className={styles.nav_block}>
          <Link href="/">
            <a className={styles.logo}>
              <picture>
                <source srcSet="/logo-main.png, /logo-main-2x.png 2x" />
                <img
                  alt={t('Редько Тетяна Георгіївна')}
                  title={t('Редько Тетяна Георгіївна')}
                  width="100px"
                  height="100px"
                  src="/logo-main.png"
                />
              </picture>
              <picture>
                <source srcSet="/logo-main-hover.png, /logo-main-hover-2x.png 2x" />
                <img
                  alt={t('Редько Тетяна Георгіївна')}
                  title={t('Редько Тетяна Георгіївна')}
                  width="100px"
                  height="100px"
                  src="/logo-main.png"
                  className={styles.logo_hover}
                />
              </picture>
            </a>
          </Link>
          <menu className={styles.menu}>
            {NAVIGAIONS.map(navItem => {
              return (
                <Link key={navItem.id} href={navItem.path}>
                  <a className={pathname === navItem.path ? styles.active : null}>
                    <span>{navItem.title}</span>
                  </a>
                </Link>
              );
            })}
          </menu>
        </div>
      </nav>
    </>
  );
}
