import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

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
  const initForm = {
    name: '',
    email: '',
    phone: '',
    text: '',
  };
  const [formData, setFormData] = useState(initForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData.name && formData.phone) {
      setLoading(true);
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
          //console.log('data', data);
          setStatus(data.status);
          setFormData(initForm);
        })
        .catch(err => {
          console.log('err', err);
          setStatus('error');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <main>
      <Head>
        <title>Редько Тетяна Георгіївна | Консультація психолога</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
            <Trans lang={lang}>Редько Тетяна Георгіївна</Trans>
          </h1>
          <p className={styles.descr}>
            <p className={styles.descr}>
              <Trans lang={lang}>Кандидат медичних наук</Trans>
            </p>
            <p className={styles.descr}>
              <Trans lang={lang}>Психіатр, медичний психолог, гіпнотерапевт</Trans>
            </p>
          </p>
          <a href="#anchor-form" className={`${styles.btn} ${styles.header_btn}`}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </a>
        </div>
        <figure className={styles.main_figure}>
          <img loading="lazy" src="/index.jpg" alt="" />
          <div className={styles.main_personal}>
            <p className={styles.person}>
              <Trans lang={lang}>
                <Trans lang={lang}>Ми дбаємо про ваше здоров'я</Trans>
              </Trans>
            </p>
          </div>
        </figure>
      </section>

      {/*  info_section */}
      <section className={`${styles.section} ${styles.info_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Мене звати Редько Тетяна</Trans>
          </h2>
          <div className={styles.content}>
            <p>
              <Trans lang={lang}>
                Закінчила Вінницький Національний медичний університет ім. М. І. Пирогова за
                спеціальністю «психіатрія».
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
              <img loading="lazy" src="/license.svg" alt="Ліцензія" />
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
            <Trans lang={lang}>В яких випадках я можу Вам допомогти:</Trans>
          </h2>
          <div className={styles.prof_blocks}>
            <figure className={styles.prof_figure}>
              <img loading="lazy" src="/prof.jpg" alt="Редько Тетяна Георгіївна" />
            </figure>
            <ul className={styles.prof_ul}>
              {/*<li>
                <Trans lang={lang}>фобії</Trans>
              </li>
              <li>
                <Trans lang={lang}>тривожні стани</Trans>
              </li>
              <li>
                <Trans lang={lang}>посттравма-тичні стресові розлади</Trans>
              </li>
              <li>
                <Trans lang={lang}>депресії, у тому числі післяпологові</Trans>
              </li>
              <li>
                <Trans lang={lang}>біполярний афективний розлад</Trans>
              </li>
              <li>
                <Trans lang={lang}>порушення сну</Trans>
              </li>
              <li>
                <Trans lang={lang}>нервову анорексію</Trans>
              </li>
              <li>
                <Trans lang={lang}>булімію</Trans>
              </li>
              <li>
                <Trans lang={lang}>розлади статевої ідентифікації</Trans>
              </li>
              <li>
                <Trans lang={lang}>шизофренію</Trans>
              </li>
              <li>
                <Trans lang={lang}>розлади емоцій</Trans>
              </li>
              <li>
                <Trans lang={lang}>панічні стани</Trans>
              </li>
              <li>
                <Trans lang={lang}>психосоматичні розлади</Trans>
              </li>
              <li>
                <Trans lang={lang}>неврози</Trans>
              </li>
              <li>
                <Trans lang={lang}>розлади психіки, пов`язаніз віковими змінами</Trans>
              </li>
              <li>
                <Trans lang={lang}>зниженням пам`яті</Trans>
              </li>
              <li>
                <Trans lang={lang}>органічні психічні розлади</Trans>
              </li>
              <li>
                <Trans lang={lang}>розлади, які супроводжуються суїцидальною поведінкою</Trans>
              </li>*/}
              <li>
                <Trans lang={lang}>Байдужість</Trans>
              </li>
              <li>
                <Trans lang={lang}>Імпульсивність</Trans>
              </li>
              <li>
                <Trans lang={lang}>Невпевненість у собі</Trans>
              </li>
              <li>
                <Trans lang={lang}>Агресія</Trans>
              </li>
              <li>
                <Trans lang={lang}>Злостивість</Trans>
              </li>
              <li>
                <Trans lang={lang}>Маячні ідеї</Trans>
              </li>
              <li>
                <Trans lang={lang}>Манія</Trans>
              </li>
              <li>
                <Trans lang={lang}>Галюцинації</Trans>
              </li>
              <li>
                <Trans lang={lang}>Непосидючість</Trans>
              </li>
              <li>
                <Trans lang={lang}>Зниження пам'яті</Trans>
              </li>
              <li>
                <Trans lang={lang}>Різні види залежності</Trans>
              </li>
              <li>
                <Trans lang={lang}>Апатія</Trans>
              </li>
              <li>
                <Trans lang={lang}>Відчай</Trans>
              </li>
              <li>
                <Trans lang={lang}>Смуток</Trans>
              </li>
              <li>
                <Trans lang={lang}>Злість</Trans>
              </li>
              <li>
                <Trans lang={lang}>Образа</Trans>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.anchor_contact}>
        <div data-container>
          <span className={styles.anchor_text}>
            <Trans lang={lang}>Записатися на консультацію прямо зараз!</Trans>
          </span>
          <a href="#anchor-form" className={`${styles.btn} ${styles.btn_white}`}>
            <Trans lang={lang}>Відправити заявку</Trans>
          </a>
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
                  Проводжу пропрацювання в регресивному гіпнозі панічних станів, фобій, тривоги,
                  грусті, провини, образи, невпевненості в собі, злості, ревнощів, ненависті,
                  алкогольної та тютюнової залежностей, токсичних стосунків, психосоматичних
                  розладів, депресивних станів, кризових сімейних станів.
                </Trans>
              </p>
            </div>
            <div className={styles.prof_blocks}>
              <figure className={styles.hypnosis_figure}>
                <img loading="lazy" src="/hypnosis.jpg" alt="Редько Тетяна Георгіївна" />
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
              <img loading="lazy" src="/main.jpg" alt="Редько Тетяна Георгіївна" />
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

      {/*  price_section */}
      <section className={`${styles.section} ${styles.price_section}`}>
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Ціна</Trans>
          </h2>

          <div className={styles.price_wrap}>
            <article className={styles.price_article}>
              <h3 className={styles.price_h3}>
                <Trans lang={lang}>Консультація</Trans>
              </h3>
              <b className={styles.price_summ}>700 грн</b>
              <h4 className={styles.price_h4}>
                1 <Trans lang={lang}>прийом</Trans>
              </h4>
            </article>
            <article className={styles.price_article}>
              <h3 className={styles.price_h3}>
                Online - <Trans lang={lang}>Консультація</Trans>
              </h3>
              <b className={styles.price_summ}>800 грн</b>
              <h4 className={styles.price_h4}>
                1 <Trans lang={lang}>прийом</Trans>
              </h4>
            </article>
          </div>
        </div>
      </section>

      {/*  form_section */}
      <section className={`${styles.section} ${styles.info_section}`}>
        <a id="anchor-form" />
        <div data-container>
          <h2 className={styles.h2}>
            <Trans lang={lang}>Зв'язатися</Trans>
          </h2>
          <div className={styles.contact_wrap}>
            <div className={styles.contact_container}>
              <h3 className={styles.h3}>
                <Trans lang={lang}>Запис онлайн та контакти</Trans>
              </h3>
              <address className={styles.contact_item}>
                <h4>
                  <Trans lang={lang}>Адреса</Trans>:
                </h4>
                <p>
                  <Trans lang={lang}>вул. Хмельницьке Шосе, 23, поверх 2, каб. 115.</Trans>
                </p>
                <p>
                  <Trans lang={lang}>Вінниця</Trans>, 21036
                </p>
              </address>

              <div className={styles.contact_item}>
                <h4>
                  <Trans lang={lang}>Графік роботи</Trans>:
                </h4>
                <ul>
                  <li>
                    <Trans lang={lang}>Кожен день</Trans> 16.00-19.00
                  </li>
                  <li>
                    <Trans lang={lang}>Субота</Trans> 10.00-15.00
                  </li>
                  <li>
                    <Trans lang={lang}>Прийом за попереднім записом.</Trans>
                  </li>
                </ul>
              </div>

              <div className={styles.contact_item}>
                <h4>
                  <Trans lang={lang}>Телефон</Trans>:
                </h4>
                <ul>
                  <li className={styles.hover_li}>
                    <a href="tel:+380509584113">+38-050-958-41-13</a>
                  </li>
                  <li className={styles.hover_li}>
                    <a href="tel:+380939167544">+38-093-916-75-44 (viber)</a>
                  </li>
                  <li className={styles.hover_li}>
                    <a href="tel:+380681627732">+38-068-162-77-32</a>
                  </li>
                </ul>
              </div>

              <div className={styles.contact_item}>
                <h4>Email:</h4>
                <ul>
                  <li className={styles.hover_li}>
                    <a href="mailto:t.g.redko@gmail.com">t.g.redko@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.contact_form}>
              <label className={styles.contact_label}>
                <span className={styles.contact_label_text}>
                  <Trans lang={lang}>Ім'я</Trans>
                  <sup>*</sup>
                </span>
                <input
                  className={styles.contact_fild}
                  value={formData.name}
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                />
              </label>

              <label className={styles.contact_label}>
                <span className={styles.contact_label_text}>
                  <Trans lang={lang}>Телефон</Trans>
                  <sup>*</sup>
                </span>
                <input
                  className={styles.contact_fild}
                  type="tel"
                  value={formData.phone}
                  name="phone"
                  required
                  onChange={handleChange}
                  placeholder="+380000000000"
                />
              </label>

              <label className={styles.contact_label}>
                <span className={styles.contact_label_text}>Email</span>
                <input
                  className={styles.contact_fild}
                  value={formData.email}
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </label>

              <label className={styles.contact_label}>
                <span className={styles.contact_label_text}>
                  <Trans lang={lang}>Повідомлення</Trans>
                </span>
                <textarea
                  value={formData.text}
                  className={`${styles.contact_fild} ${styles.contact_textarea}`}
                  name="text"
                  onChange={handleChange}
                />
              </label>

              <div className={styles.btn_form_group}>
                <button disabled={loading} className={`${styles.btn} ${styles.form_btn}`}>
                  <Trans lang={lang}>Зв'язатися</Trans>
                </button>
                {loading ? (
                  <div className={styles.loader}>
                    <img src="/loading.svg" width="32px" height="32px" />
                  </div>
                ) : null}

                <div className={`${styles.status_msg} `}>
                  <Trans lang={lang}>
                    {status === 'success'
                      ? 'Повідомлення успішно відправлено'
                      : status === 'error'
                      ? 'Не вдялось відправити повідомлення, спродуйте ше раз'
                      : ''}
                  </Trans>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <iframe
        src="https://web-1011.webnode.ru/widgets/googlemaps/?z=15&amp;a=%D0%A5%D0%BC%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D0%B5+%D1%88%D0%BE%D1%81%D0%B5+23%2C+%D0%BC.+%D0%92%D1%96%D0%BD%D0%BD%D0%B8%D1%86%D1%8F+21036&amp;s=LcwxCsAgDEbhu2QuQlfP0U0cHH6LkGpJ0kHEu9dC5-_xwqCMZI_g6DfIk0mqWsxxqaCNwLhQ7ccT7YJJd7kwL1XrDFHyYZB-l2Sl1RXuNOOMLw.."
        className={styles.google_map}
        loading="lazy"
      ></iframe>

      {/*  footer */}
      <FooterBlock lang={lang} />
    </main>
  );
}
