import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import { ReactComponent as Plus } from '../../assets/img/icons/Plus.svg';
import { ReactComponent as Minus } from '../../assets/img/icons/Minus.svg';
import { ReactComponent as Trash } from '../../assets/img/icons/Trash.svg';
import s from './inCartItem.module.css';

function InCartItem({
  title,
  cardImg,
  price,
  rating,
  slug,
  product,
  inCart,
  setInCart,
  quantity,
}) {
  const { setStored } = useContext(CardContext);

  const storeItem = () => {
    setStored((state) => {
      return [...state, product];
    });
  };

  const dismissItem = () => {};

  return (
    <article className={s.card}>
      <div className={s.trash}>
        <Trash />
      </div>
      <div className={s.details}>
        <div className={s.imgContainer}>
          <img src={cardImg} alt={slug} className={s.image} />
        </div>

        <div className={s.description}>
          <p className={s.title}>{title}</p>
          <span className={s.price}>{price}&nbsp;₽</span>
        </div>
      </div>
      <div className={s.bottom}>
        <div className={s.controls}>
          <div className={s.button} onClick={dismissItem}>
            <Minus />
          </div>
          <span className={s.quantity}>{quantity}</span>
          <div className={s.button} onClick={storeItem}>
            <Plus />
          </div>
        </div>
        <div className={s.total}>{quantity * price}&nbsp;₽</div>
      </div>
    </article>
  );
}

export { InCartItem };
