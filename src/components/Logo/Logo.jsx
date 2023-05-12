import { Link } from "react-router-dom";
import s from "./logo.module.css";

function Logo() {
  return (
    <Link to="/" className={s.logo}>
      Qpick
    </Link>
  );
}

export default Logo;
