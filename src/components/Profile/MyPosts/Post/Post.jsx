import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.ownersPhoto} alt=''/>
      <div className={s.message}>{props.message}</div>
      <div>
        <span>❤</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;