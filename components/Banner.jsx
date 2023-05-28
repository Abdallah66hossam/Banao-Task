import heroDesk from "../public/assets/hero.png";
import heroMobile from "../public/assets/hero2.png";
import styles from "./styles/bannner.module.scss";
import { useEffect, useState } from "react";

const Banner = () => {
  let [hero, setHero] = useState("");
  useEffect(() => {
    if (window.screen.width > 992) {
      setHero(heroDesk.src);
    } else {
      setHero(heroMobile.src);
    }
  }, []);
  return (
    <section
      className={`position-relative top-0 ${styles.banner}`}
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.blackOpacity} />
      <div className={`${styles.textBanner}`}>
        <h1 className={`${styles.header}`}>Computer Engineering</h1>
        <p className={`${styles.description}`}>
          142,765 Computer Engineers follow this
        </p>
      </div>
    </section>
  );
};

export default Banner;
