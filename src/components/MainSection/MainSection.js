import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./MainSection.module.css";
import Hero from "./Hero/Hero";
import Carousel from "../Carousel/Carousel";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MobileMenu from "./MobileMenu/MobileMenu";

const MainSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className={styles.mainSection}>
      <div className={styles.nav}>
        {" "}
        <Navigation toggleMenu={toggleMenu} />
      </div>
      <div className={styles.hero}>
        {" "}
        <Hero />
      </div>
      {showMenu && (
        <div className={styles.mobileNav}>
          <MobileMenu />
        </div>
      )}
      <div className={styles.carousel}>
        {" "}
        <Carousel />
      </div>
    </div>
  );
};

export default MainSection;
