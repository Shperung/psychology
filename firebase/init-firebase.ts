import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

export default function initFirebase() {
  const app = initializeApp(firebaseConfig);
  if(typeof window !== 'undefined') {
    const analytics = getAnalytics(app);
  }
  return app
  console.log('%c ||||| app', 'color:yellowgreen', app);
}
