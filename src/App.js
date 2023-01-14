import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {

  const sneakersArr = [
    {
      name: "Nike Blazer Mid Suede Men's Sneakers",
      price: 199.99,
      imageUrl: '/img/sneakers/1.jpg'
    },
    {
      name: "Nike Air Max 270 Men's Sneakers",
      price: 179.99,
      imageUrl: '/img/sneakers/2.jpg'
    },
    {
      name: "Nike Blazer Mid Suede Men's Sneakers",
      price: 159.99,
      imageUrl: '/img/sneakers/3.jpg'
    },
    {
      name: "Puma X Aka Boku Future Rider Sneakers",
      price: 119.99,
      imageUrl: '/img/sneakers/4.jpg'
    }
  ] 

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search" />
          </div>
        </div>
        <div className="d-flex">
          {sneakersArr.map( (sneaker) => <Card name={sneaker.name} price={sneaker.price} imageUrl={sneaker.imageUrl} onClick={() => console.log(sneaker)} /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
