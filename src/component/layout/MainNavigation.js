import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import CartsContext from "../../store/cart-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const cartsCtx = useContext(CartsContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Kopsa</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Items</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Item</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              My Cart
              <span className={classes.badge}>{cartsCtx.totalCarts}</span>
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
