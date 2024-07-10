import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './calculator';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom'; // Jest DOM のカスタムマッチャーをインポート

test('handles input correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('1 button');
  fireEvent.click(inputButton);
  expect(screen.getAllByText('1')).toBeInTheDocument();
});

test('performs addition correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('1 button');
  const addButton = screen.getByLabelText('+ button');
  fireEvent.click(inputButton);
  fireEvent.click(addButton);
  fireEvent.click(inputButton);
  fireEvent.click(addButton);
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('performs subtraction correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('1 button');
  const subtractButton = screen.getByLabelText('- button');
  fireEvent.click(inputButton);
  fireEvent.click(subtractButton);
  fireEvent.click(inputButton);
  fireEvent.click(subtractButton);
  expect(screen.getByText('0')).toBeInTheDocument();
});

test('performs multiplication correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('2 button');
  const multiplyButton = screen.getByLabelText('* button');
  fireEvent.click(inputButton);
  fireEvent.click(multiplyButton);
  fireEvent.click(inputButton);
  fireEvent.click(multiplyButton);
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('performs division correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('8 button');
  const divideButton = screen.getByLabelText('/ button');
  fireEvent.click(inputButton);
  fireEvent.click(divideButton);
  fireEvent.click(inputButton);
  fireEvent.click(divideButton);
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('performs calculation correctly', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('1 button');
  const addButton = screen.getByLabelText('+ button');
  const equalsButton = screen.getByLabelText('= button');
  fireEvent.click(inputButton);
  fireEvent.click(addButton);
  fireEvent.click(inputButton);
  fireEvent.click(equalsButton);
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('clears input and result', () => {
  render(<Calculator />);
  const inputButton = screen.getByLabelText('1 button');
  const clearButton = screen.getByLabelText('clear button');
  fireEvent.click(inputButton);
  fireEvent.click(clearButton);
  expect(screen.getByText('0')).toBeInTheDocument();
});