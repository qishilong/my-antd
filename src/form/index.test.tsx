import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  test('renders Form', () => {
    render(<Form>click me</Form>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Form', () => {
    const { container } = render(<Form>click me</Form>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Form', () => {
    const { container } = render(<Form size="small">click me</Form>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Form type="primary" onClick={onClick}>click me</Form>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

