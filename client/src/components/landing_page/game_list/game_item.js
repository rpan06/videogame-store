import React from 'react';
import { Link } from 'react-router-dom';
import CalculatePrice from '../../../helper/calculatePrice';
import '../../../scss/landing_page/game_list/game_item.scss';

export default (props) => {
  const { id, name, background_image: backgroundImage } = props.game;
  const price = CalculatePrice(id);

  const truncate = (str) => {
    if (str.length < 20) {
      return str;
    }

    return `${str.substring(0, 20)}...`;
  };

  return (
    <Link to={`/game/${id}`}>
      <div className="game-slide">
        <img src={backgroundImage} alt="" />
        <div className="game-info">
          <div className="col-10 px-2">
            <p className="game-title">{truncate(name)}</p>
          </div>
          <div className="col-2 px-2">
            <p className="game-price">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
