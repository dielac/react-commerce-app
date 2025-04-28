// src/tests/ProductCard.test.tsx
import { describe, it, expect, vi } from 'vitest';


import { render, screen, fireEvent } from '@testing-library/react';


import ProductCard from '../components/ProductCard';

describe('ProductCard Component', () => {
  const mockAddToCart = vi.fn();

  it('renders the product name and price', () => {
    render(
      <ProductCard name="Test Product" price={25} onAddToCart={mockAddToCart} />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$25.00')).toBeInTheDocument();
  });

  it('calls onAddToCart when button is clicked', () => {
    render(
      <ProductCard name="Test Product" price={25} onAddToCart={mockAddToCart} />
    );

    const buttons = screen.getAllByText(/add to cart/i);
    fireEvent.click(buttons[0]);
    

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
