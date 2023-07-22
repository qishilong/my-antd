import React, { ReactNode, CSSProperties, useContext, useRef } from 'react';
import FormContext from './FormContext';

import Button from '../button';

export interface formProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  style?: CSSProperties;
  resetValue?: object;
}

const Form = (props: formProps) => {
  const {  children, resetValue = {}, ...others } = props;

  const {
    onValueChange,
    
    values,
    setValues,
    validateRegiste,
    ...otherContext } = useContext(FormContext);

  return (
    <Button {...others} onClick={() => { setValues({...resetValue})}}>{children}</Button>
  );
}

export default Form;