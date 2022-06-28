const Radio = ({
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
          type="radio"
          value={inputProps.value}
          {...register(name)}
          className={classes}
        />
        <span className="ml-2">{label}</span>
      </label>
    </>
  );
};

export default Radio;
