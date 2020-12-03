import React from 'react';
import CalculatePrice from '../../../helper/calculatePrice';
import '../../../scss/landing_page/game_list/game_item.scss';

export default (props) => {
  const { id, name, background_image: backgroundImage } = props.game;
  const price = CalculatePrice(id);

  return (
    <div className="game-slide">
      <img src={backgroundImage} alt="" />
      <div className="game-info">
        <div className="col-6 px-2">
          <p className="game-title">{name}</p>
        </div>
        <div className="col-6 px-2">
          <p className="game-price">${price}</p>
        </div>
      </div>
    </div>
  );
};
