import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders hello world', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
