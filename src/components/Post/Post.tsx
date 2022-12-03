import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      {props.message}
      <div>
        <span>Like: </span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
