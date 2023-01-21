import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true); 

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get("https://63c3e544a9085635752de2ec.mockapi.io/items");
      const cartResponse = await axios.get("https://63c3e544a9085635752de2ec.mockapi.io/cart");

      setIsLoading(false);
      
      setCartItems(cartResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData()
  }, []);

  const addToCart = (obj) => {
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));
      axios.delete(`https://63c3e544a9085635752de2ec.mockapi.io/cart/${obj.id}`);
    }
    else {
      axios.post("https://63c3e544a9085635752de2ec.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63c3e544a9085635752de2ec.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavorite = (obj) => {
    if(favoriteItems.find(favorite => favorite.name === obj.name)) {
      setFavoriteItems((prev) => prev.filter((item) => item.name !== obj.name))
    } 
    else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseClick={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onCartClick={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              handleSearchChange={handleSearchChange}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favoriteItems} addToFavorite={addToFavorite} />} />
      </Routes>
    </div>
  );
}

export default App;
