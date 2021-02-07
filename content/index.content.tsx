import Link from 'next/link';

//helpers
import Trans from '../trans/trans';

// components
import FooterBlock from '../footer/footer.block';

// styles
import styles from './index.module.scss';

export default function IndexContent(props) {
  const { lang } = props;
  const isRu = lang === 'ru';
  const href = isRu ? '/ru#' : '/#';

  return (
    <main>
      <header className={styles.header}>
        <div data-container className={styles.header_container}>
          <Link href={href}>
            <a className={styles.logo}>
              <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
            </a>
          </Link>
          <div className={styles.langs}>
            <Link href="/">
              <a className={`${styles.lang_link} ${!isRu ? styles.lang_link_active : ''}`}>ua</a>
            </Link>
            <Link href="/ru">
              <a className={`${styles.lang_link} ${isRu ? styles.lang_link_active : ''}`}>ru</a>
            </Link>
          </div>
        </div>
      </header>

      {/*  main_section */}
      <section className={styles.main_section}>
        <div className={styles.main_section_heading}>
          <h1 className={styles.title}>
            <Trans lang={lang}>Консультація психолога</Trans>
          </h1>
          <p className={styles.descr}>
            <Trans lang={lang}>Ми дбаємо про ваше здоров'я</Trans>
          </p>
          <a className={`${styles.btn} ${styles.header_btn}`}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </a>
        </div>
        <figure className={styles.main_figure}>
          <img src="https://preview.colorlib.com/theme/quantum/images/hero_bg_1.jpg" alt="" />
          <div className={styles.main_personal}>
            <h2>
              <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
            </h2>
            <p className={styles.person}>
              <Trans lang={lang}>Кандидат медичних наук</Trans>
            </p>
            <p className={styles.person}>
              <Trans lang={lang}>Психіатр, медичний психолог, гіпнотерапевт</Trans>
            </p>
          </div>
        </figure>
      </section>

      {/*  info_section */}
      <section className={styles.info_section}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Ми дбаємо про ваше здоров'я</Trans>
          </h2>
          <div className={styles.content}>
            <p>
              <Trans lang={lang}>
                Редько Тетяна Георгіївна закінчила Вінницький Національний медичний університет ім.
                М. І. Пирогова за спеціальністю «психіатрія».
              </Trans>{' '}
              <Trans lang={lang}>Лікар-психіатр вищої кваліфікаційної категорії.</Trans>
              <Trans lang={lang}>
                Маю науковий ступінь кандидата медичних наук за спеціальністю «медична психологія».
              </Trans>
              <Trans lang={lang}>Регресивний гіпнолог.</Trans>
            </p>
            <p>
              <Trans lang={lang}>
                Працюю у психіатричному відділенні Вінницької обласної психоневрологічної лікарні
                ім. акад. О. І. Ющенка.
              </Trans>
              <Trans lang={lang}>
                Спеціалізуюсь в області медичної психології та психіатрії. Володію методами
                психіатрії, психотерапії, психосоматології та психоневрології.
              </Trans>
            </p>
            <p>
              <Trans lang={lang}>
                У роботі застосовую сучасні методики діагностики та лікування. Надаю консультативну,
                діагностичну, терапевтичну допомогу пацієнтам з захворюваннями психічного спектра та
                нервової системи.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      {/*  footer */}
      <FooterBlock lang={lang} />
    </main>
  );
}
