import Header from '../header/header';
import Footer from '../footer/footer';

// styles
import styles from './layout.module.scss';

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
}
