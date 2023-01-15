import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  const addToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  React.useEffect(() => {
    fetch("https://63c3e544a9085635752de2ec.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseClick={() => setCartOpened(false)} />
      )}
      <Header onCartClick={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((sneaker) => (
            <Card
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
