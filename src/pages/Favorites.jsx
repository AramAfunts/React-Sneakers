import React from "react";
import { Card } from "../components/Card";
import AppContext from "../context";

export function Favorites() {

  const { favoriteItems, addToFavorite } = React.useContext(AppContext);

    return (
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>My favorites</h1>
        </div>
        <div className="d-flex flex-wrap">
        {favoriteItems.map((sneaker, index) => (
            <Card
              key={index}
              name={sneaker.name}
              price={sneaker.price}
              imageUrl={sneaker.imageUrl} 
              favorited={true}
              onFavorite={addToFavorite}
              />
          ))}
        </div>
      </div>
    );
  }
