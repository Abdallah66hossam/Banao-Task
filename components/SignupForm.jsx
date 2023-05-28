import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles/signup.module.scss";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import facebook from "../public/assets/facebook.png";
import google from "../public/assets/google.png";
import { useDispatch } from "react-redux";
import { changeFormState, close } from "@/redux/formSlice";
import Illustration from "./Illustration";
import Link from "next/link";
import { signupSchema } from "@/schemas";
import { useFormik } from "formik";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

const SignupForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const router = useRouter();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (_, { resetForm }) => {
        resetForm();
        router.push("/home");
        dispatch(close());
      },
    });
  const [showEye, setShowEye] = useState(false);
  let [mobile, setMobile] = useState(true);
  console.log(errors);
  useEffect(() => {
    if (window.screen.width > 992) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <>
      <section className={styles.signup} data-aos="fade-up">
        <div className={styles.boxModel}>
          <IoCloseCircle
            className={styles.close}
            onClick={() => dispatch(close())}
          />
          {mobile && (
            <div className={`alert alert-success ${styles.alert}`} role="alert">
              Let{"'"}s learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
          )}
          <div className={styles.main}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h1>Create Account</h1>
              <section className={styles.inputs}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstname && touched.firstname ? styles.errs : ""
                  }
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastname && touched.lastname ? styles.errs : ""
                  }
                />
              </section>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? styles.errs : ""}
              />
              <div>
                <input
                  type={!showEye ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  className={`${styles.password} ${
                    errors.password && touched.password ? styles.errs : ""
                  }`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {!showEye ? (
                  <AiOutlineEye
                    className={styles.eye}
                    cursor={"pointer"}
                    onClick={() => setShowEye(!showEye)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className={styles.eye}
                    cursor={"pointer"}
                    onClick={() => setShowEye(!showEye)}
                  />
                )}
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.confirmPassword ? styles.errs : ""
                }
              />
              <div className={styles.submitMobile}>
                <button className={`${styles.submit}`} type="submit">
                  Create Account
                </button>
                <Link
                  href={"/"}
                  onClick={() => dispatch(changeFormState("signup"))}
                >
                  or, Sign In
                </Link>
              </div>
              <button className={`${styles.accEmail} btn`}>
                <Image src={facebook} alt="facebook logo" />
                Sign up with Facebook
              </button>
              <button className={`${styles.accEmail} btn`}>
                <Image src={google} alt="google logo" />
                Sign up with Google
              </button>
            </form>
            <Illustration />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
