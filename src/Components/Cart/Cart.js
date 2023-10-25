import React from "react";
import { useCart } from "contexts";
import "./cart.css";
import { RemoveProductFromCart, handleQuantity } from "utils";
import { useProduct } from "contexts";
import { useNavigate } from "react-router-dom";
import { addProductToWishlist } from "utils";
import { Address } from "Components";
import { setDocumentTitle, scrollToTop } from "hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Cart() {
  setDocumentTitle("Stunners Hub | Cart");
  scrollToTop();
  const {
    cartState,
    dispatch,
    totalPrice,
    totalDiscount,
    totalAmount,
    totalSave,
  } = useCart();
  const { state, productDispatch } = useProduct();
  let navigate = useNavigate();
  function ProductInWishlist(productId) {
    return state.wishListData.some((product) => product._id === productId);
  }
  return (
    <div className="cart-page">
      <ToastContainer />
      {cartState.cartProductList.length > 0 ? (
        <div>
          <div className="cart-page-title semibold-font-weight">My Cart</div>
          <Address />
          <div className="cart-page-item">
            <div>
              {cartState.cartProductList.map((product) => (
                <div className="cart-product-card" key={product._id}>
                  <div className="cart-product-img">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="cart-image"
                    />
                  </div>
                  <div className="cart-product-details">
                    <div className="cart-product-name bold-font-weight">
                      {product.name}
                    </div>
                    <div className="cart-product-price bold-font-weight">
                      ₹{product.price}
                      <span className="cart-product-off">
                        {product.discount}% off
                      </span>
                    </div>
                    <div className="product-quantity flex">
                      <div className="product-quantity-label">Quantity :</div>
                      <button
                        className="cart-product-btn"
                        onClick={() =>
                          handleQuantity(product, "decrement", dispatch)
                        }
                      >
                        -
                      </button>
                      <div className="cart-product-number">
                        {product.quantity}
                      </div>
                      <button
                        className="cart-product-btn"
                        onClick={() =>
                          handleQuantity(product, "increment", dispatch)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="btn cart-remove-btn"
                      onClick={() =>
                        RemoveProductFromCart(product._id, dispatch)
                      }
                    >
                      Remove from cart
                    </button>
                    <button
                      className="btn cart-wishlist-btn"
                      onClick={() => {
                        ProductInWishlist(product._id)
                          ? navigate("/wishlist")
                          : addProductToWishlist(product, productDispatch);
                      }}
                    >
                      {ProductInWishlist(product._id)
                        ? "Go to wishlist"
                        : "Add to wishlist"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-details-card">
              <div className="price-details-title bold-font-weight">
                PRICE DETAILS
              </div>
              <hr />
              <div className="price-details-first-section">
                <div className="flex-row">
                  <div>Price({cartState.cartProductList.length})</div>
                  <div>₹{totalPrice}</div>
                </div>
                <div className="flex-row">
                  <div>Discount</div>
                  <div>- ₹{totalDiscount}</div>
                </div>
                <div className="flex-row">
                  <div>Delivery charges</div>
                  <div>₹0</div>
                </div>
              </div>
              <hr />
              <div className="flex-row">
                <div className="bold-font-weight">Total Amount</div>
                <div className="bold-font-weight">₹{totalAmount}</div>
              </div>
              <hr />
              <div>You will be save ₹{totalSave} in this order.</div>
              <button className="btn place-order">Place order</button>
            </div>
          </div>{" "}
        </div>
      ) : (
        <h3>Your cart is empty.</h3>
      )}
    </div>
  );
}
