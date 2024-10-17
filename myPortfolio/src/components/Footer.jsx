import React from 'react';
import telegram from '../assets/img/icons/telegram.svg';
import gitHub from '../assets/img/icons/gitHub.svg';
import linkedIn from '../assets/img/icons/linkedIn.svg';
import LazyLoad from 'react-lazyload';
import styles from './Footer.module.css';

function Footer() {
  // Плейсхолдер с анимированным градиентом
  const animatedPlaceholder = (
    <div className={styles.animatedGradientPlaceholder}></div>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/whit33th">
                <LazyLoad
                  height={38}
                  offset={100}
                  placeholder={animatedPlaceholder}
                >
                  <img src={gitHub} loading='lazy' alt="GitHub Link" />
                </LazyLoad>
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/whit33th">
                <LazyLoad
                  height={38}
                  offset={100}
                  placeholder={animatedPlaceholder}
                >
                  <img src={linkedIn} alt="LinkedIn Link" />
                </LazyLoad>
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/whit33th">
                <LazyLoad
                  height={38}
                  offset={100}
                  placeholder={animatedPlaceholder}
                >
                  <img
                    src={telegram}
                    alt="Telegram Link"
                    style={{ width: '38px', height: '38px', filter: 'invert(1)' }}
                  />
                </LazyLoad>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
