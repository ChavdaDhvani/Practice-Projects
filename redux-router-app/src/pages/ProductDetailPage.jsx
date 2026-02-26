import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct, removeProduct } from '../store/product-action';

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {currentProduct, loading, error} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (confirmed) {
      await dispatch(removeProduct(id));
      navigate("/products");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currentProduct) return <p>Product not found.</p>;

  return (
    <div>
      <h2>{currentProduct.title}</h2>
      <p>Price: ₹{currentProduct.price}</p>

      <Link to="/products" className='btn'>
        Back
      </Link>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
