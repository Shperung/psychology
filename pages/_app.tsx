// components
import Layout from '../components/layout/layout';

// styles
import '../components/layout/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
