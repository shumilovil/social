import React from 'react';
import styles from './Friends.module.css';
import { useEffect } from 'react';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


const Friends = (props) => {

  useEffect(() => {    
    console.log('useeffect');    
    props.getFriends()
  }, []);

  const myFriends = props.friends.map(f => {
    return (
      <div className={styles.friend} key={f.id} >
        <NavLink to={'/profile/' + f.id}>
          <img src={f.photos.large ? f.photos.large : userPhoto} alt='' />
        </NavLink>
        <div className={styles.friendsName} >{f.name}</div>
      </div>
    );
  });

  return (
    <div className={styles.friends}>
      <h3>Friends</h3>
      {myFriends}
    </div>
  )
};

export default Friends;