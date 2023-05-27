import React from "react";
import styles from "./styles/filterMobile.module.scss";

const FilterMobile = () => {
  return (
    <div className={styles.parent}>
      <h5 className={styles.posts}>Posts(368)</h5>
      <label className={styles.label}>
        <select className={styles.select}>
          <option className={styles.option}>All</option>
          <option className={styles.option}>✍️ Article</option>
          <option className={styles.option}>🔬️ Education</option>
          <option className={styles.option}>🗓️ Meetup</option>
          <option className={styles.option}>💼️ Job</option>
        </select>
      </label>
    </div>
  );
};

export default FilterMobile;
