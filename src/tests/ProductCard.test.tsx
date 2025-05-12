import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import ProductCard from '../components/ProductCard';

describe('ProductCard Component', () => {
  //  Fake function that we'll check to see if it gets called when user clicks "Add to Cart"
  const mockAddToCart = vi.fn();

  // Test #1: Make sure product name and price actually show up
  it('renders the product name and price', () => {
    render(
      <ProductCard name="Test Product" price={25} onAddToCart={mockAddToCart} />
    );

    // Should show the name somewhere on the page
    expect(screen.getByText('Test Product')).toBeInTheDocument();

    // Price should be shown too, with two decimals like a real shop
    expect(screen.getByText('$25.00')).toBeInTheDocument();
  });

  // Test #2: When user clicks the button, the addToCart function should be triggered
  it('calls onAddToCart when button is clicked', () => {
    render(
      <ProductCard name="Test Product" price={25} onAddToCart={mockAddToCart} />
    );

    // Grab any button that says "Add to Cart" — in case there’s more than one (there shouldn’t be here)
    const buttons = screen.getAllByText(/add to cart/i);

    // Pretend the user clicked the first one (the only one here)
    fireEvent.click(buttons[0]);

    // Check that the click worked and called the function one time
    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
});
