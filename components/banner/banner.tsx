import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// components
import T, { useTrans } from '../../trans/trans';

// styles
import styles from './banner.module.scss';
import stylesBtns from '../button/button.module.scss';

export default function Banner() {
  const options = { delay: 5000 }; // Options
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    /*Autoplay(options)*/
  ]);

  return (
    <>
      <section className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <article className={`${styles.embla__slide} ${styles.slide_1}`}>
            <img src="/slides/slide-1.jpeg" alt="слайд 1" />
            <div data-container className={styles.slide_container}>
              <div className={`${styles.slide_inner} ${styles.slide_inner_1}`}>
                <h2>
                  <T>Що приховується за Вашим зовнішнім спокоєм?</T>
                </h2>
                <a className={stylesBtns.btn}>
                  <T>Зв'язатися</T>
                </a>
              </div>
            </div>
          </article>
          <article className={`${styles.embla__slide} ${styles.slide_2}`}>
            <img src="/slides/slide-2.jpeg" alt="слайд 2" />
            <div data-container className={styles.slide_container}>
              <div className={`${styles.slide_inner} ${styles.slide_inner_2}`}>
                <h2>
                  <T>
                    Відкрийте для себе загадки Вашого внутрішнього «Я» і знайдіть вирішення
                    особистої проблми.
                  </T>
                </h2>
                <a className={stylesBtns.btn}>
                  <T>Зв'язатися</T>
                </a>
              </div>
            </div>
          </article>
          <article className={`${styles.embla__slide} ${styles.slide_3}`}>
            <img src="/slides/slide-3.jpeg" alt="слайд 3" />
            <div data-container className={styles.slide_container}>
              <div className={`${styles.slide_inner} ${styles.slide_inner_3}`}>
                <h2>
                  <T>Зупиніть стрес! Живіть гармонійним життям!</T>
                </h2>
                <a className={stylesBtns.btn}>
                  <T>Зв'язатися</T>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
