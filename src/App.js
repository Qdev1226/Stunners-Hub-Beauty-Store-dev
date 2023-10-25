import {
  Homepage,
  Navbar,
  Login,
  Signup,
  Cart,
  Wishlist,
  RequireAuth,
} from "./Components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import { useAuth } from "contexts";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Homepage />
            </RequireAuth>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth isLoggedIn={isLoggedIn}>
              <Wishlist />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
