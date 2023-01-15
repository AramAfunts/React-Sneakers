export function Drawer({ onCloseClick, items = [] }) {
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

        <div className="items">
          {items.map((item) => (
            <div className="cartItem d-flex align-center mb-20">
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
      </div>
    </div>
  );
}
