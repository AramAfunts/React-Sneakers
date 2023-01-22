import React from 'react'
import { Info } from "./Info";
import AppContext from '../context';

export function Drawer({ onCloseClick, onRemove, items = [] }) {

  const [isCompleted, setIsCompleted] = React.useState(false)
    const { setCartItems } = React.useContext(AppContext);

    const onClickOrder = async () => {
        setIsCompleted(true);
        setCartItems([]);
    }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            className="removeBtn cu-p"
            onClick={onCloseClick}
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item, index) => (
                <div key={index} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{item.name}</p>
                    <b>{item.price} $</b>
                  </div>
                  <img
                    className="removeBtn"
                    onClick={() => onRemove(item.id)}
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>200,00 $</b>
                </li>

                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>10,00 $</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isCompleted ? "Order is completed" : "Cart is empty"}
            description={isCompleted ? "Your order will soon be delivered by courier" : "Add at least one pair of sneakers to checkout."}
            image={isCompleted ? "./img/complete-order.jpg" : "/img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}
