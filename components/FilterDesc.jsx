import React from "react";
import styles from "./styles/feed.module.scss";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BiExit } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { open } from "@/redux/formSlice";
import { allPosts, Value } from "@/redux/filterSlice";
import { useRouter } from "next/router";

const FilterDesc = ({ loggedIn }) => {
  console.log(loggedIn);
  const dispatch = useDispatch();
  const handelFilter = (e) => {
    let value = e.target.innerText;
    dispatch(allPosts(value));
  };
  const router = useRouter();

  const handelLogout = () => {
    router.push("/");
  };

  return (
    <>
      <div className={`position-relative ${styles.filter}`}>
        <section className="d-flex justify-content-between align-items-center">
          <ul
            className={`d-flex justify-content-between ${styles.filtersDesk}`}
          >
            <button
              className="btn rounded-0 border-0"
              onClick={handelFilter}
              defaultChecked={true}
            >
              All Posts(32)
            </button>
            <button className="btn rounded-0 border-0" onClick={handelFilter}>
              Article
            </button>
            <button className="btn rounded-0 border-0" onClick={handelFilter}>
              Education
            </button>
            <button className="btn rounded-0 border-0" onClick={handelFilter}>
              Meetup
            </button>
            <button className="btn rounded-0 border-0" onClick={handelFilter}>
              Job
            </button>
          </ul>
          <div className={styles.btns}>
            <button className="px-3 py-2 btn">
              Write a Post
              <BsFillCaretDownFill className={styles.icon} size={12} />
            </button>
            <button
              className={`px-3 py-2 btn ${
                loggedIn ? "btn-secondary" : "btn-primary"
              }`}
              onClick={loggedIn ? handelLogout : () => dispatch(open())}
            >
              {loggedIn && (
                <BiExit
                  className={styles.icon}
                  size={16}
                  style={{ marginRight: "5px" }}
                />
              )}
              {loggedIn ? "Leave Group" : "Join Group"}
              {!loggedIn && (
                <AiOutlineUsergroupAdd className={styles.icon} size={16} />
              )}
            </button>
          </div>
        </section>
        <hr className="position-relative" style={{ bottom: "33px" }} />
      </div>
    </>
  );
};

export default FilterDesc;
