import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div className={s.myProfile}>
        <img
          className={s.avatar}
          src="https://www.armrus.org/upload/main/581/581c1a044fcd9f526747749f6eb7b93d.jpg"
          alt="ava"
        />
      </div>
    </div>
  );
}

export default ProfileInfo;
