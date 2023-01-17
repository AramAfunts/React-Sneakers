import { Card } from "../components/Card";

export function Favorites({ items, addToFavorite }) {
    return (
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>My favorites</h1>
        </div>
        <div className="d-flex flex-wrap">
        {items.map((sneaker, index) => (
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
