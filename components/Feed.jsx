import React, { useEffect, useState } from "react";
import styles from "./styles/feed.module.scss";
import FilterDesc from "./FilterDesc";
import FilterMobile from "./FilterMobile";
import Posts from "./Posts";
import AsidePosts from "./AsidePosts";

export const Feed = () => {
  let [filter, setFilter] = useState(false);
  useEffect(() => {
    if (window.screen.width > 992) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  }, []);
  return (
    <section className={`${styles.feed} w-full`}>
      {filter ? <FilterDesc /> : <FilterMobile />}
      <section className="d-flex justify-content-between">
        <div>
          <Posts />
          <Posts />
          <Posts />
        </div>
        <AsidePosts />
      </section>
    </section>
  );
};
