import Checkbox from "./Checkbox";
import TextInput from './TextInput';
import Radio from "./Radio";
import Select from "./Select";
import Submit from "./Submit";
import Textarea from "./Textarea";

const FormInput = (props) => {
  const inputType = props.type;

  const components = {
    checkbox: Checkbox,
    radio: Radio,
    select: Select,
    submit: Submit,
    text: TextInput,
    textarea: Textarea
  }
  const FormInputType = components[inputType];
  return <FormInputType {...props} key={"form-input_" + props.name} />
}

export default FormInput;