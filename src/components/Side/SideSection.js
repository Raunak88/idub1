import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./SideSection.module.css";
const SideSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.brand}>
        <h1>Xae</h1>
      </div>
      <div className={styles.social}>
        <span className={styles.icons}>
          <FacebookIcon />
        </span>
        <span className={styles.icons}>
          {" "}
          <InstagramIcon />
        </span>
        <span className={styles.icons}>
          <TwitterIcon />
        </span>
      </div>
    </section>
  );
};

export default SideSection;
