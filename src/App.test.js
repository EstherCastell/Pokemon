import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar/Navbar';

test('renders learn react link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
