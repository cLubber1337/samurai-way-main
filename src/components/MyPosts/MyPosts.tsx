import React from "react";
import s from "./MyPosts.module.css";
import Post from "../Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's is my first post.", likesCount: 36 },
  ];

  let postElement = postData.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  return (
    <div className={s.myPost_block}>
      <h3>My Post</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
