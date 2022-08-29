import { useContext } from "react";

import CartsContext from "../store/cart-context";
import MeetupList from "../component/meetups/MeetupList";

function CartPage() {
  const cartCtx = useContext(CartsContext);

  let content;

  if (cartCtx.totalCarts === 0) {
    content = <p>You don't have any items on your cart. Start shopping!</p>;
  } else {
    content = <MeetupList meetups={cartCtx.carts} />;
  }

  return (
    <section>
      <h1>My Cart</h1>
      {content}
    </section>
  );
}

export default CartPage;
