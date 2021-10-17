import React from "react";
import styles from "./Carousel.module.css";
const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <img
        className={styles.slideImg}
        src="https://i.postimg.cc/DyYttJDh/space.png"
      />
      <div className={styles.slideDesc1}>
        <h3>Exploration</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          perspiciatis neque minus consequatur, accusamus itaque?
        </p>
      </div>
      <div className={styles.slideDesc2}>
        <h3>Exploration</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          perspiciatis neque minus consequatur, accusamus itaque?
        </p>
      </div>
    </div>
  );
};

export default Carousel;
