// components
import Layout from '../components/layout/layout';

// firebase
import initFirebase from '../firebase/init-firebase'

// styles
import '../components/layout/app.scss';

initFirebase()

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
