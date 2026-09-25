// components
import Layout from '../components/layout/layout';
// context
import AuthProvider from '../context/auth.context';

// styles
import '../components/layout/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
