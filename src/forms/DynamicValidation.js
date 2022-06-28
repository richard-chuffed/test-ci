import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../Components/Form/Form";
import FormRow from "../Components/Form/FormRow";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../Components/Form/TextInput";
import FormData from "../Components/Form/FormData";

const DynamicValidation = () => {
  const [formData, setFormData] = useState("");
  const [numPerks, setNumPerks] = useState(0);

  const validationSchema = yup.object().shape({
    perks: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Name is required"),
      })
    ),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    formState: { isValid, isValidating, errors },
  } = methods;

  function perkNumbers() {
    return [...Array(parseInt(numPerks || 0)).keys()];
  }

  function addPerk() {
    setNumPerks(numPerks + 1);
  }

  const handleSubmit = (data, e) => {
    setFormData(JSON.stringify(data));
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
      <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
          Form Validation : dynamic validation
        </h3>
      </div>

      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2 flex-col">
          <div className={isValid ? "bg-green-100 p-3" : "bg-red-100 p-3"}>
            Data is {isValid ? "valid" : "invalid"}{" "}
          </div>
          <FormProvider {...methods}>
            <Form handleSubmit={handleSubmit}>
              <div className="card m-3">
                {perkNumbers().map((i) => (
                  <FormRow key={`row[${i}]`}>
                    <TextInput
                      classes={"my-2"}
                      placeholder="Perk"
                      name={`perks.[${i}].name`}
                      {...register(`perks.[${i}].name`)}
                    />

                    <div className="text-sm text-red-500 mt-0 ml-1">
                      {errors.perks?.[i]?.name?.message}
                    </div>
                  </FormRow>
                ))}
                <div className="card-footer text-center border-top-0">
                  <button className="btn bg-sky-500 mr-1" onClick={addPerk}>
                    Add Perk
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mr-1"
                    disabled={isValidating || !isValid}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </Form>
            {formData && <FormData formData={formData} />}
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default DynamicValidation;
