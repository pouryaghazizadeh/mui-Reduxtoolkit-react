import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "../features/productSlice";

export const store = configureStore({
  reducer: { products: productReducer },
});

store.dispatch(productsFetch());


