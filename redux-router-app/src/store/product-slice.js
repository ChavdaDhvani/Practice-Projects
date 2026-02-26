import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], currentProduct: null, loading: false, error: null },
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setProducts(state, action) {
      state.items = action.payload;
    },
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    addCurrentProduct(state, action) {
      state.currentProduct = action.payload;
    },
    deleteProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
