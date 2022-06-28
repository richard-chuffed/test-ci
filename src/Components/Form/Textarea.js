import FormHelperText from "./FormHelperText";
const Textarea = ({
  id,
  classes,
  name,
  label,
  error,
  placeholder,
  register,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className={classes}
        rows={inputProps.rows}
        {...register(name)}
        placeholder={placeholder}
      ></textarea>
      {error && <FormHelperText message={error.message} />}
    </>
  );
};

export default Textarea;
