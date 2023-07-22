import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Progress from './index';

describe('Progress', () => {
  test('renders Progress', () => {
    render(<Progress>click me</Progress>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Progress', () => {
    const { container } = render(<Progress>click me</Progress>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Progress', () => {
    const { container } = render(<Progress size="small">click me</Progress>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Progress type="primary" onClick={onClick}>click me</Progress>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

