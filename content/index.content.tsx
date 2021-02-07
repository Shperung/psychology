import Link from 'next/link';

//helpers
import Trans from '../trans/trans';

// styles
import styles from './index.module.scss';

export default function IndexContent(props) {
  const { lang } = props;
  console.log('lang', lang);
  return (
    <h1 className={styles.title}>
      <Trans lang={lang}>привіт</Trans>
      <Trans lang={lang}>11</Trans>
      <Link href="/ru">ru</Link>
      <Link href="/">ua</Link>
    </h1>
  );
}
