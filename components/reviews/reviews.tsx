import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import useEmblaCarousel from 'embla-carousel-react';

// data
import data from '../../data/reviews.json';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './reviews.module.scss';

export default function ReviewsBlock() {
  const { t } = useTrans();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section data-container className={styles.section}>
      <div className={styles.container}>
        <h2 data-heading>
          <T>Відгуки</T>
          <i />
        </h2>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            {data.reviews.map(item => (
              <blockquote key={item.id} className={`${styles.embla__slide}`}>
                <p>{item.text}</p> <b>{item.name}</b> <time dateTime={item.date}>{item.date}</time>
              </blockquote>
            ))}
          </div>
        </div>
        <button className={styles.prev_btn} onClick={scrollPrev}>
          <img src="/icons/arrow-right.svg" width="32px" height="32px" />
        </button>
        <button className={styles.next_btn} onClick={scrollNext}>
          <img src="/icons/arrow-right.svg" width="32px" height="32px" />
        </button>
      </div>
    </section>
  );
}
