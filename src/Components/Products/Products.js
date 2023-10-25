import React from "react";
import { Filter, ProductsList } from "Components";
import "./products.css";
import { setDocumentTitle, scrollToTop } from "hooks";
import { ToastContainer } from "react-toastify";

export default function Products() {
  setDocumentTitle("Stunners Hub | Products");
  scrollToTop();
  return (
    <div className="product-page">
      <ToastContainer />
      <Filter />
      <ProductsList />
    </div>
  );
}
