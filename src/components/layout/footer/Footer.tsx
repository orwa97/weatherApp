import React from "react";
import classes from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <footer className={classes.container}>
      <p>@ Weather 2021, All rights reserved</p>
    </footer>
  );
};

export default Footer;
