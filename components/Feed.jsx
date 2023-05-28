import React, { useEffect, useState } from "react";
import styles from "./styles/feed.module.scss";
import FilterDesc from "./FilterDesc";
import FilterMobile from "./FilterMobile";
import Posts from "./Posts";
import AsidePosts from "./AsidePosts";
import axios from "axios";

export const Feed = ({ users, loggedIn }) => {
  console.log(users);
  return (
    <section className={`${styles.feed} w-full`}>
      <FilterDesc loggedIn={loggedIn} />
      <FilterMobile />
      <section className="d-flex justify-content-between">
        <Posts />
        <AsidePosts users={users} loggedIn={loggedIn} />
      </section>
    </section>
  );
};
