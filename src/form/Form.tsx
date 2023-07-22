import React, { ReactNode, CSSProperties, useState, useRef } from 'react';
import classNames from 'classnames';
import FormContext, { colType } from './FormContext';

import './index.scss';

export interface formProps extends React.HTMLAttributes<HTMLFormElement> {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  style?: CSSProperties;
  onFinish?: (values) => void;
  onFinishFailed?: (errors) => void;
  name?: string;
  labelCol?: colType;
  wrapperCol?: colType;
  initialValues?: Object;
  autoComplete?: string;
}

const Form = (props: formProps) => {
  const { className, size = 'medium', children, style,
    onFinish,
    labelCol,
    wrapperCol,
    initialValues,
    onFinishFailed,
    ...others } = props;
  const [values, setValues] = useState(initialValues || {});
  const validateMap = useRef<Map<string, Function>>(new Map());
  const errors = useRef({});

  const cls = classNames({
    'ant-form': true,
    [`ant-form-horizontal`]: true,
    [className as string]: !!className
  });
  const onValueChange = (key, value) => {
    values[key] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish?.(values);

    const itr = validateMap.current.entries();
    for (let index = 0; index < validateMap.current.size; index++) {
      const [key, callbackFunc] = itr.next().value;
      if (typeof callbackFunc === 'function') {
        errors.current[key] = callbackFunc();
      }
    }

    const errorList = Object.keys(errors.current).map(key => errors.current[key]).filter(msg => !!msg);
    if (errorList.length) {
      onFinishFailed?.(errors.current);
    }
  };

  const handleValidateRegiste = (name, cb) => {
    validateMap.current.set(name, cb);
  };

  return (
    <FormContext.Provider
      value={{
        onValueChange,
        labelCol,
        wrapperCol,
        values,
        setValues: (v) => setValues(v),
        validateRegiste: handleValidateRegiste
      }}
    >
      <form {...others} className={cls} style={style} onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;