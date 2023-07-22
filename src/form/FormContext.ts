import { createContext } from 'react';

export interface colType {
  span?: number;
}
export interface FormContextProps {
  onValueChange?: (key, value) => void;
  labelCol?: colType;
  wrapperCol?: colType;
  values?: Object;
  setValues?: (values) => void;
  validateRegiste?: (name:string, cb: Function) => void;
}

export default createContext<FormContextProps>({
  
})