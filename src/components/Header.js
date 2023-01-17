import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to='/'>
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
        </Link>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img className="cu-p" onClick={props.onCartClick} width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>17,51 $</span>
        </li>
        <li className="mr-20">
          <Link to='/favorites'>
            <img className="cu-p" width={18} height={18} src="/img/heart.svg" alt="favorites" />
          </Link>
        </li>
        <li>
          <img className="cu-p" width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
