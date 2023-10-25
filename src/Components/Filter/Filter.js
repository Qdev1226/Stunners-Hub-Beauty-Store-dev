import React from "react";
import { useProduct } from "contexts";

export function Filter() {
  const { state, productDispatch } = useProduct();
  const categoriesList = state.categoryData;

  return (
    <div className="filter">
      <div className="filter-heading">
        <div className="semibold-font-weight">FILTERS</div>
        <button
          className="clear-all-btn bold-font-weight"
          onClick={() => {
            productDispatch({
              type: "CLEAR",
            });
          }}
        >
          CLEAR
        </button>
      </div>
      <div className="price-section">
        <div className="price semibold-font-weight price-title">Price</div>
        <div className="range">
          <span>100</span>
          <span>500</span>
          <span>1000</span>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          value={Number(state.getByPrice)}
          onChange={(e) => {
            productDispatch({
              type: "FILTER_BY_PRICE",
              payload: e.target.value,
            });
          }}
          className="slider"
        />
      </div>
      <div className="filter-category">
        <div className="semibold-font-weight category-title">Category</div>
        {categoriesList.map((category) => {
          return (
            <div className="inline-category-item" key={category._id}>
              <label>
                <input
                  type="checkbox"
                  checked={state.FilterData.filterByCategories.includes(
                    category.categoryName
                  )}
                  className="filter-input"
                  onChange={() =>
                    productDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: category.categoryName,
                    })
                  }
                />{" "}
                {category.categoryName}
              </label>
            </div>
          );
        })}
      </div>

      <div className="rating-section">
        <div className="rating-title semibold-font-weight">Rating</div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              name="radio"
              className="filter-input"
              checked={state.filterBy === "4STAR_AND_ABOVE"}
              value="4STAR_AND_ABOVE"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_RATE",
                  payload: e.target.value,
                });
              }}
            />{" "}
            4 star & above
          </label>
        </div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              name="radio"
              className="filter-input"
              value="3STAR_AND_ABOVE"
              checked={state.filterBy === "3STAR_AND_ABOVE"}
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_RATE",
                  payload: e.target.value,
                });
              }}
            />{" "}
            3 star & above
          </label>
        </div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              name="radio"
              className="filter-input"
              value="2STAR_AND_ABOVE"
              checked={state.filterBy === "2STAR_AND_ABOVE"}
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_RATE",
                  payload: e.target.value,
                });
              }}
            />{" "}
            2 star & above
          </label>
        </div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              name="radio"
              className="filter-input"
              value="1STAR_AND_ABOVE"
              checked={state.filterBy === "1STAR_AND_ABOVE"}
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_RATE",
                  payload: e.target.value,
                });
              }}
            />{" "}
            1 star & above
          </label>
        </div>
      </div>

      <div className="sort-by">
        <div className="sort-by-title semibold-font-weight">Sort by</div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              className="filter-input"
              value="PRICE_HIGH_TO_LOW"
              name="sort"
              checked={state.sortBy === "PRICE_HIGH_TO_LOW"}
              onChange={(e) =>
                productDispatch({
                  type: "SORT",
                  payload: e.target.value,
                })
              }
            />{" "}
            Price - High to Low
          </label>
        </div>
        <div className="inline-category-item">
          <label>
            <input
              type="radio"
              className="filter-input"
              value="PRICE_LOW_TO_HIGH"
              name="sort"
              checked={state.sortBy === "PRICE_LOW_TO_HIGH"}
              onChange={(e) =>
                productDispatch({
                  type: "SORT",
                  payload: e.target.value,
                })
              }
            />{" "}
            Price - Low to High
          </label>
        </div>
      </div>
    </div>
  );
}
