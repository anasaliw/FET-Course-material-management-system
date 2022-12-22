import * as Yup from "yup";

export const PostQuestionValidation = Yup.object({
  title: Yup.string()
    .min(4, "Minimum 4 characters are required")
    .required("Please Enter Valid Email"),
  question: Yup.string()
    .min(20, "Minimum 20 characters are required")
    .required("Problem description is required"),
});
