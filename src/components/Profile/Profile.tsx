import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPosts from "../MyPosts/MyPosts";

function Profile() {
  return (
    <div className={s.body}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;
