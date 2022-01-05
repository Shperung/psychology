import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components
import T, { useTrans } from '../../trans/trans';
import SocialBlock from './social';

// styles
import styles from './contacts.module.scss';
import stylesBtns from '../button/button.module.scss';

export default function ContactsBlock() {
  const router = useRouter();
  const { t } = useTrans();

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
    <section className={`${styles.section} ${styles.info_section}`}>
      <a id="anchor-form" />
      <div data-container>
        <div className={styles.contact_wrap}>
          <div className={styles.contact_container}>
            <address className={styles.contact_item}>
              <h4>
                <T>Адреса</T>:
              </h4>
              <p>
                <T>вул. Хмельницьке Шосе, 23, поверх 2, каб. 115.</T>
              </p>
              <p>
                <T>Вінниця</T>, 21036
              </p>
            </address>

            <div className={styles.contact_item}>
              <h4>
                <T>Графік роботи</T>:
              </h4>
              <ul>
                <li>
                  <T>Кожен день</T> 16.00-19.00
                </li>
                <li>
                  <T>Субота</T> 10.00-15.00
                </li>
                <li>
                  <T>Прийом за попереднім записом.</T>
                </li>
              </ul>
            </div>

            <div className={styles.contact_item}>
              <h4>
                <T>Телефон</T>:
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
              <div className={styles.social}>
                <SocialBlock />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.contact_form}>
            <label className={styles.contact_label}>
              <span className={styles.contact_label_text}>
                <T>Ім'я</T>
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
                <T>Телефон</T>
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
                <T>Повідомлення</T>
              </span>
              <textarea
                value={formData.text}
                className={`${styles.contact_fild} ${styles.contact_textarea}`}
                name="text"
                onChange={handleChange}
              />
            </label>

            <div className={styles.btn_form_group}>
              <button disabled={loading} className={`${stylesBtns.btn}`}>
                <T>Зв'язатися</T>
              </button>
              {loading ? (
                <div className={styles.loader}>
                  <img src="/icons/loading.svg" width="32px" height="32px" />
                </div>
              ) : null}

              <div className={`${styles.status_msg} `}>
                <T>
                  {status === 'success'
                    ? 'Повідомлення успішно відправлено'
                    : status === 'error'
                    ? 'Не вдялось відправити повідомлення, спродуйте ше раз'
                    : ''}
                </T>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
