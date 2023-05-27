import Image from "next/image";
import React, { useState } from "react";
import img from "../public/assets/img1.png";
import styles from "./styles/feed.module.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import profile from "../public/assets/human1.png";

const Posts = () => {
  const [dotes, setDotes] = useState(false);
  return (
    <main className={styles.posts}>
      <section className={styles.card}>
        <Image src={img} alt="post img" className="w-100" height={200}></Image>
        <h3 className={styles.category}>✍️ Article</h3>
        <div className={styles.title}>
          <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
          <BiDotsHorizontalRounded
            size={27}
            className={dotes ? styles.clicked : styles.dotes}
            onClick={() => setDotes(!dotes)}
          />
          {dotes && (
            <ul className={styles.options}>
              <li>Edit</li>
              <li>Report</li>
              <li>Option</li>
            </ul>
          )}
        </div>
        <p className={styles.description}>
          I’ve worked in UX for the better part of a decade. From now on, I plan
          to rei…
        </p>
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <Image alt="profile image" src={profile} />
            <h4>Sarthak Kamra</h4>
          </div>
          <div className={styles.details}>
            <AiOutlineEye />
            <span>1.4k views</span>
            <BsShareFill className={styles.share} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Posts;
