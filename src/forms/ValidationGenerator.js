import React, { useState, useMemo } from "react";
import _ from "lodash";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../Components/Form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import formInputs from "../fixtures/forminputs.json";
import { createYupSchema } from "./yupSchemaGenerator";
import FormData from "../Components/Form/FormData";

let validationFields = [];

const ValidationGenerator = () => {
  const [formData, setFormData] = useState("");

  useMemo(() => {
    formInputs.rows.forEach((inputRow) => {
      const fields = inputRow.map((row) => {
        return row.fields;
      });
      validationFields.push(...fields);
    });
    validationFields = [].concat.apply([], validationFields);
  }, []);

  const validationSchema = useMemo(
    () => validationFields.reduce(createYupSchema, {}),
    []
  );
  const validationResolver = yup.object().shape(validationSchema);

  const methods = useForm({
    resolver: yupResolver(validationResolver),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const {
    formState: { isValid },
  } = methods;

  const handleSubmit = (data, e) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
      <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
          Form Validation : validation generator
        </h3>
      </div>

      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2 flex-col">
          <div className={isValid ? "bg-green-100 p-3" : "bg-red-100 p-3"}>
            Data is {isValid ? "valid" : "invalid"}
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2 flex-col">
          <FormProvider {...methods}>
            <Form
              handleSubmit={handleSubmit}
              formContent={formInputs.rows}
              key={Math.random()}
            />
          </FormProvider>
          {formData && <FormData formData={formData} />}
        </div>
      </div>
    </div>
  );
};

export default ValidationGenerator;
