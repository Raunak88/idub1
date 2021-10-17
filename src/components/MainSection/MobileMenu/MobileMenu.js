import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styles from "./MobileMenu.module.css";
const MobileMenu = () => {
  const pages = ["Home", "About", "Gallery", "Contact"];

  return (
    <div className={styles.mobileMenu}>
      <ul>
        {pages.map((page) => (
          <li>
            <a href="#">{page}</a>
          </li>
        ))}
        <li>
          <a href="#">
            <WbSunnyIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
