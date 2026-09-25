import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  QueryDocumentSnapshot,
  DocumentData,
  query,
  where,
  limit,
  getDocs,
  DocumentSnapshot,
} from 'firebase/firestore';
import initFirebase from '../../firebase/init-firebase';

// types
import type { NewsListType } from '../../types/news.types';

// components
import T, { useTrans } from '../../trans/trans';
import NewsListBlock from '../../components/news/news-list';

type Props = {
  news: NewsListType;
};

export async function getServerSideProps() {
  const db = getFirestore();

  // новини
  let news = [];

  const querySnapshot = await getDocs(collection(db, 'news'));
  querySnapshot.forEach(doc => {
    news.push({
      unique: doc.data().unique || '',
      h1: doc.data().h1 || '',
      img_s: doc.data().img_s || '',
    });
  });

  return {
    props: {
      news,
    },
  };
}

export default function News(props: Props) {
  const { news } = props;
  const { t } = useTrans();
  console.log('%c ||||| news', 'color:yellowgreen', news);
  return (
    <div>
      <Head>
        <title>
          {t('Новини')} | {t('Редько Тетяна Георгіївна')}
        </title>
      </Head>
      <h1 data-heading>
        <T>Новини</T>
      </h1>
      <NewsListBlock news={news} />
    </div>
  );
}
