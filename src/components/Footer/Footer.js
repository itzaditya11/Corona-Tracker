import React from "react";
import styles from "./Footer.module.css";
const Footer = () => (
  <div className={styles.Footer}>
    <h3>
      Made By{" "}
      <a
        className={styles.link}
        href="https://www.instagram.com/adityasharma1106/"
      >
        @Aditya Sharma
      </a>
    </h3>
  </div>
);

export default Footer;
