import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Avatar from './index';

describe('Avatar', () => {
  test('renders Avatar', () => {
    render(<Avatar>click me</Avatar>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Avatar', () => {
    const { container } = render(<Avatar>click me</Avatar>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Avatar', () => {
    const { container } = render(<Avatar size="small">click me</Avatar>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Avatar type="primary" onClick={onClick}>click me</Avatar>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

