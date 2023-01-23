import React from "react";
import classes from "./Card.module.scss";
import ContentLoader from "react-content-loader";

export function Card({
  id,
  name,
  price,
  imageUrl,
  onFavorite,
  onPlus,
  added = false,
  favorited = false,
  loading = false,
}) {

  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const handlePlusClick = () => {
    onPlus({ id, name, price, imageUrl });
    console.log({ id, name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ id, name, price, imageUrl });
  };

  return (
    <div className={classes.card}>
      {loading ? (
        <ContentLoader speed={2} width={155} height={250} viewBox='0 0 155 265' backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
          <rect x='0' y='0' rx='10' ry='10' width='155' height='155' />
          <rect x='0' y='167' rx='5' ry='5' width='155' height='15' />
          <rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
          <rect x='0' y='234' rx='5' ry='5' width='80' height='25' />
          <rect x='124' y='230' rx='10' ry='10' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
          <div className={classes.favorite} onClick={onFavoriteClick}>
            <img
              src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
              alt="unliked"
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt="sneaker" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price}$</b>
            </div>
            <img
              className={classes.plusButton}
              onClick={handlePlusClick}
              src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}
