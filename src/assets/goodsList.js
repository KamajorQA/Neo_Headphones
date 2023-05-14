import AppleBYZ from './img/Headphones/Wired/Apple BYZ S852I.png';
import EarPods from './img/Headphones/Wired/Apple EarPods.png';
import EarPodsCased from './img/Headphones/Wired/Apple EarPods Cased.png';
import EarPodsWireless from './img/Headphones/Wireless/Apple AirPods Wireless.png';
import GERLAX from './img/Headphones/Wireless/GERLAX GH-04.png';
import BOROFONE from './img/Headphones/Wireless/BOROFONE BO4.png';

const goodsList = {
  wired: [
    {
      title: 'Apple BYZ S852I',
      cardImg: AppleBYZ,
      price: 2927,
      oldPrice: 3527,
      rating: 4.7,
      slug: 'AppleBYZ',
    },
    {
      title: 'Apple EarPods',
      cardImg: EarPods,
      price: 2327,
      rating: 4.5,
      slug: 'EarPods',
    },
    {
      title: 'Apple EarPods',
      cardImg: EarPodsCased,
      price: 2327,
      rating: 4.5,
      slug: 'EarPodsCased',
    },
    {
      title: 'Apple BYZ S852I',
      cardImg: AppleBYZ,
      price: 2927,
      rating: 4.7,
      slug: 'S852I',
    },
    {
      title: 'Apple EarPods',
      cardImg: EarPods,
      price: 2327,
      rating: 4.5,
      slug: 'EarPodsNew',
    },
    {
      title: 'Apple EarPods',
      cardImg: EarPodsCased,
      price: 2327,
      rating: 4.5,
      slug: 'EarPodsCasedNew',
    },
  ],
  wireless: [
    {
      title: 'Apple AirPods',
      cardImg: EarPodsWireless,
      price: 9527,
      rating: 4.7,
      slug: 'EarPodsWireless',
    },
    {
      title: 'GERLAX GH-04',
      cardImg: GERLAX,
      price: 6527,
      rating: 4.7,
      slug: 'GERLAX',
    },
    {
      title: 'BOROFONE BO4',
      cardImg: BOROFONE,
      price: 7527,
      rating: 4.7,
      slug: 'BOROFONE',
    },
  ],
};

export default goodsList;
