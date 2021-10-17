import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1 className={styles.heroTitle}>Adventure Together</h1>
        <p className={styles.heroCaption}>
          Voluptatem, sed asperiores ipsum itaque aliquam omnis dicta nostrum
          error pariatur sit recusandae unde magni libero repellendus illum
          alias ratione numquam autem!
        </p>
      </div>
    </div>
  );
};

export default Hero;
