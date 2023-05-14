import Logo from '../Logo/Logo';
import { IconsMenu } from '../IconsMenu/IconsMenu';
import s from './header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <IconsMenu />
    </header>
  );
}

export { Header };
