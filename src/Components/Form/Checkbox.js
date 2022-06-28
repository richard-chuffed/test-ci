import FormHelperText from "./FormHelperText";
const Checkbox = ({
  id,
  classes,
  error,
  label,
  name,
  placeholder,
  register,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>
        <input
          {...register(name)}
          {...inputProps}
          id={id}
          type="checkbox"
          className={classes}
          {...(inputProps.checked ? "checked" : "")}
        />
        <span className="ml-2">
          {label}
        </span>
      </label>
      {error && <FormHelperText message={error.message} />}
    </>
  );
};

export default Checkbox;
