import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // "card" is a default class, and props.className is the class passed in from the parent component

  return <div className={classes}>{props.children}</div>;
}

export default Card;
