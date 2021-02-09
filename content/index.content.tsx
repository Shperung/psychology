import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    text: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (formData.name && formData.phone) {
      fetch('/api/mail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log('data', data);
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

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
            <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
          </p>
          <a className={`${styles.btn} ${styles.header_btn}`}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </a>
        </div>
        <figure className={styles.main_figure}>
          <img src="/main2.jpg" alt="" />
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
      <section className={`${styles.section} ${styles.info_section}`}>
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
              <Trans lang={lang}>Лікар-психіатр вищої кваліфікаційної категорії.</Trans>{' '}
              <Trans lang={lang}>
                Маю науковий ступінь кандидата медичних наук за спеціальністю «медична психологія».
              </Trans>{' '}
              <Trans lang={lang}>Регресивний гіпнолог.</Trans>
            </p>
            <p>
              <Trans lang={lang}>
                Працюю у психіатричному відділенні Вінницької обласної психоневрологічної лікарні
                ім. акад. О. І. Ющенка.
              </Trans>{' '}
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
            <p>
              <Trans lang={lang}>
                Є учасником міжнародних конгресів та семінарів з профільного направлення. Являюсь
                автором багатьох статей в наукових виданнях, газетах, журналах.
              </Trans>{' '}
              <Trans lang={lang}>
                Займалась викладацькою діяльністю - працювала викладачем психіатрії в Національному
                медичному університеті ім. М. І. Пирогова.
              </Trans>
            </p>

            <h3 className={styles.h3}>
              <Trans lang={lang}>Приватна практика</Trans>
            </h3>
            <figure className={styles.license}>
              <img src="/license.svg" alt="Ліцензія" />
              <figcaption>
                <Trans lang={lang}>Ліцензія МОЗ України від 03.10.18р. № 0310/13-М</Trans>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/*  prof_section */}
      <section className={`${styles.section} ${styles.prof_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Займаюсь лікуванням</Trans>
          </h2>
          <div className={styles.prof_blocks}>
            <figure className={styles.prof_figure}>
              <img src="/prof.jpg" alt="Редько Тетяна Георгіївна" />
            </figure>

            <ul className={styles.prof_ul}>
              <li>
                <Trans lang={lang}>фобій</Trans>
              </li>
              <li>
                <Trans lang={lang}>тривожних станів</Trans>
              </li>
              <li>
                <Trans lang={lang}>депресій</Trans>
              </li>
              <li>
                <Trans lang={lang}>афективних розладів</Trans>
              </li>
              <li>
                <Trans lang={lang}>порушень режиму сну</Trans>
              </li>
              <li>
                <Trans lang={lang}>післяпологових депресій</Trans>
              </li>
              <li>
                <Trans lang={lang}>нервової анорексії та булімії</Trans>
              </li>
              <li>
                <Trans lang={lang}>різних видів залежності</Trans>
              </li>
              <li>
                <Trans lang={lang}>шизофренії</Trans>
              </li>
              <li>
                <Trans lang={lang}>панічних станів</Trans>
              </li>
              <li>
                <Trans lang={lang}>психотичних станів</Trans>
              </li>
              <li>
                <Trans lang={lang}>розладів статевої ідентифікації</Trans>
              </li>
              <li>
                <Trans lang={lang}>психосоматичних розладів</Trans>
              </li>
              <li>
                <Trans lang={lang}>неврозів</Trans>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/*  hypnosis_section */}
      <section className={`${styles.section} ${styles.hypnosis_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Гіпноз</Trans>
          </h2>
          <div className={styles.prof_blocks}>
            <div className={styles.left_border}>
              <p>
                <Trans lang={lang}>
                  Володію методами гіпнозу. Маю сертифікати «Гіпноз - як метод роботи з ресурсом
                  клієнта», «Гіпнотерапія - тонкощі професії».
                </Trans>{' '}
              </p>
              <p>
                <Trans lang={lang}>
                  Проводжу пропрацювання в регресивному гіпнозі пацієнтів з панічними станами,
                  фобіями, порушеннями сну, розладами харчової поведінки, статевими розладами,
                  проблемами, викликаними минулими подіями, що виявились хворобливими з емоційної
                  та/або фізичної точки зору, причиною яких можуть бути декілька випадків; різних
                  видів залежності, психосоматичних розладів, депресивних станів.
                </Trans>
              </p>
            </div>
            <div className={styles.prof_blocks}>
              <figure className={styles.hypnosis_figure}>
                <img src="/hypnosis.jpg" alt="Редько Тетяна Георгіївна" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/*  analis_section */}
      <section className={`${styles.section} ${styles.prof_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Психоаналіз</Trans>
          </h2>
          <div className={styles.prof_blocks}>
            <figure className={styles.analis_figure}>
              <img src="/main.jpg" alt="Редько Тетяна Георгіївна" />
            </figure>
            <div className={styles.analis_border}>
              <p>
                <Trans lang={lang}>
                  Проводжу психокорекцію особистісних порушень, займаюсь питаннями психоаналізу.
                  Співпрацюю у команді з психологом, сексопатологом, наркологом та терапевтом.
                </Trans>{' '}
              </p>
              <p>
                <Trans lang={lang}>
                  Проводжу консультування пацієнтів, які перебувають за кордоном. Надаю
                  індивідуальні, сімейні та групові консультації. Проводжу медичний супровід
                  пацієнтів з психічними розладами, які супроводжуються суїцидальною поведінкою.
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  form_section */}
      <section className={`${styles.section} ${styles.info_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>
                <Trans lang={lang}>Ім'я</Trans>
              </span>
              <input type="text" name="name" required onChange={handleChange} />
              <input type="email" name="email" onChange={handleChange} />
              <input type="tel" name="phone" required onChange={handleChange} />
              <textarea name="text" onChange={handleChange} />
              <button className={`${styles.btn} ${styles.form_btn}`}>
                <Trans lang={lang}>Зв'язатися</Trans>
              </button>
            </label>
          </form>
        </div>
      </section>

      {/*  footer */}
      <FooterBlock lang={lang} />
    </main>
  );
}
