import "./App.css";
import AsyncValidation from "./forms/AsyncValidation";
import Dynamic from "./forms/Dynamic";
import Complex from "./forms/Complex";
import FieldArray from "./forms/FieldArray";

import DynamicValidation from "./forms/DynamicValidation";
import ValidationGenerator from "./forms/ValidationGenerator";

function App() {
  return (
    <>
      <Dynamic />
      <Complex />
      <DynamicValidation />
      <ValidationGenerator />
      <AsyncValidation />
      <FieldArray />
    </>
  );
}

export default App;
