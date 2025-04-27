import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart 🛍️</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is feeling lonely...  Add something cute!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
