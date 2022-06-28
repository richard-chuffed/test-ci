import FormHelperText from "./FormHelperText";
const Select = ({
  id,
  classes,
  name,
  label,
  options,
  register,
  error,
  ...selectProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select {...register(name)} {...selectProps} className={classes}>
        {options
          ? options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))
          : 
          selectProps.children}
      </select>
      {error && <FormHelperText message={error.message} />}
    </>
  );
};

export default Select;
