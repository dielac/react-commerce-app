// bringing in our cart context hook 
import { useCart } from '../context/CartContext';
// grabbing the CSS we made for the cart
import './Cart.css';

const Cart = () => {
  //  get the items from our cart context
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart 🛍️</h2>

      {/* if the cart is empty, shows a message */}
      {cartItems.length === 0 ? (
        <p>Your cart is feeling sad... maybe add something fun? 💖</p>
      ) : (
        <ul>
          {/* go through all the stuff in the cart and show them here */}
          {cartItems.map((item, index) => (
            <li key={index}>
              {/* show the name and price */}
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Cart;
