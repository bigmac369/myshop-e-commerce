import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  modifiedProducts: [],
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.products = action.payload;
    },
    getModifiedProducts: (state, action) => {
      state.modifiedProducts = action.payload;
    },
    selectedProduct: (state, action) => {
      state.selectedProduct = { ...action.payload };
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = {};
    },
  },
});

export const {
  fetchProduct,
  getModifiedProducts,
  selectedProduct,
  removeSelectedProduct,
} = productSlice.actions;

export const selectFetchedData = (state) => state.product.products;

export default productSlice.reducer;
