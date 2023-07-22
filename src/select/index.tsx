import InternalSelect, { Option } from './Select';

type SelectType = typeof InternalSelect;
interface SelectInterface extends SelectType {
    Option: typeof Option;
}

const Select = InternalSelect as SelectInterface;
Select.Option = Option;
export default Select;
