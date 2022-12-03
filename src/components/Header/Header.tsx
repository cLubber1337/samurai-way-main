import React from "react";
import s from "./Header.module.css";
import logo from "./logo.png";

function Header() {
  return (
    <div className={s.header}>
      <img src={logo} alt={logo} className={s.logo} />
    </div>
  );
}

export default Header;
