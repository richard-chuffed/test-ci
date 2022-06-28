import React, { useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import Submit from "../Components/Form/Submit";

import TextInput from "../Components/Form/TextInput";
import Select from "../Components/Form/Select";
import FormData from "../Components/Form/FormData";

export default function Dynamic() {
  const [formData, setFormData] = useState("");
  const Price = ({ control }) => {
    const value = useWatch({
      control,
      name: "useWatch",
    });
    console.log(value);
  };

  const { register, control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const calculate = (data, e) => setFormData(JSON.stringify(data));

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
      <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
          Adding dynamic content
        </h3>
      </div>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2">
          {" "}
          <form onSubmit={handleSubmit(calculate)}>
            <div className="form-row">
              {fields.map(({ id, name, type, amount }, index) => {
                return (
                  <div key={id}>
                    <TextInput
                      classes={"mt-4 w-1/3"}
                      name={`items[${index}].name`}
                      defaultValue={name}
                      register={register}
                      placeholder={"Item name"}
                    />
                    <Select
                      register={register}
                      name={`items[${index}].type`}
                      defaultValue={type}
                      classes={"w-1/6"}
                    >
                      <option value=""> Qty </option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </Select>
                    <TextInput
                      register={register}
                      type="number"
                      name={`items[${index}].amount`}
                      defaultValue={amount}
                      placeholder={"Amount"}
                      classes={"w-1/6"}
                    />
                    <Price control={control} index={index} />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className={
                        "h-8 px-4 mt-4 text-white transition-colors duration-150 bg-red-700"
                      }
                    >
                      remove ( x )
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => append({})}
              className={
                "h-8 px-4 mt-4 text-white transition-colors duration-150 bg-sky-500 rounded-lg cursor-pointer focus:shadow-outline hover:bg-sky-700"
              }
            >
              + Add Item
            </button>
            <br />
            <Submit
              classes={"btn focus:shadow-outline hover:bg-pink-700"}
              value="Calculate"
            />
          </form>
          {formData && <FormData formData={formData} />}
        </div>
      </div>
    </div>
  );
}
