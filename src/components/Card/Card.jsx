import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';
import { ReactComponent as Star } from '../../assets/img/icons/star.svg';
import s from './card.module.css';

function Card({ title, cardImg, price, oldPrice, rating, slug, product }) {
  const { setStored } = useContext(CardContext);
  const storeItem = () => {
    setStored((state) => {
      return [...state, product];
    });
  };

  return (
    <article className={s.card}>
      <div className={s.imgContainer}>
        <img src={cardImg} alt={slug} className={s.image} />
      </div>

      <div className={s.details}>
        <div className={s.desc}>
          <p className={s.title}>{title}</p>

          <div className={s.priceBlock}>
            {price && <span className={s.price}>{price}&nbsp;₽</span>}
            {oldPrice && oldPrice !== 0 && (
              <span className={s.oldPrice}>{oldPrice}&nbsp;₽</span>
            )}
          </div>
        </div>
        <div className={s.controls}>
          <div className={s.rating}>
            <Star />
            <span className={s.currentRating}>{rating}</span>
          </div>
          <span className={s.buyout} onClick={storeItem}>
            Купить
          </span>
        </div>
      </div>
    </article>
  );
}

export { Card };
