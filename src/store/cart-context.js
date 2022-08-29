import { createContext, useState } from "react";

const CartsContext = createContext({
  carts: [],
  totalCarts: 0,
  addCart: (cartMeetup) => {},
  removeCart: (meetupId) => {},
  itemIsCart: (meetupId) => {},
});

export function CartsContextProvider(props) {
  const [userCarts, setUserCarts] = useState([]);

  function addCartHandler(cartMeetup) {
    setUserCarts((prevUserCarts) => {
      return prevUserCarts.concat(cartMeetup);
    });
  }

  function removeCartHandler(meetupId) {
    setUserCarts((prevUserCarts) => {
      return prevUserCarts.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsCartHandler(meetupId) {
    return userCarts.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    carts: userCarts,
    totalCarts: userCarts.length,
    addCart: addCartHandler,
    removeCart: removeCartHandler,
    itemIsCart: itemIsCartHandler,
  };

  return (
    <CartsContext.Provider value={context}>
      {props.children}
    </CartsContext.Provider>
  );
}

export default CartsContext;
