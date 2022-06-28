const FormData = ({ formData }) => (
  <div
    className="bg-green-100 rounded-lg py-5 px-6 my-4 text-base text-green-700 flex flex-column"
    role="alert"
  >
    {" "}
    <pre>
      <small>{formData}</small>
    </pre>
  </div>
);

export default FormData;
