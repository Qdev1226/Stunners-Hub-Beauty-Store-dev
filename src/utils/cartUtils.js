import axios from "axios";
import { toast } from "react-toastify";

export const addProductToCart = async (product, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  } catch (e) {
    const notify = () => toast(e.message);
    notify();
  }
};

export const RemoveProductFromCart = async (productId, dispatch) => {
  try {
    const response = await axios.delete(`api/user/cart/${productId}`, {
      headers: { authorization: localStorage.getItem("token") },
    });
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  } catch (e) {
    const notify = () => toast(e.message);
    notify();
  }
};

export const handleQuantity = async (product, getType, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${product._id}`,
      {
        action: {
          type: getType,
        },
      },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );
    if (product.quantity === 1 && getType === "decrement") {
      RemoveProductFromCart(product._id, dispatch);
    }

    dispatch({
      type:
        getType === "increment" ? "INCREMENT_QUANTITY" : "DECREMENT_QUANTITY",
      payload: product,
    });
    const res = await axios.get("/api/user/cart", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
  } catch (e) {
    const notify = () => toast(e.message);
    notify();
  }
};

export const TotalCartPrice = (cartProductList) => {
  return cartProductList.reduce(
    (totalPrice, product) =>
      totalPrice + Number(product.price) * product.quantity,
    0
  );
};

export const TotalProductDiscount = (cartProductList, totalPrice) => {
  return cartProductList.length > 0
    ? cartProductList.reduce(
        (total, product) =>
          total +
          Number(product.price) *
            (Number(product.discount) / 100) *
            Number(product.quantity),
        0
      )
    : 0;
};
