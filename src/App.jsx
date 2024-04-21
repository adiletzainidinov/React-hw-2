import './App.css';
import Search from './components/Search';
import HeaderIcon from './components/Header-icon';
import ReturnsOrder from './components/Returns-order';
import CartIcon from './components/Cart-icon';
import ImgCard from './components/Img-card';
import AboutTheProduct from './components/About-the-product';
import Raiting from './components/Raiting';
import { products } from './img/for-home-work/product';
import Button from './components/Button';

function Heder(param) {
  return (
    <>
      <div className="header">
        <HeaderIcon />
        <Search />
        <ReturnsOrder />
        <CartIcon />
      </div>
      <div className='session-first'>
        {products.map((item, index) => (
          <div className='session-first-card' key={index}>
            <ImgCard image={item.image} />
            <AboutTheProduct name={item.name} />
            <Raiting
              ratingStars={item.rating.stars}
              ratingCount={item.rating.count}
              priceCents={item.priceCents}
              keywords={item.keywords}
            />
            <Button/>
          </div>
        ))}
      </div>
    </>
  );
}

export default Heder;
