import Meals from './components/Meals';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { CartContextProvider } from './context/CartContext';
import "./App.css";

function App() {
  
  const [foodcart, setFoodcart] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getFood() {
      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Failed to fetch meals.");
        }

        const foodData = await response.json();

        setFoodcart(foodData);

      } catch (error) {
        setError(error.message || "Something went wring!");
      }

      setIsFetching(false);
    }

    getFood();

  }, []);

  return (
    <CartContextProvider>
      <Header />

      {isFetching && <p className="center">Fetching meals...</p>}

      {error && <p className="error-message">{error}</p>}

      {!isFetching && !error && 
      <Meals foodcart={foodcart} />
      }

    </CartContextProvider>
  );
}

export default App;
