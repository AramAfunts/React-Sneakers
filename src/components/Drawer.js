export function Drawer({ onCloseClick, onRemove, items = [] }) {
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
              {items.map((item) => (
                <div key={item.id} className="cartItem d-flex align-center mb-20">
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
              <button className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
              <img
                className="mb-20"
                width={120}
                height={120}
                src="./img/empty-cart.jpg"
                alt="Empty Cart"
              />
              <h2>Cart is empty</h2>
              <p className="opacity-6">
                Add at least one pair of sneakers to checkout.
              </p>
              <button onClick={onCloseClick} className="greenButton">
                <img src="./img/arrow.svg" alt="Arrow" />
                Return back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
