import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import { ReactComponent as Heart } from '../../assets/img/icons/heart.svg';
import { ReactComponent as Cart } from '../../assets/img/icons/cart.svg';
import s from './iconsMenu.module.css';

function IconsMenu() {
  const { stored } = useContext(CardContext);

  const likes = [1, 2];
  // const stored = [1];
  return (
    <div className={s.iconsMenu}>
      <Link className={s.iconLink} to={'/marked'}>
        <Heart />
        {likes?.length !== 0 && (
          <span className={s.iconBubble}>{likes.length}</span>
        )}
      </Link>
      <Link className={s.iconLink} to={'/cart'}>
        <Cart />
        {stored?.length !== 0 && (
          <span className={s.iconBubble}>{stored?.length}</span>
        )}
      </Link>
    </div>
  );
}

export { IconsMenu };
