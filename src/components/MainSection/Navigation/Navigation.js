import React from "react";
import styles from "./navigation.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";
const Navigation = ({ toggleMenu }) => {
  const pages = ["Home", "About", "Gallery", "Contact"];
  return (
    <header>
      <nav className={styles.navigation}>
        <h1 className={styles.navbrand}>Xav</h1>
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
        <span className={styles.hamburger} onClick={toggleMenu}>
          <MenuIcon />
        </span>
      </nav>
    </header>
  );
};

export default Navigation;
