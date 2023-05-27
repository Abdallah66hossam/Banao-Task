import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./styles/signup.module.scss";
import Image from "next/image";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import facebook from "../public/assets/facebook.png";
import google from "../public/assets/google.png";
import { useDispatch, useSelector } from "react-redux";
import { changeFormState, close, signup } from "@/redux/formSlice";
import Illustration from "./Illustration";
import Link from "next/link";

const SignupForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const handelSubimt = (ev) => {
    ev.preventDefault();
  };
  const [showEye, setShowEye] = useState(false);
  let [mobile, setMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width > 992) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  const dispatch = useDispatch();
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
            <form onSubmit={handelSubimt} className={styles.form}>
              <h1>Create Account</h1>
              <section className={styles.inputs}>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </section>
              <input type="email" placeholder="Email" />
              <div>
                <input
                  type={!showEye ? "password" : "text"}
                  placeholder="Password"
                  className={styles.password}
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
              <input type="password" placeholder="Confirm Password" />
              <div className={styles.submitMobile}>
                <button className={`${styles.submit} btn`}>
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
