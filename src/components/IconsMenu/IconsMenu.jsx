import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/img/icons/heart.svg";
import { ReactComponent as Cart } from "../../assets/img/icons/cart.svg";

import s from "./iconsMenu.module.css";

function IconsMenu() {
  return (
    <div className={s.iconsMenu}>
      <Link className={s.favoritesLink} to={"/favorites"}>
        {/* <FavIcon />
          {favorites.length !== 0 && (
            <span className={s.iconBubble}>{favorites.length}</span>
          )} */}
        <Heart />
      </Link>
      <Cart />
    </div>
  );
}

export { IconsMenu };
