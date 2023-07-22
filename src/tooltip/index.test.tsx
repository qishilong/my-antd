import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './index';

describe('Tooltip', () => {
  // test('renders Tooltip', () => {
  //   render(<Tooltip>click me</Tooltip>);
  //   const linkElement = screen.getByText(/click me/i);
  //   expect(linkElement).toBeInTheDocument();
  // });
  
/**
  test('renders normal Tooltip', () => {
    const { container } = render(<Tooltip>click me</Tooltip>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Tooltip', () => {
    const { container } = render(<Tooltip size="small">click me</Tooltip>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Tooltip type="primary" onClick={onClick}>click me</Tooltip>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

