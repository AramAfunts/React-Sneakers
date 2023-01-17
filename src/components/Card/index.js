import React from 'react';
import classes from './Card.module.scss'

export function Card({ name, price, imageUrl, onFavorite, onPlus, favorited = false }) {

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const handlePlusClick = () => {
    onPlus({ name, price, imageUrl })
    setIsAdded(!isAdded);
  }

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ name, price, imageUrl })
  }

  return (
    <div className={classes.card}>
      <div className={classes.favorite} onClick={onFavoriteClick}>
        <img src={isFavorite ? './img/liked.svg' : './img/unliked.svg'} alt='unliked' />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price}$</b>
        </div>
        <img className={classes.plusButton} onClick={handlePlusClick} src={isAdded ? './img/btn-checked.svg' : './img/btn-plus.svg'} alt="plus" />
      </div>
    </div>
  );
}
