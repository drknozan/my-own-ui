import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));

    expect(onClickMock).toHaveBeenCalled();
  });

  test('applies primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      background-color: #007bff;
      color: #fff;
    `);
  });

  test('applies secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      background-color: #6c757d;
      color: #fff;
    `);
  });

  test('applies outlined variant', () => {
    render(<Button variant="outlined">Outlined Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      background-color: transparent;
      color: #007bff;
      border: 1px solid #007bff;
      padding: 8px 16px;
    `);
  });

  test('applies success variant', () => {
    render(<Button variant="success">Success Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
    background-color: #00a854;
    color: #fff;
    `);
  });

  test('applies warning variant', () => {
    render(<Button variant="warning">Warning Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
    background-color: #ffd700;
    color: #fff;
    `);
  });

  test('applies error variant', () => {
    render(<Button variant="error">Error Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
    background-color: #ff3860;
    color: #fff;
    `);
  });

  test('applies small size', () => {
    render(<Button size="small">Small Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      font-size: 12px;
      padding: 8px 16px;
    `);
  });

  test('applies medium size', () => {
    render(<Button size="medium">Medium Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      font-size: 14px;
      padding: 12px 24px;
    `);
  });

  test('applies large size', () => {
    render(<Button size="large">Large Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      font-size: 16px;
      padding: 16px 32px;
    `);
  });

  test('applies small size by default', () => {
    render(<Button>Default Button</Button>);

    expect(screen.getByRole('button')).toHaveStyle(`
      font-size: 12px;
      padding: 8px 16px;
    `);
  });
});
