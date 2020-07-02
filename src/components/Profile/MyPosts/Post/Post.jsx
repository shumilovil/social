import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.ownersPhoto} alt=''/>
      <div className={styles.message}>{props.message}</div>
      <div>
        <span>❤</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;