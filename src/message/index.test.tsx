import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from './index';

describe('Message', () => {
  test('renders Message', () => {
    render(<Message>click me</Message>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  /**
    test('renders normal Message', () => {
      const { container } = render(<Message>click me</Message>);
    
      expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
    });
  
    test('renders small Message', () => {
      const { container } = render(<Message size="small">click me</Message>);
    
      expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
    });
  
    test('should support click', () => {
      const onClick = jest.fn();
      render(<Message type="primary" onClick={onClick}>click me</Message>);
  
      const linkElement = screen.getByText(/click me/i);
      fireEvent.click(linkElement);
  
      expect(onClick).toBeCalled();
    });
    **/
});

