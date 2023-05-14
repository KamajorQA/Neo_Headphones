import { ReactComponent as Language } from '../../assets/img/icons/lang.svg';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <section className={s.left}>
        <ul className={s.navList}>
          <li className={s.item}>
            <NavLink to="/marked" className={s.link}>
              Избранное
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/cart" className={s.link}>
              Корзина
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/contacts" className={s.link}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={s.right}>
        <div className={s.item}>
          <NavLink to="/terms" className={s.link}>
            Условия сервиса
          </NavLink>
        </div>
        <div className={s.langSwitcher}>
          <Language />
          <span className={s.currentLang}>Рус</span>
          <span>Eng</span>
        </div>
      </section>
    </nav>
  );
}

export { Navigation };
