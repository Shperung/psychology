import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';
import PhonesBlock from '../contacts/phones';
import SocialBlock from '../contacts/social';

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
    {
      id: 3,
      title: t('Цікаве'),
      path: '/tsikave',
    },
    {
      id: 7,
      title: t('Новини'),
      path: '/novini',
    },
  ];
  return (
    <>
      <header>
        <div data-container className={styles.info}>
          <div className={styles.info_item}>
            <img alt="час" width="16px" height="16px" src="/icons/time.svg" />
            <time>пн-суб</time>
          </div>
          <div className={`${styles.info_item} ${styles.info_lang}`}>
            <img alt="мова" width="16px" height="16px" src="/icons/world.svg" />
            {locales?.map(localeItem => {
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

          <span className={`${styles.info_item} ${styles.info_right} ${styles.info_phone}`}>
            <PhonesBlock />
          </span>
          <div>
            <span className={styles.info_item}>
              <img alt="локація" width="16px" height="16px" src="/icons/location.svg" />
              <a className={styles.info_item_link} href={MAP_URL}>
                <T>Вінниця</T>, <T>Хмельницьке Шосе, 23, поверх 2, каб. 115</T>
              </a>
            </span>
            <span className={styles.info_item}>
              <img alt="локація" width="16px" height="16px" src="/icons/location.svg" />
              <span className={styles.info_item_link}>
                <T>Київ</T>, <T>метро Майдан Незалежності, вул. Михайлівська 20б</T>
              </span>
            </span>
          </div>
        </div>
      </header>
      <nav className={styles.nav}>
        <div data-container className={styles.nav_block}>
          <Link href="/">
            <a className={styles.logo}>
              <picture>
                <source srcSet="/logo-gray.png, /logo-gray-2x.png 2x" />
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
          <div className={styles.social}>
            <SocialBlock />
          </div>
        </div>
      </nav>
    </>
  );
}
