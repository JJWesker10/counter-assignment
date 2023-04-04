// import necessary react testing library helpers here
import * as React from 'react';

// import the Counter component here
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Components/Counter.js';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
    const messageElement = screen.getByText(/Counter/);
    expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1')
});
