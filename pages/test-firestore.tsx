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

  console.log('%c ||||| news1', 'color:yellowgreen', news1);

  // заголовки 
  let headers = []
  const querySnapshot = await getDocs(collection(db, "news"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data().h1);
    headers.push(doc.data().h1)
  });

//   console.log('%c ||||| headers', 'color:yellowgreen', headers);

  return {
    props: {
      news1,
      headers
    },
  }
}
export default function Contacts({news1, headers}) {
  const { t } = useTrans();
 
  return (
    <div style={{padding: 16}}>
      <Head>
      <meta name="description" content={news1.descr} />
      <meta name="keywords" content={news1.keywords} />
      </Head>
     <b>одна стаття</b> - { JSON.stringify(news1)}
     <div>
         <img src={news1.img} alt="" />
         <h1>{news1.h1}</h1>
         <div dangerouslySetInnerHTML={{ __html: news1.html }} />
     </div>
      <hr />
      <b>заголовки</b> - { JSON.stringify(headers)}

     
    </div>
  );
}
