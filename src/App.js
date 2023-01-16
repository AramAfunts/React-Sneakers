import React from "react";
import axios from 'axios';
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios.get("https://63c3e544a9085635752de2ec.mockapi.io/items").then((res) => { setItems(res.data) })

    axios.get("https://63c3e544a9085635752de2ec.mockapi.io/cart").then((res) => { setCartItems(res.data) })
  }, []);

  const addToCart = (obj) => {
    axios.post("https://63c3e544a9085635752de2ec.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseClick={() => setCartOpened(false)} />
      )}
      <Header onCartClick={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          {searchValue ? (
            <h1>Searching by request: '{searchValue}'</h1>
          ) : (
            <h1>All sneakers</h1>
          )}
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && (
              <img
                className="clearButton cu-p"
                onClick={() => setSearchValue("")}
                src="/img/btn-remove.svg"
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
        <div className="d-flex flex-wrap">
          {items
            .filter((sneaker) =>
              sneaker.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((sneaker, index) => (
              <Card
                key={index}
                name={sneaker.name}
                price={sneaker.price}
                imageUrl={sneaker.imageUrl}
                onPlus={(sneaker) => addToCart(sneaker)}
                onFavorite={() => console.log("Item added to favorites.")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
