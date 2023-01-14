import classes from './Card.module.scss'

export function Card(props) {
  return (
    <div className={classes.card}>
      <div className={classes.favorite}>
        <img src='./img/unliked.svg' alt='unliked' />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneaker" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price}$</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}
