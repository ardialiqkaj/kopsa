import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./UserItem.module.css";

function UserItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button onClick={toggleCartsStatusHandler}>
            {itemIsCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
        <div className={classes.actions}></div>
      </Card>
    </li>
  );
}

export default UserItem;
