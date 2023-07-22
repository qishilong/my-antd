import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Affix from './index';

describe('Affix', () => {
  test('renders Affix', () => {
    render(<Affix>click me</Affix>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
  
/**
  test('renders normal Affix', () => {
    const { container } = render(<Affix>click me</Affix>);
  
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });

  test('renders small Affix', () => {
    const { container } = render(<Affix size="small">click me</Affix>);
  
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Affix type="primary" onClick={onClick}>click me</Affix>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
});

