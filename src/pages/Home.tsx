import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './Home.css'; 

const Home = () => {
  const { addToCart } = useCart();

  const products = [
    { name: 'Purse', price: 49.99 },
    { name: 'Sunglasses', price: 19.99 },
    { name: 'Nail Polish', price: 9.99 },
    { name: 'Phone Case', price: 29.99 },
  ];

  return (
    <div className="home-container">
      <h1>Welcome! </h1>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
