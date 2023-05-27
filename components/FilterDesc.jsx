import React from "react";
import styles from "./styles/feed.module.scss";
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { open } from "@/redux/formSlice";

const FilterDesc = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="position-relative">
        <section className="d-flex justify-content-between align-items-center">
          <ul
            className={`d-flex justify-content-between ${styles.filtersDesk}`}
          >
            <li>All Posts(32)</li>
            <li>Article</li>
            <li>Event</li>
            <li>Education</li>
            <li>Job</li>
          </ul>
          <div className={styles.btns}>
            <button className="px-3 py-2 btn">
              Write a Post
              <BsFillCaretDownFill className={styles.icon} size={12} />
            </button>
            <button
              className="px-3 py-2 btn btn-primary"
              onClick={() => dispatch(open())}
            >
              Join Group
              <AiOutlineUsergroupAdd className={styles.icon} size={16} />
            </button>
          </div>
        </section>
        <hr className="position-relative" style={{ bottom: "33px" }} />
      </div>
    </>
  );
};

export default FilterDesc;
