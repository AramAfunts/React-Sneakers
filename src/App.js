import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      async function fetchData() {
        const itemsResponse = await axios.get(
          "https://63c3e544a9085635752de2ec.mockapi.io/items"
        );
        const cartResponse = await axios.get(
          "https://63c3e544a9085635752de2ec.mockapi.io/cart"
        );

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
      }

      fetchData();
    } catch (error) {
      alert("Error while getting data from server.");
    }
  }, []);

  const addToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://63c3e544a9085635752de2ec.mockapi.io/cart/${String(obj.id)}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          "https://63c3e544a9085635752de2ec.mockapi.io/cart",
          obj
        );
      }
    } catch (error) {
      alert("Error when adding item to cart.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onRemoveItem = async (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      await axios.delete(
        `https://63c3e544a9085635752de2ec.mockapi.io/cart/${id}`
      );
    } catch (error) {
      alert("Error on a server side while removing item from cart. Please, try again later!");
    }
  };

  const addToFavorite = (obj) => {
    if (favoriteItems.find((favorite) => favorite.name === obj.name)) {
      setFavoriteItems((prev) => prev.filter((item) => item.name !== obj.name));
    } else {
      setFavoriteItems((prev) => [...prev, obj]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        addToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
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
            path=""
            element={
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearchChange={handleSearchChange}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
