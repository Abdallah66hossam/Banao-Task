import React from "react";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { useSelector } from "react-redux";

const Form = () => {
  const { formState } = useSelector((state) => state.formIsVisible);
  console.log(formState);
  return <>{formState ? <SignupForm /> : <SigninForm />}</>;
};

export default Form;
