// Home.test.js
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Welcome message', () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome to Our School/i);
  expect(heading).toBeInTheDocument();
});
