import React from 'react';
import Raiting0 from './../img/for-home-work/ratings/rating-0.png';
import Raiting05 from './../img/for-home-work/ratings/rating-05.png';
import Raiting10 from './../img/for-home-work/ratings/rating-10.png';
import Raiting15 from './../img/for-home-work/ratings/rating-15.png';
import Raiting20 from './../img/for-home-work/ratings/rating-20.png';
import Raiting25 from './../img/for-home-work/ratings/rating-25.png';
import Raiting30 from './../img/for-home-work/ratings/rating-30.png';
import Raiting35 from './../img/for-home-work/ratings/rating-35.png';
import Raiting40 from './../img/for-home-work/ratings/rating-40.png';
import Raiting45 from './../img/for-home-work/ratings/rating-45.png';
import Raiting50 from './../img/for-home-work/ratings/rating-50.png';
import { products } from '../img/for-home-work/product';

const Raiting = (props) => {
  let ratingImg = null;

  if (props.ratingStars <= 0) {
    ratingImg = Raiting0;
  } else if (props.ratingStars <= 0.5) {
    ratingImg = Raiting05;
  } else if (props.ratingStars <= 1) {
    ratingImg = Raiting10;
  } else if (props.ratingStars <= 1.5) {
    ratingImg = Raiting15;
  } else if (props.ratingStars <= 2) {
    ratingImg = Raiting20;
  } else if (props.ratingStars <= 2.5) {
    ratingImg = Raiting25;
  } else if (props.ratingStars <= 3) {
    ratingImg = Raiting30;
  } else if (props.ratingStars <= 3.5) {
    ratingImg = Raiting35;
  } else if (props.ratingStars <= 4) {
    ratingImg = Raiting40;
  } else if (props.ratingStars <= 4.5) {
    ratingImg = Raiting45;
  } else {
    ratingImg = Raiting50;
  }

  return (
    <div>
      <div className='raiting-papa'>
        {' '}
        <img className='img-raiting' src={ratingImg} alt={props.name} />
        <p>{props.ratingCount}</p>
      </div >
      <p className='price-cents'>${props.priceCents}</p>
      <select className='select'>
        <option>1</option>
        <option>{props.keywords}</option>
      </select>
    </div>
  );
};

export default Raiting;
