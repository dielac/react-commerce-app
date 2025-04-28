// src/tests/Navbar.test.tsx
import { describe, it, expect } from 'vitest';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('renders the store title', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(/the little pink store/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('has Home and Cart links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });
});
