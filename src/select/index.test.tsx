import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from './index';

describe('Select', () => {
  test('renders Select', () => {
    render(<Select>click me</Select>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Select', () => {
    const { container } = render(<Select>click me</Select>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Select', () => {
    const { container } = render(<Select size="small">click me</Select>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Select type="primary" onClick={onClick}>click me</Select>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

