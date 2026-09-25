import {useState, useEffect} from 'react'
import Head from 'next/head';
import {getFirestore, doc, getDoc, collection,QueryDocumentSnapshot,DocumentData,query,where,limit,getDocs, DocumentSnapshot} from "firebase/firestore";
import initFirebase from '../firebase/init-firebase'
// components
import T, { useTrans } from '../trans/trans';
import ContactsBlock from '../components/contacts/contacts';


export async function getStaticProps() {
  const db = getFirestore();

  // одна стаття
  const docRef = doc(db, "news", 'zhittyevij-plan-osobistosti');
  const docSnap = await getDoc(docRef);
  let news1 = null;
  if (docSnap.exists()) {
    news1 = docSnap.data()
  } else {
    console.log("No such document!");
  }

  // новини
  let news = [];

  const querySnapshot = await getDocs(collection(db, 'news'));
  // console.log('%c ||||| querySnapshot', 'color:yellowgreen', querySnapshot);
  querySnapshot.forEach(doc => {
    console.log('%c ||||| doc.data()', 'color:yellowgreen', doc.data());
    news.push({
      unique: doc.data().unique || '',
      h1: doc.data().h1 || '',
      img_s: doc.data().img_s || '',
    });
  });

  return {
    props: {
      news1,
      news
    },
  }
}
export default function Contacts({news1, news}) {
  const { t } = useTrans();
 
  return (
    <div style={{padding: 16}}>
      {/* <Head>
      <meta name="description" content={news1.descr} />
      <meta name="keywords" content={news1.keywords} />
      </Head> */}
     {/* <b>одна стаття</b> - { JSON.stringify(news1)}
     <div>
         <img src={news1.img} alt="" />
         <h1>{news1.h1}</h1>
         <div dangerouslySetInnerHTML={{ __html: news1.html }} />
     </div> */}

     <pre>{ JSON.stringify(news)}</pre> 
     
    </div>
  );
}
