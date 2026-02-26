import { productActions } from './product-slice';

const BASE_URL = 'http://localhost:3000/products';

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(productActions.setLoading(true));
    dispatch(productActions.setError(null));

    try {
      const res = await fetch(BASE_URL);

      if (!res.ok) {
        throw new Error(`Failed to fetch products. Status: ${res.status}`);
      }

      const data = await res.json();
      dispatch(productActions.setProducts(data));

    } catch (error) {
      dispatch(productActions.setError(error.message));

    } finally {
      dispatch(productActions.setLoading(false));
    }
  };
}

export function fetchProduct(id) {
  return async (dispatch) => {
    dispatch(productActions.setLoading(true));
    dispatch(productActions.setError(null));

    try {
      const res = await fetch(`${BASE_URL}/${id}`);

      if (!res.ok) {
        throw new Error(`Product not found. Status: ${res.status}`);
      }

      const data = await res.json();
      dispatch(productActions.addCurrentProduct(data));

    } catch (error) {
      dispatch(productActions.setError(error.message));

    } finally {
      dispatch(productActions.setLoading(false));
    }
  };
}

export function addProduct(productData) {
  return async (dispatch) => {
    dispatch(productActions.setLoading(true));
    dispatch(productActions.setError(null));

    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(productData),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Failed to add product. Status: ${res.status}`);
      }

      const data = await res.json();
      dispatch(productActions.addProduct(data));

      return true;

    } catch (error) {
      dispatch(productActions.setError(error.message));

      return false;

    } finally {
      dispatch(productActions.setLoading(false));
    }
  };
}

export function removeProduct(productId) {
  return async (dispatch) => {
    dispatch(productActions.setLoading(true));
    dispatch(productActions.setError(null));

    try {
      const res = await fetch(`${BASE_URL}/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Failed to delete product. Status: ${res.status}`);
      }

      dispatch(productActions.deleteProduct(productId));

    } catch (error) {
      dispatch(productActions.setError(error.message));

    } finally {
      dispatch(productActions.setLoading(false));
    }
  };
}