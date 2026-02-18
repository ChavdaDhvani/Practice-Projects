
import { currencyFormatter } from '../util/formatting';
import Button from '../UI/Button';
import { useContext } from "react";
import CartContext from '../context/CartContext';

export default function Meals({ foodcart }) {

  const cartCtx = useContext(CartContext);
  
  return (
    <>
      <ul id="meals"> {foodcart.map((meal) => (
        <div className='meal-item' key={meal.id}>
          <article>
            <img src={meal.image} alt={meal.name} />
            <div>
              <h3>{meal.name}</h3>
              <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
              <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className="meal-item-actions">

              <Button onClick={() => cartCtx.addItem(meal)}>
                Add to Cart
              </Button>
              
            </p>
          </article>
        </div>
      ))}
      </ul>
    </>
  )
}