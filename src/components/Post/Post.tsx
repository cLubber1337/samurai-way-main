import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
  message: string;
  likesCount: number;
};

const Post = (props: PostPropsType) => {
  return (
    <div className={s.item}>
      <img
        className={s.post}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaAMfX1ihYhgkuuI0ow_gJ-2_KI_KAYRGFg&usqp=CAU"
        alt="postImg"
      />
      {props.message}
      <div>
        <span>Like: </span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
