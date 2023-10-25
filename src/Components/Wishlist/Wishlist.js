import React from "react";
import { useProduct, useCart } from "contexts";
import { addProductToCart, removeProductFromWishlist } from "utils";
import { useNavigate } from "react-router-dom";
import "./wishlist.css";
import { setDocumentTitle, scrollToTop } from "hooks";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";

export function Wishlist() {
  setDocumentTitle("Stunners Hub | Wishlist");
  scrollToTop();
  const { state, productDispatch } = useProduct();
  const { cartState, dispatch } = useCart();
  const wishList = state.wishListData;
  const navigate = useNavigate();
  function ProductInWishlist(productId) {
    return state.wishListData.some((product) => product._id === productId);
  }
  function ProductInCart(productId) {
    return cartState.cartProductList.some(
      (product) => product._id === productId
    );
  }

  return (
    <div className="wishlist">
      <ToastContainer />
      <div className="wishlist-cards-list">
        {wishList.length > 0 ? (
          wishList.map((val) => (
            <div className="card product-card" key={val._id}>
              <div className="card-padding">
                <img className="product-img" src={val.image} alt="" />
                <div className="product-card-title">{val.name}</div>
                <div className="card-mrp">
                  <span className="gray-color">MRP:</span> ₹{val.price}
                  <span className="product-discount">{val.discount}% off</span>
                </div>
                <Rate rate={val.rate} />
              </div>
              <div className="product-card-footer pink-color">
                <i
                  className={`card-footer-icon ${
                    ProductInWishlist(val._id)
                      ? "fas fa-heart"
                      : "fa-regular fa-heart"
                  }`}
                  onClick={() =>
                    ProductInWishlist(val._id)
                      ? removeProductFromWishlist(val._id, productDispatch)
                      : addProductToWishlist(val, productDispatch)
                  }
                ></i>
                <button
                  className="btn card-btn"
                  onClick={() => {
                    ProductInCart(val._id)
                      ? navigate("/cart")
                      : addProductToCart(val, dispatch, cartState);
                  }}
                >
                  {ProductInCart(val._id) ? "Go To Cart" : "Add to cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3 className="empty-wishlist">Your wishlist is empty.</h3>
        )}
      </div>
    </div>
  );
}

const Rate = ({ rate }) => {
  return (
    <div className="rating small-fontsize">
      {[...Array(rate)].map(() => {
        return <i className="fas fa-star" key={nanoid()}></i>;
      })}
      {[...Array(5 - rate)].map(() => {
        return <i className="far fa-star" key={nanoid()}></i>;
      })}
    </div>
  );
};
