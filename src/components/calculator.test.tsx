import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './calculator';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom'; // Jest DOM のカスタムマッチャーをインポート

const user = userEvent.setup();

test('Calculatorコンポーネントがレンダリングされること', () => {
  render(<Calculator />);
  const inputElement = screen.getByLabelText('input');
  const buttonElement = screen.getByRole('button', { name: '.' });
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('加算が正しく行われること', async () => {
  render(<Calculator />);
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const inputButton2 = screen.getByRole('button', { name: '2' });
  const addButton = screen.getByRole('button', { name: '+' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton2);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('3');
});

test('減算が正しく行われること', async () => {
  render(<Calculator />);
  const inputButton3 = screen.getByRole('button', { name: '3' });
  const inputButton2 = screen.getByRole('button', { name: '2' });
  const subtractButton = screen.getByRole('button', { name: '-' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton3);
  await user.click(subtractButton);
  await user.click(inputButton2);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('1');
});

test('乗算が正しく行われること', async () => {
  render(<Calculator />);
  const inputButton4 = screen.getByRole('button', { name: '4' });
  const inputButton2 = screen.getByRole('button', { name: '2' });
  const multiplyButton = screen.getByRole('button', { name: '*' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton4);
  await user.click(multiplyButton);
  await user.click(inputButton2);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('8');
});

test('除算が正しく行われること', async () => {
  render(<Calculator />);
  const inputButton6 = screen.getByRole('button', { name: '6' });
  const inputButton2 = screen.getByRole('button', { name: '2' });
  const divideButton = screen.getByRole('button', { name: '/' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton6);
  await user.click(divideButton);
  await user.click(inputButton2);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('3');
});

test('複数桁の入力が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const inputButton2 = screen.getByRole('button', { name: '2' });
  const inputButton3 = screen.getByRole('button', { name: '3' });
  await user.click(inputButton1);
  await user.click(inputButton2);
  await user.click(inputButton3);
  expect(screen.getByLabelText('input')).toHaveTextContent('123');
});

test('小数点の入力が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton = screen.getByRole('button', { name: '.' });
  await user.click(inputButton);
  expect(screen.getByLabelText('input')).toHaveTextContent('0.');
});

test('連続した計算が正しく行われること', async () => {
  render(<Calculator />);
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const addButton = screen.getByRole('button', { name: '+' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton1);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('3');
});

test('ゼロでの除算が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton = screen.getByRole('button', { name: '0' });
  const divideButton = screen.getByRole('button', { name: '/' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton);
  await user.click(divideButton);
  await user.click(inputButton);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('Error');
});


test('クリアボタンが正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const addButton = screen.getByRole('button', { name: '+' });
  const clearButton = screen.getByRole('button', { name: 'clear' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton1);
  await user.click(clearButton);
  await user.click(inputButton1);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('1');
});

test('小数点の連続入力が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton = screen.getByRole('button', { name: '.' });
  await user.click(inputButton);
  await user.click(inputButton);
  expect(screen.getByLabelText('input')).toHaveTextContent('0..');
});

test('計算結果が正しくクリアされること', async () => {
  render(<Calculator />);
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const addButton = screen.getByRole('button', { name: '+' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton1);
  await user.click(equalsButton);
  const clearButton = screen.getByRole('button', { name: 'clear' });
  await user.click(clearButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('');
});

test('ゼロでの乗算が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButton = screen.getByRole('button', { name: '0' });
  const multiplyButton = screen.getByRole('button', { name: '*' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButton);
  await user.click(multiplyButton);
  await user.click(inputButton);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('0');
});

test('負の数の加算が正しく処理されること', async () => {
  render(<Calculator />);
  const inputButtonMinus = screen.getByRole('button', { name: '-' });
  const inputButton1 = screen.getByRole('button', { name: '1' });
  const addButton = screen.getByRole('button', { name: '+' });
  const equalsButton = screen.getByRole('button', { name: '=' });
  await user.click(inputButtonMinus);
  await user.click(inputButton1);
  await user.click(addButton);
  await user.click(inputButton1);
  await user.click(equalsButton);
  expect(screen.getByLabelText('result')).toHaveTextContent('0');
});
