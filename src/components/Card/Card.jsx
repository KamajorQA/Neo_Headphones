import { ReactComponent as Star } from '../../assets/img/icons/star.svg';

import s from './card.module.css';

function Card({ title, cardImg, price, oldPrice, rating, slug }) {
  // const { setBasket, basket } = useContext(CardContext);
  const addToBasket = () => {
    // setBasket((state) => {
    //   console.log({ state });
    //   const findEl = state.find(e => e.product._id === _id);
    //   if (findEl) {
    //     // return [];
    //     console.log({ state, findEl });
    //     const newState = state.map(e => {
    //       if (e.product._id === findEl.product._id) {
    //         return { product: item, count: e.count + 1 }
    //       }
    //       return e
    //     })
    //     return newState
    //   } else {
    //     console.log({ _id });
    //     return [...state, { product: item, count: 1 }]
    //   }
    // })
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
          <span className={s.buyout} onClick={addToBasket}>
            Купить
          </span>
        </div>
      </div>
    </article>
  );
}

export { Card };
