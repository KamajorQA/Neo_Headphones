import { ReactComponent as Vk } from '../../assets/img/icons/vkontakte.svg';
import { ReactComponent as Telegram } from '../../assets/img/icons/telegram.svg';
import { ReactComponent as WhatsApp } from '../../assets/img/icons/whatsapp.svg';
import s from './socials.module.css';

function Socials() {
  return (
    <section>
      <ul className={s.social}>
        <li className={s.social__item}>
          <a
            href="https://github.com/KamajorQA"
            target="_blank"
            rel="noreferrer"
          >
            <Vk />
          </a>
        </li>
        <li className={s.social__item}>
          <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
            <Telegram />
          </a>
        </li>

        <li className={s.social__item}>
          <a href="tel:+79641872190" target="_blank" rel="noreferrer">
            <WhatsApp />
          </a>
        </li>
      </ul>
    </section>
  );
}

export { Socials };
