//Import the testing tools from Vitest
import { describe, it, expect } from 'vitest';

//Render things and check what’s on the screen
import { render, screen } from '@testing-library/react';

//wrap Navbar in <BrowserRouter> so Link components don’t break
import { BrowserRouter } from 'react-router-dom';

//Navbar component we’re testing
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders the store title', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // title for store
    const titleElement = screen.getByText(/the little pink store/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('has Home and Cart links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    //link to "Home"
    expect(screen.getByText(/home/i)).toBeInTheDocument();

    //link to "Cart"
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });
});
