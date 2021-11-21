import Link from 'next/link';
import { useRouter } from 'next/router';

// styles
import styles from './header.module.scss';

const NAVIGAIONS = [
  {
    id: 1,
    title: 'Головна',
    path: '/',
  },
  {
    id: 2,
    title: 'Про мене',
    path: '/pro-mene',
  },
  {
    id: 3,
    title: 'Послуги',
    path: '/poslugi',
  },
  {
    id: 4,
    title: 'Контакти',
    path: '/kontakti',
  },
  {
    id: 5,
    title: 'Ціни',
    path: '/tsiny',
  },
  {
    id: 6,
    title: 'Відгуки',
    path: '/vidguki',
  },
];

export default function Header() {
  const { pathname, locales, asPath } = useRouter();

  return (
    <header>
      <div>
        <div>
          {locales.map(locale => {
            return (
              <Link locale={locale} key={locale} href={asPath}>
                <a>{locale}</a>
              </Link>
            );
          })}
        </div>
      </div>

      <Link href="/">
        <a className={styles.logo}>
          <picture>
            <source srcSet="/logo-main.png, /logo-main-2x.png 2x" />
            <img
              alt="Редько Тетяна Георгіївна"
              title="Редько Тетяна Георгіївна"
              width="100px"
              height="100px"
              src="/logo-main.png"
            />
          </picture>
          <picture>
            <source srcSet="/logo-main-hover.png, /logo-main-hover-2x.png 2x" />
            <img
              alt="Редько Тетяна Георгіївна"
              title="Редько Тетяна Георгіївна"
              width="100px"
              height="100px"
              src="/logo-main.png"
              className={styles.logo_hover}
            />
          </picture>
        </a>
      </Link>
      <menu>
        {NAVIGAIONS.map(navItem => {
          return (
            <li key={navItem.id}>
              <Link href={navItem.path}>
                <a className={pathname === navItem.path ? styles.active : null}>{navItem.title}</a>
              </Link>
            </li>
          );
        })}
      </menu>
    </header>
  );
}
