import * as yup from "yup";

export const Validation = {
  ALPHANUM: yup.string().matches(/^[\w\-\s]*$/, "Please use only letters and numbers").nullable(true),
  BOOLEAN: yup.boolean(),
  NUMBER: yup.number().nullable(true).transform((_, val) => isNaN(val) ? val : null) ,
  STRING: yup.string(),
  REQUIRED: yup.mixed().required(),
  EMAIL: yup.string().email("Please enter a valid email address"),
  NAME: yup.string().min(3, "Your name should be at least 3 characters long"),
};
