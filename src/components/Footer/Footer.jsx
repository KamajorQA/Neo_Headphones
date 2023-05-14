import Logo from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { Socials } from '../Socials/Socials';
import s from './footer.module.css';

function Footer() {
  return (
    <footer className={s.wrapper}>
      <Logo />
      <Navigation />
      <Socials />
    </footer>
  );
}

export { Footer };
