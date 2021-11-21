import Header from './header/header';
import Footer from './footer';

export default function Layout(props) {
  const { children } = props;
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
