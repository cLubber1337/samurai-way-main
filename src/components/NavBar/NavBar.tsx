import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={s.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${s.btn}  ${s.active}` : `${s.btn} ${s.btnone1}`
          }
        >
          <div>Profile</div>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive ? `${s.btn}  ${s.active}` : `${s.btn} ${s.btnone1}`
          }
        >
          <div>Messages</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.btn}  ${s.active}` : `${s.btn} ${s.btnone1}`
          }
        >
          <div>News</div>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${s.btn}  ${s.active}` : `${s.btn} ${s.btnone1}`
          }
        >
          <div>Music</div>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${s.btn}  ${s.active}` : `${s.btn} ${s.btnone1}`
          }
        >
          <div>Settings</div>
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
