import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../store/product-action';

export default function ProductPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const { loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

   if (loading) return <p>Loading products...</p>;
   if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <Link className='btn' to="new">
        Add new Products
      </Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={product.id.toString()}>
              {product.title} - ₹{product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
