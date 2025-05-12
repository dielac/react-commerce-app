//used to render components and check what's on screen
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // needed for writing the test
import '@testing-library/jest-dom';

//Import our CartContext and Cart component to test how they work together
import { CartProvider } from '../context/CartContext';
import Cart from '../components/Cart';

//This test checks if the cart behaves properly when it's empty
describe('Cart Integration Test', () => {
  it('shows empty cart message initially', () => {
    // Wrap Cart in CartProvider so it has access to the cart state
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    //Expect to see the cute "empty cart" message when nothing's been added yet
    expect(screen.getByText(/feeling lonely/i)).toBeInTheDocument();
  });
});
