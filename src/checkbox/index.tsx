import InternalCheckbox from './Checkbox';
import Group from './CheckboxGroup';

type CheckboxType = typeof InternalCheckbox;
interface CheckboxInterface extends CheckboxType {
    Group: typeof Group;
}

const Checkbox = InternalCheckbox as CheckboxInterface;
Checkbox.Group = Group;
export default Checkbox;
