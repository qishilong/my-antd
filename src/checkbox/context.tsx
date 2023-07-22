import { createContext } from 'react';

export interface CheckboxContextProps {
    value: Array<string>;
    onChange: Function,
    disabled: boolean;
}


const checkboxContext = createContext<CheckboxContextProps>({
    value: [],
    onChange: () => {},
    disabled: false,
})

export default checkboxContext;