import FormRow from "./Form/FormRow";
import FormInput from "./Form/FormInput";

const mapInputs = (inputRow) => {
  return inputRow.map((input, i) => {
    return (
      <FormInput
        classes={input.classes}
        key={ input.type === "radio" ? input.value : input.name ?? "form-input_" + i}
        label={input.label}
        name={input.name}
        options={input.options}
        placeholder={input.placeholder}
        type={input.type}
        defaultValue={input.defaultValue}
        value={input.value}
        required={input.required}
        errors={input.errors}
      />
    );
  });
};

export function FormBuilder(defaultValues, formContent, methods) {
  if (formContent instanceof Array) {
    return formContent.map((inputRow, i) => {
      const fields = inputRow.map((row) => {
       return row.fields
      })
      const inputChildren = mapInputs(...fields);
      const title = inputRow.map(item => item.title);
      return <FormRow children={inputChildren} methods={methods} title={title} key={`input-row_` + i} />;
    });
  }
};

