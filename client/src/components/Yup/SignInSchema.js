import * as Yup from "yup";

export const SignInSchema = Yup.object({
  rollNo: Yup.string().required("Please Enter Valid Email"),
  password: Yup.string().min(4).required("Password must be at least 4 letters"),
});
export const TeacherSignInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Valid Email"),
  password: Yup.string().min(4).required("Password must be at least 4 letters"),
});
