import _ from "lodash";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Form from "../Components/Form/Form";

import UseWatch from "../Components/Form/hooks/UseWatch";
import allFormInputs from "../fixtures/forminputs";

const Dynamic = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  const watchFields = {};
  const fields = allFormInputs.rows.map((row) => {
    return row.map((field) => field.fields);
  });

  fields.forEach((inputRow) => {
    inputRow.forEach((row) => {
      row.forEach((field) => {
        if (field.watch) {
          watchFields[field.name] = field.defaultValue;
        }
      });
    });
  });

  const handleUpdate = (data) => {
    if (data.length > 0) {
      console.log(data);
    }
  };

  return (
    <>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
        <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
          <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
            Dynamic form with Watchable fields
          </h3>
        </div>
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2">
            <FormProvider {...methods}>
              <Form
                handleSubmit={onSubmit}
                formContent={allFormInputs.rows}
                key={Math.random()}
              />
            </FormProvider>
          </div>
        </div>
      </div>
      <UseWatch
        control={methods.control}
        fieldsToWatch={watchFields}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default Dynamic;
