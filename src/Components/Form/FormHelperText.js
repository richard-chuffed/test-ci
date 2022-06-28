const FormHelperText = (errorMsg) => {
  return (
    <div className="text-sm text-red-500 mt-1 ml-1">{errorMsg.message}</div>
  );
};

export default FormHelperText;
