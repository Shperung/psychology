import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';

// import initFirebase from '../firebase/init-firebase';

// const app = initFirebase();
// const db = getFirestore(app);

export default function AdminPage() {
  // const { appFirebase } = props;
  // const auth = getAuth(appFirebase);
  // const [user, loading, error] = useAuthState(auth);
  // console.log('%c ||||| user', 'color:yellowgreen', user);
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
    </>
  );
}
