export const addFilters = (state, { type, payload }) => {
  switch (type) {
    case "CALL_API":
      return { ...state, productList: payload };
    case "SET_CATEGORY":
      return { ...state, categoryData: payload };
    case "SORT": {
      if (payload === "PRICE_HIGH_TO_LOW") {
        return { ...state, sortBy: "PRICE_HIGH_TO_LOW" };
      }
      if (payload === "PRICE_LOW_TO_HIGH") {
        return { ...state, sortBy: "PRICE_LOW_TO_HIGH" };
      }
      return { ...state, sortBy: "" };
    }
    case "FILTER_BY_RATE": {
      if (payload === "1STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "2STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "3STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
      if (payload === "4STAR_AND_ABOVE") {
        return {
          ...state,
          filterBy: payload,
        };
      }
    }

    case "FILTER_BY_CATEGORY": {
      return state.FilterData.filterByCategories.includes(payload)
        ? {
            ...state,
            FilterData: {
              ...state.FilterData,
              filterByCategories: state.FilterData.filterByCategories.filter(
                (item) => item !== payload
              ),
            },
          }
        : {
            ...state,
            FilterData: {
              ...state.FilterData,
              filterByCategories:
                state.FilterData.filterByCategories.concat(payload),
            },
          };
    }

    case "FILTER_BY_PRICE": {
      return {
        ...state,
        getByPrice: payload,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        sortBy: "",
        filterBy: "",
        getByPrice: "1000",
        FilterData: {
          filterByCategories: [],
          filterByBrands: [],
        },
      };
    }

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishListData: [...state.wishListData, payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishListData: state.wishListData.filter(
          (product) => product._id !== payload
        ),
      };

    default:
      return { ...state };
  }
};
