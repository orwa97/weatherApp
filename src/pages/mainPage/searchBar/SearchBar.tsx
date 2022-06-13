import React from "react";
import classes from "./SearchBar.module.scss";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ onChange }) => {
  return (
    <input
      type="search"
      id="search"
      name="search"
      onChange={onChange}
      placeholder="Type a country name"
      className={classes.search}
    ></input>
  );
};

export default SearchBar;
