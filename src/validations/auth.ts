import * as yup from "yup";
// validation schemas for auth related activities
export const signUpSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Enter valid email"),
  phone: yup.string().required("Contact number is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum of 8 characters")
    .max(50, "Maximum of 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null] as Array<string | yup.Reference<unknown>>,
      "Passwords must match"
    )
    .required("Confirm password is required"),
});


export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum of 8 characters")
    .max(50, "Maximum of 50 characters"),

});



export const forgotPasswordSchema = yup.object().shape({
  identifier: yup.string().required("Email/password is required")

});
