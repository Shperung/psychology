import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';
import PhonesBlock from '../contacts/phones';
import SocialBlock from '../contacts/social';

// styles
import styles from './free.module.scss';

export default function Free() {
  const { pathname, locales, asPath, locale } = useRouter();
  const { t } = useTrans();

  return (
    <section>
      <article data-container className={styles.free}>
        <figure data-figure>
          <img alt="безкоштовна психологічна допомога" width={512} src="/free.jpeg" />
        </figure>
        <figcaption className={styles.free_info}>
          <h2>
            <T>БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ</T> !!!
          </h2>
          <h3>
            <T>
              Друзі, всім кому необхідна невідкладна психологічна та психіатрична допомога,
              звертайтесь.
            </T>
          </h3>
          <ul>
            <li>
              <T>Корекція психологічного стану</T>
            </li>
            <li>
              <T>Корекція психічного стану</T>
            </li>
            <li>
              <T>Призначення медикаментозного лікування</T>
            </li>
            <li>
              <T>Виписка рецептів на лікування</T>
            </li>
          </ul>
          <h4>
            <T>Допоможу. Безкоштовно. Онлайн.</T>
          </h4>
          <small>
            <T>
              З повагою, лікар-психіатр вищої категорії, медичний психолог, психотерапевт, гіпнолог,
              кандидат медичних наук, Тетяна Редько.
            </T>
          </small>
        </figcaption>
      </article>
    </section>
  );
}
