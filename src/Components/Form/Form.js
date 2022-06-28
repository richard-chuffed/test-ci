import React, {useMemo} from "react";
import { useFormContext } from "react-hook-form";
import { FormBuilder } from "../FormBuilder";
import "./form.css";

const Form = ({ defaultValues, formContent, children, handleSubmit }) => {

  const methods = useFormContext();
  const formGroups = useMemo(
    () => {
      return FormBuilder(defaultValues, formContent, methods);
    },
    [formContent, methods, defaultValues],
  )
  
  return (
    <>
      <form
        noValidate
        autoComplete="off"
        onSubmit={methods.handleSubmit(handleSubmit)}
        error={methods.errors}
        className="flex columns-12 flex-col justify-center"
      >
        {children}
        {formGroups}
      </form>
    </>
  );
};
export default Form;
