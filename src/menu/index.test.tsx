import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './index';

describe('Menu', () => {
  test('renders Menu', () => {
    render(<Menu>click me</Menu>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Menu', () => {
    const { container } = render(<Menu>click me</Menu>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Menu', () => {
    const { container } = render(<Menu size="small">click me</Menu>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Menu type="primary" onClick={onClick}>click me</Menu>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

