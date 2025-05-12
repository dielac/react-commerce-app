// Cart component that shows all the stuff added
import Cart from '../components/Cart.tsx';

// This page just shows the Cart by itself
const CartPage = () => {
  return (
    <div>
      {/* Render the actual cart inside this page */}
      <Cart />
    </div>
  );
};


export default CartPage;
