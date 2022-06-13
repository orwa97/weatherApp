import React from "react";
import classes from "./Button.module.scss";

interface BtnProps extends React.ComponentProps<"button"> {}

const Button: React.FC<BtnProps> = ({ name, type, ...props }) => {
  return (
    <button {...props} type={type} name={name} className={classes.btn}>
      {name}
    </button>
  );
};

export default Button;
