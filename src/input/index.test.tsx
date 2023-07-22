import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input', () => {
  test('should support defaultValue', () => {
    const onChange = jest.fn();
    render(<Input defaultValue="default" data-testid="t1" onChange={onChange} />);

    const linkElement = screen.getByTestId('t1');
    expect(linkElement.getAttribute('value')).toBe('default');

    fireEvent.change(linkElement, { target: { value: 'new value' } });
    expect(onChange).toBeCalledTimes(1);
    expect(linkElement.getAttribute('value')).toBe('new value');
  });

  test('should support under control', () => {
    const onChange = jest.fn();
    render(<Input value="abcd" data-testid="t2" onChange={onChange} />);

    const linkElement = screen.getByTestId('t2');
    expect(linkElement.getAttribute('value')).toBe('abcd');

    fireEvent.change(linkElement, { target: { value: 'new value2' } });
    expect(onChange).toBeCalledTimes(1);
    expect(linkElement.getAttribute('value')).toBe('abcd');
  });

  test('should support under control', () => {
    const App = () => {
      const [value, setValue] = React.useState('a3');
      const handleChange = (e) => {
        setValue(e.target.value);
      }
      return <Input value={value} data-testid="t3" onChange={handleChange} />
    }
    render(<App />);

    const linkElement = screen.getByTestId('t3');
    expect(linkElement.getAttribute('value')).toBe('a3');

    fireEvent.change(linkElement, { target: { value: 'ttttt3' } });
    expect(linkElement.getAttribute('value')).toBe('ttttt3');
  });
});

