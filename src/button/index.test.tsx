import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  test('renders Button', () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('renders normal Button', () => {
    const { container } = render(<Button>click me</Button>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });
  
  test('renders primary Button', () => {
    const { container } = render(<Button type="primary">click me</Button>);
  
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
  });

  test('renders small Button', () => {
    const { container } = render(<Button size="small">click me</Button>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Button type="primary" onClick={onClick}>click me</Button>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });

  test('should support blur', () => {
    const onBlur = jest.fn();
    render(<Button type="primary" onBlur={onBlur}>click me</Button>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    fireEvent.blur(linkElement);

    expect(onBlur).toBeCalled();
  });
  test('should support focus', () => {
    const onFocus = jest.fn();
    render(<Button type="primary" onFocus={onFocus}>click me</Button>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.focus(linkElement);

    expect(onFocus).toBeCalled();
  });
});

