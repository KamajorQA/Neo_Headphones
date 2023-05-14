import goodsList from '../../assets/goodsList';
import { CardList } from '../CardList/CardList';
import s from './main.module.css';

function Main() {
  return (
    <main className={s.catalogue}>
      <CardList title={'Наушники'} goods={goodsList.wired} />
      <CardList title={'Беспроводные наушники'} goods={goodsList.wireless} />
    </main>
  );
}

export { Main };
