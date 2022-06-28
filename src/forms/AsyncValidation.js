import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Submit from "../Components/Form/Submit";
import FormHelperText from "../Components/Form/FormHelperText";

export default function AsyncValidation() {
  const [formData, setFormData] = useState("");
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .test("checkUserUnique", "This character exists.", (value) =>
        fetch(`https://swapi.dev/api/people/?search=${value}&format=json`).then(
          async (res) => {
            const results = await res.json();
            return results.count === 0;
          }
        )
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const logData = (data, e) => setFormData(data);

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
      <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
          Async validation : Fetch{" "}
        </h3>
      </div>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2">
          <form onSubmit={handleSubmit(logData)}>
            <label className="text-2xl mb-5" htmlFor="username">
              Enter a Star Wars character name:{" "}
            </label>
            <p>
              <i className="text text-xs text-gray-600">
                (Try "Luke Skywalker")
              </i>
            </p>
            <input {...register("username")} className="mt-3 field" />
            <FormHelperText
              message={errors.username?.message}
              className="pb-4"
            />
            {formData && !errors.username && (
              <div
                className="bg-green-100 rounded-lg py-1 px-6 my-1 text-base text-green-700 flex flex-column"
                role="alert"
              >
                {" "}
                <pre>
                  <small>That name is available!</small>
                </pre>
              </div>
            )}
            <Submit value="Check Avalibility" />
          </form>
        </div>
      </div>
    </div>
  );
}
