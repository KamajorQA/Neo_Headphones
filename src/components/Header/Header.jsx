import Logo from '../Logo/Logo';
import s from './header.module.css';
import { IconsMenu } from '../IconsMenu/IconsMenu';

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <IconsMenu />
    </header>
  );
}

export { Header };
