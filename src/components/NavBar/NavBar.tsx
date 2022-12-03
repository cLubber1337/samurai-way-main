import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={s.navbar}>
      <div>
        <NavLink className={`${s.btn} ${s.btnone1}`} to="/profile">
          <div>Profile</div>
        </NavLink>
      </div>

      <div>
        <NavLink className={`${s.btn} ${s.btnone1}`} to="/messages">
          <div>Messages</div>
        </NavLink>
      </div>

      <div className={s.box1}>
        <div className={`${s.btn} ${s.btnone1}`}>
          <span>News</span>
        </div>
      </div>
      <div className={s.box1}>
        <div className={`${s.btn} ${s.btnone1}`}>
          <span>Music</span>
        </div>
      </div>
      <div className={s.box1}>
        <div className={`${s.btn} ${s.btnone1}`}>
          <span>Settings</span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
