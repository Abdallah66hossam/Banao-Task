import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import styles from "./styles/feed.module.scss";

const AsidePosts = () => {
  return (
    <section className={styles.aside}>
      <div className={styles.editLocation}>
        <div>
          <GrLocation />
          <span>Noida, India</span>
        </div>
        <MdModeEdit cursor={"pointer"} />
      </div>
      <div className={styles.warning}>
        <RiErrorWarningLine className={styles.waarningIcons} size={20} />
        <span>
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
    </section>
  );
};

export default AsidePosts;
