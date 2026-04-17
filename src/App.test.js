import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getAllByText(/Counter/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Todo/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Products/i).length).toBeGreaterThan(0);
});
