import FormHelperText from "./FormHelperText";
const TextInput = ({
  id,
  classes,
  name,
  label,
  error,
  register,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        {...register(name)}
        id={id}
        {...inputProps}
        className={`field ${classes}`}
        required={inputProps.required}
      />
      {error && <FormHelperText message={error.message} />}
    </>
  );
};

export default TextInput;
