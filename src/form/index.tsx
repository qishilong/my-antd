import InternalForm from './Form';
import Item from './Item';
import Reset from './Reset';

type InternalFormType = typeof InternalForm;

interface FormInterface extends InternalFormType {
  Item: typeof Item;
  Reset: typeof Reset;
} 

const Form = InternalForm as FormInterface;
Form.Item = Item;
Form.Reset = Reset;

export default Form;
