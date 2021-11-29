import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

//helpers

// styles
import styles from './banner.module.scss';

export default function Banner() {
  const options = { delay: 5000 }; // Options
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    /*Autoplay(options)*/
  ]);

  return (
    <>
      <section className={styles.embla} ref={emblaRef}>
        <div className={styles.embla__container}>
          <article className={`${styles.embla__slide} ${styles.slide_1}`}>Slide 1</article>
          <article className={`${styles.embla__slide} ${styles.slide_2}`}>Slide 2</article>
          <article className={`${styles.embla__slide} ${styles.slide_3}`}>Slide 3</article>
        </div>
      </section>
    </>
  );
}
