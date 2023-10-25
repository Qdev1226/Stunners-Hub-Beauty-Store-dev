import { React, useEffect, useState } from "react";
import { Footer } from "Components";
import { topbrandslist } from "backend/db/topbrands";
import firstcollection from "assets/Images/collection1.jfif";
import secondcollection from "assets/Images/collection2.jfif";
import { Link } from "react-router-dom";
import "./homepage.css";
import { setDocumentTitle, scrollToTop } from "hooks";
import { nanoid } from "nanoid";
import { useProduct } from "contexts";
import { useNavigate } from "react-router-dom";

export function Homepage() {
  setDocumentTitle("Stunners Hub | Home");
  scrollToTop();
  const { state, productDispatch } = useProduct();
  const navigate = useNavigate();

  const [categorylist, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/categories");
      const jsonData = await data.json();
      setCategoryList(jsonData.categories);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="banner">
        <Link to="/products">
          <button className="btn image-btn">Shop Now</button>
        </Link>
      </div>

      <div className="categories">
        <div className="categories-title">Top Categories</div>
        <div className="category-list">
          {categorylist.map((val) => (
            <div
              className="category-list-item"
              key={val._id}
              onClick={() => {
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: val.categoryName,
                });
                state.FilterData.filterByCategories.includes(val.categoryName);
                navigate("/products");
              }}
            >
              <div className="category-list-item-name">{val.categoryName}</div>
              <img
                className="category-list-item-image"
                src={val.image}
                alt="category-items"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="onlyat-section">
        <div className="onlyat-section-title">Only At Stunners Hub</div>
        <div className="onlyat-list">
          <img
            className="onlyat-item"
            src={firstcollection}
            alt="collection-items"
            onClick={() => navigate("/products")}
          />
          <img
            className="onlyat-item"
            src={secondcollection}
            alt="collection-items"
            onClick={() => navigate("/products")}
          />
        </div>
      </div>

      <div className="top-brands">
        <div className="top-brands-title">Top Brands</div>
        <div className="top-brands-list">
          {topbrandslist.map((val) => (
            <img
              key={nanoid()}
              className="top-brands-item"
              src={val}
              alt="top-brands"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
