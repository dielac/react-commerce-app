// src/tests/CartIntegration.test.tsx

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // 🛠 Add this
import '@testing-library/jest-dom'; // 🛠 Add this
import { CartProvider } from '../context/CartContext';
import Cart from '../components/Cart';

describe('Cart Integration Test', () => {
  it('shows empty cart message initially', () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(screen.getByText(/feeling lonely/i)).toBeInTheDocument();
  });
});
