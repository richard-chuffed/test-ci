import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import Form from "../Components/Form/Form";
import FormRow from "../Components/Form/FormRow";
import Submit from "../Components/Form/Submit";
import TextInput from "../Components/Form/TextInput";
import Checkbox from "../Components/Form/Checkbox";
import { CampaignValues } from "../fixtures/campaign";
import UseWatch from "../Components/Form/hooks/UseWatch";
import { Validation } from "../Components/Form/validation/validationSchema";
import FormData from "../Components/Form/FormData";

const Complex = () => {
  const [formData, setFormData] = useState("");
  const schema = yup.object().shape({
    title: Validation.NAME,
    email: Validation.EMAIL.required("Please enter an email address"),
    postcode: Validation.ALPHANUM.notRequired(),
    isOrganisation: Validation.BOOLEAN,
    orgName: Validation.STRING.when("isOrganisation", {
      is: true,
      then: Validation.STRING.required("Please provide an organisation name"),
    }),
    orgABN: Validation.STRING.when("orgName", {
      is: (val) => val !== undefined,
      then: Validation.STRING.required("Please provide an ABN"),
      otherwise: Validation.STRING.notRequired(),
    }),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: CampaignValues,
  });

  const {
    register,
    formState: { isValidating, isValid },
    watch,
    control,
  } = methods;

  const handleUpdate = (data) => {
    console.log(data);
  };
  const isOrganisation = watch("isOrganisation");
  const handleSubmit = (data, e) => setFormData(JSON.stringify(data));

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border pb-8 m-8 overflow-hidden">
      <div className="flex justify-center align-center items-center p-2 mb-4 dark:bg-gray-800 dark:border-gray-700">
        <h3 className="font-light leading-tight py-4 text-xl text-sky-200 flex ">
          Yup Validation : Inline input &amp; conditional validation
        </h3>
      </div>
      <div className="md:grid md:grid-cols-6 md:gap-6">
        <div className="my-5 md:mt-0 md:col-span-4 md:col-start-2 flex-col">
          <FormProvider {...methods}>
            <Form handleSubmit={handleSubmit}>
              <FormRow>
                <h3 className="font-medium leading-tight text-4xl my-5">
                  Campaign Overview
                </h3>
                <h4 className="font-medium leading-tight text-2xl mb-3">
                  Campaign Title
                </h4>
                <p>
                  This is what your campaign is called. It’s at the top of your
                  campaign page and gets shared on Facebook and Twitter. It must
                  be shorter than 75 characters including spaces.
                </p>
                <TextInput
                  id="campaign-title"
                  classes={"mt-4"}
                  name="title"
                  defaultValue=""
                  {...register("title")}
                />
                <TextInput
                  id="campaign-title"
                  classes={"mt-4"}
                  name="email"
                  type="email"
                  required
                  placeholder="i.e. john@doe.com"
                  {...register("email")}
                />

                <TextInput
                  id="postcode"
                  classes={"mt-4"}
                  name="postcode"
                  placeholder="postcode"
                  {...register("postcode")}
                />
              </FormRow>
              <FormRow>
                <h3 className="font-medium leading-tight text-2xl my-5">
                  Are you fundraising for an organisation?{" "}
                  {isOrganisation ? "true" : "false"}
                </h3>
                <p className="font-light leading-tight text-sm mb-3">
                  Who will receive the funds from this campaign? We will
                  transfer funds to this person or organisation directly.
                </p>
                <Checkbox
                  id="campaign-title"
                  label="I am fundraising for an organisation / group"
                  defaultValue={true}
                  {...register("isOrganisation")}
                />
              </FormRow>
              {isOrganisation && (
                <FormRow>
                  <TextInput
                    id="organisation-name"
                    classes={"mt-4"}
                    label="Organisation Name"
                    defaultValue=""
                    {...register("orgName")}
                  />
                  <h4 className="font-bold leading-tight text-1xl my-5">
                    ABN (AUSTRALIAN BUSINESS NUMBER)
                  </h4>
                  <p className="font-light leading-tight text my-0">
                    Your ABN to be included on receipts. Note that this must be
                    the ABN for the organisation named in the 'payment
                    recipient' in the 'Payment' section.
                  </p>
                  <TextInput
                    id="organisation-abn"
                    classes={"mt-4"}
                    defaultValue=""
                    {...register("orgABN")}
                  />
                </FormRow>
              )}
              <FormRow>
                <Submit
                  classes={
                    "h-12 px-4 text-md text-pink-100 transition-colors duration-150 bg-pink-500 rounded-lg cursor-pointer focus:shadow-outline hover:bg-pink-700"
                  }
                  value="Save"
                  disabled={isValidating || !isValid}
                />
              </FormRow>
              {formData && <FormData formData={formData} />}
            </Form>
            <UseWatch
              fieldsToWatch={CampaignValues}
              control={control}
              onUpdate={handleUpdate}
            />
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Complex;
