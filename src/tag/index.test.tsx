import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './index';

describe('Tag', () => {
  test('renders Tag', () => {
    render(<Tag>click me</Tag>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });

  // test('custom className', () => {
  //   const { container } = render(<Icon type="fixed" className="custom"/>);
  
  //   expect(container.querySelector('.custom')).toBeInTheDocument();
  // });

  test('should support onClose', () => {
    const onClose = jest.fn();
    const {container} = render(<Tag closable onClose={onClose} >tag</Tag>);

    const linkElement = container.querySelector('.anticon');
    fireEvent.click(linkElement);

    expect(onClose).toBeCalled();
  });
});

