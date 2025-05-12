//React Router lets us switch between pages (Home / Cart)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Our pretty pink top navigation bar
import Navbar from './components/Navbar';

//Home page where products are displayed
import Home from './pages/Home';

//Page that shows what's in the shopping cart
import CartPage from './pages/CartPage';

//This gives the whole app access to the cart (context magic!)
import { CartProvider } from './context/CartContext';

//Basic global styles
import './App.css';

function App() {
  return (
    // Wrapping the whole app in CartProvider so every page can access the cart
    <CartProvider>
      <Router>
        <div className="app-container">
          {/* The pink navbar at the top */}
          <Navbar />

          {/*These are the app's main routes (pages) */}
          <Routes>
            {/*Home route: shows the cute product cards */}
            <Route path="/" element={<Home />} />

            {/*Cart route: shows what user added to cart */}
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
