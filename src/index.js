import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
import { CartsContextProvider } from "./store/cart-context";

ReactDOM.render(
  <FavoritesContextProvider>
    <CartsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartsContextProvider>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
