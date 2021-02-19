import styles from "./navbar.module.css";

import React, { useRef } from "react";

const Navbar = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fab fa-youtube"></i>
        <h2 className={styles.title}>Youtube</h2>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..!"
        onKeyPress={onKeyPress}
      ></input>
      <button className={styles.button} type="submit" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
};

export default Navbar;
