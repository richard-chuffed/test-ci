const Submit = ({ value, classes }) => {
  return <input type="submit" value={value ?? "submit"} className={`submit ${classes}`} />;
};
export default Submit;
