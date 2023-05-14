import { Card } from '../Card/Card';
import s from './cardList.module.css';

function CardList({ title, goods = [] }) {
  return (
    <section className={s.wrapper}>
      <article className={s.title}>{title}</article>
      <article className={s.grid}>
        {/* <img src={goods[0].cardImg} /> */}
        {goods.length &&
          goods.map((headset) => (
            <Card
              key={headset.slug}
              {...headset}
              // onProductLike={onProductLike}
            />
          ))}
      </article>
    </section>
  );
}

export { CardList };
