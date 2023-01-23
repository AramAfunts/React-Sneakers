import React from "react";
import { Card } from "../components/Card";
import AppContext from "../context";

export function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  handleSearchChange,
  addToCart,
  isLoading,
}) {

  const { addToFavorite } = React.useContext(AppContext);

  const renderItems = () => {
    const filtredItems = items.filter((sneaker) =>
      sneaker.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(10).fill({})] : filtredItems).map((sneaker, index) => (
      <Card
        key={index}
        name={sneaker.name}
        price={sneaker.price}
        imageUrl={sneaker.imageUrl}
        onPlus={(sneaker) => addToCart(sneaker)}
        onFavorite={(sneaker) => addToFavorite(sneaker)}
        added={cartItems.some((obj) => Number(obj.id) === Number(sneaker.id))}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        {searchValue ? (
          <h1>Searching by request: '{searchValue}'</h1>
        ) : (
          <h1>All sneakers</h1>
        )}
        <div className="search-block">
          <img src="img/search.svg" alt="Search" />
          {searchValue && (
            <img
              className="clearButton cu-p"
              onClick={() => setSearchValue("")}
              src="img/btn-remove.svg"
              alt="Clear"
            />
          )}
          <input
            onChange={handleSearchChange}
            value={searchValue}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
