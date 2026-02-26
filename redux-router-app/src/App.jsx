import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductsPage";
import ProductDetailPage from './pages/ProductDetailPage'
import NewProductPage from "./pages/NewProductPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
    
      {index: true, element: <HomePage />},

      {path: 'products',
        children: [
          {index: true, element: <ProductPage />},
          {path: ':id', element: <ProductDetailPage /> },
          { path: "new", element: <NewProductPage /> },
        ]
      }
    ]
  }
])

function App() {

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
