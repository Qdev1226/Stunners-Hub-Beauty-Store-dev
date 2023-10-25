import { React, useContext, createContext, useState, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { TotalCartPrice, TotalProductDiscount } from "../../utils";
import { useAuth } from "contexts/AuthProvider/AuthProvider";
const cartContext = createContext();

function CartProvider({ children }) {
  const initialState = {
    cartProductList: [],
    address: {},
  };
  const { setIsLoggedIn } = useAuth();
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const totalPrice = TotalCartPrice(cartState.cartProductList);
  const totalDiscount = TotalProductDiscount(
    cartState.cartProductList,
    totalPrice
  ).toFixed(2);
  const totalAmount = (totalPrice - totalDiscount).toFixed(2);
  const totalSave = (totalPrice - totalAmount).toFixed(2);

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    dispatch({
      type: "RESET_CART",
    });
  };

  return (
    <cartContext.Provider
      value={{
        cartState,
        dispatch,
        totalPrice,
        totalDiscount,
        totalAmount,
        totalSave,
        logOut,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
