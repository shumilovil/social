import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://yt3.ggpht.com/a/AATXAJxprJ9RdcQ-V961aW5tzEWdrdkjxtIR5J6eNg=s900-c-k-c0xffffffff-no-rj-mo" alt=''/>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;