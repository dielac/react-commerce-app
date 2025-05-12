import { createContext, useContext, useState, ReactNode } from 'react';

// the product/just needs name and price
type Product = {
  name: string;
  price: number;
};

// Here's what our cart context will give to the app
type CartContextType = {
  cartItems: Product[]; 
  addToCart: (product: Product) => void; 
  removeFromCart: (index: number) => void; 
};


const CartContext = createContext<CartContextType | undefined>(undefined);

// this wraps the whole app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]); // our lovely little cart array

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  //to remove something, we filter it out by index
  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children} {/*whatever part of the app we're wrapping */}
    </CartContext.Provider>
  );
};

// how other components get access to the cart!
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    // makes sure we’re using the context inside a <CartProvider>
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
