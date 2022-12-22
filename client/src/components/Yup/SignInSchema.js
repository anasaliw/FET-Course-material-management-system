import * as Yup from "yup";

export const SignInSchema = Yup.object({
  rollNo: Yup.string().required("Please Enter Valid Email"),
  password: Yup.string()
    .min(4)
    .required("Password must be at least 8 characters"),
});
