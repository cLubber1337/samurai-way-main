import React from "react";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={s.navbar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
  );
}
export default NavBar;
