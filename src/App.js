import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./component/layout/Layout";
import CartPage from "./pages/Cart";
import NewUserPage from "./pages/NewUser";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<NewUserPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
