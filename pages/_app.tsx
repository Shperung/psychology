import Head from 'next/head';

// components
import Layout from '../components/layout/layout';
// context
import AuthProvider from '../context/auth.context';

// styles
import '../components/layout/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
