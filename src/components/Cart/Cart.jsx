import { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../context/cardContext';
import { InCartItem } from '../InCartIem/InCartIem';
import s from './cart.module.css';

function Cart() {
  const [inCart, setInCart] = useState([]);
  const [total, setTotal] = useState(0);
  const { stored } = useContext(CardContext);

  useEffect(() => {
    const buyoutGoods = stored.reduce((accum, elem) => {
      const findItem = accum.find((i) => i.product?.slug === elem?.slug);
      if (!findItem) {
        return [...accum, { product: elem, count: 1 }];
      } else {
        const newPodsList = accum.map((accElem) => {
          if (accElem.product.slug === findItem.product.slug) {
            return { ...findItem, count: findItem.count + 1 };
          }
          return accElem;
        });
        return [...newPodsList];
      }
    }, []);
    setInCart(buyoutGoods);
  }, [stored]);

  useEffect(() => {
    const totalSumm = inCart.reduce((accum, elem) => {
      let summ = +accum + elem?.product?.price * +elem?.count;
      return summ;
    }, []);
    setTotal(totalSumm);
  }, [inCart]);

  return (
    <section className={s.wrapper}>
      <div className={s.title}>Корзина</div>
      <div className={s.container}>
        {inCart?.length === 0 ? (
          <article className={s.left}>Ваша корзина пуста!</article>
        ) : (
          <article className={s.left}>
            {inCart.length &&
              inCart.map((elem) => (
                <div key={Date.now() + Math.random()}>
                  <InCartItem
                    key={Date.now() + Math.random()}
                    {...elem.product}
                    product={elem.product}
                    inCart={inCart}
                    setInCart={setInCart}
                    quantity={elem.count}
                  />
                </div>
              ))}
          </article>
        )}
        <article className={s.right}>
          <div className={s.total}>
            <span>ИТОГО</span>
            <span>
              ₽&nbsp;
              {inCart?.length === 0 ? <span>0</span> : <span>{total}</span>}
            </span>
          </div>
          <button type="submit" className={s.buyout}>
            Перейти к оформлению
          </button>
        </article>
      </div>
    </section>
  );
}

export { Cart };
