import Image from "next/image";
import React from "react";
import illustration from "../public/assets/atg_illustration.png";
import styles from "./styles/signup.module.scss";
import { changeFormState } from "@/redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

const Illustration = () => {
  const { formState } = useSelector((state) => state.formIsVisible);
  const dispatch = useDispatch();
  let style = `${!formState && styles.signin}`;
  return (
    <div className={`${styles.rightPic} ${style}`}>
      {!formState ? (
        <p
          className={`${styles.account} ${styles.account2}`}
          onClick={() => dispatch(changeFormState("signin"))}
        >
          Already have an account? <span>Sign In</span>
        </p>
      ) : (
        <p
          className={styles.account}
          onClick={() => dispatch(changeFormState("signup"))}
        >
          Don’t have an account yet? <span>Create new for free!</span>
        </p>
      )}
      <Image
        src={illustration}
        alt="illustration image"
        height={320}
        width={320}
      />
      {formState && (
        <p
          style={{
            fontSize: "11px",
            color: "#3d3d3d",
            margin: "10px 30px",
          }}
        >
          By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      )}
    </div>
  );
};

export default Illustration;
