import {
  React,
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { addFilters } from "./addFilters";

const productContext = createContext();

function ProductProvider({ children }) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/products");
      const jsonData = await data.json();
      productDispatch({ type: "CALL_API", payload: jsonData.products });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/categories");
      const jsonData = await data.json();
      productDispatch({ type: "SET_CATEGORY", payload: jsonData.categories });
    };
    fetchData();
  }, []);

  const initialState = {
    productList: [],
    sortBy: "",
    filterBy: "",
    categoryData: [],
    wishListData: [],
    getByPrice: "1000",
    FilterData: {
      filterByCategories: [],
      filterByBrands: [],
    },
  };

  const [state, productDispatch] = useReducer(addFilters, initialState);

  return (
    <productContext.Provider value={{ state, productDispatch }}>
      {children}
    </productContext.Provider>
  );
}

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
