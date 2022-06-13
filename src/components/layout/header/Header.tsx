import React from "react";
import classes from "./Header.module.scss";
const Header: React.FC = () => {
  return (
    <header className={classes.container}>
      <h1>Weather App</h1>
    </header>
  );
};

export default Header;
