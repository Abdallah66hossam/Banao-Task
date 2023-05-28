import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstname: Yup.string().min(6).required("Please enter your username."),
  lastname: Yup.string().min(6).required("Please enter your username."),
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: Yup.string()
    .min(6)
    .required(
      "Must contain at least one number, special signs [!@#$%^&*] and one uppercase and lowercase letter, and at least 6 or more characters."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password do NOT match!")
    .required("Please enter confirm password."),
});

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: Yup.string()
    .min(6)
    .required(
      "Must contain at least one number, special signs [!@#$%^&*] and one uppercase and lowercase letter, and at least 6 or more characters."
    ),
});
