import { Card } from '../Card/Card';
import s from './cardList.module.css';

function CardList({ title, goods = [] }) {
  return (
    <section className={s.wrapper}>
      <article className={s.title}>{title}</article>
      <article className={s.grid}>
        {goods.length &&
          goods.map((headset) => (
            <Card key={headset.slug} {...headset} product={headset} />
          ))}
      </article>
    </section>
  );
}

export { CardList };
