import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dynamic form with Watchable fields/i);
  expect(linkElement).toBeInTheDocument();
});
