// gets the contents so we can add stuff to the cart 
import { useCart } from '../context/CartContext';
//our cute reusable product card component
import ProductCard from '../components/ProductCard';
//styling for the homepage
import './Home.css'; 

const Home = () => {
  const { addToCart } = useCart(); //get the add-to-cart function from our context

  // add more later? below is the list of items selling
  const products = [
    { name: 'Purse', price: 49.99 },
    { name: 'Sunglasses', price: 19.99 },
    { name: 'Nail Polish', price: 9.99 },
    { name: 'Phone Case', price: 29.99 },
  ];

  return (
    <div className="home-container">
      {/*Big welcome header at the top */}
      <h1>Welcome! </h1>

      {/* all the products lined up in a grid */}
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index} //gives each card a key
            name={product.name}
            price={product.price}
            onAddToCart={() => addToCart(product)} // when button is clicked itadds to cart
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
