export const cartReducer = (cartState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...cartState,
        cartProductList: [
          ...cartState.cartProductList,
          { ...payload, quantity: 1 },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...cartState,
        cartProductList: cartState.cartProductList.filter(
          ({ _id }) => _id !== payload
        ),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...cartState,
        cartProductList: cartState.cartProductList.map((product) =>
          product._id === payload._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT_QUANTITY":
      if (payload.quantity === 1) {
        return {
          ...cartState,
          cartProductList: cartState.cartProductList.filter(
            ({ _id }) => _id !== payload._id
          ),
        };
      }
      return {
        ...cartState,
        cartProductList: cartState.cartProductList.map((product) =>
          product._id === payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    case "INITIALIZE_CART":
      return {
        ...cartState,
        cartProductList: payload,
      };

    case "RESET_CART":
      return {
        cartProductList: [],
      };
    case "SET_ADDRESS":
      return {
        ...cartState,
        address: payload,
      };
    default:
      return { ...cartState };
  }
};
