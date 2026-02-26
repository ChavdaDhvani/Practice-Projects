import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../store/product-action';

export default function NewProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const {error, loading } = useSelector((state) => state.products);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const productData = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
    };

    const success = await dispatch(addProduct(productData));

    if (success) {
      navigate("/products");
    }
  }

  return (
    <>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    
      <form onSubmit={handleSubmit}>
        <div>
          <input name="title" placeholder="Title" required />
        </div>

        <div>
          <input name="price" type="number" placeholder="Price" required />
        </div>

        <button disabled={loading}>{loading ? "Adding..." : "Add Product"}</button>
      </form>

      <Link to="/products">
        <button type="button">Cancel</button>
      </Link>
    </>
  );
}
