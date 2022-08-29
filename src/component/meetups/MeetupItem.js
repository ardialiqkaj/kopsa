import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

import FavoritesContext from "../../store/favorites-context";
import CartsContext from "../../store/cart-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const cartsCtx = useContext(CartsContext);

  const itemIsCart = cartsCtx.itemIsCart(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  function toggleCartsStatusHandler() {
    if (itemIsCart) {
      cartsCtx.removeCart(props.id);
    } else {
      cartsCtx.addCart({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

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

export default MeetupItem;
