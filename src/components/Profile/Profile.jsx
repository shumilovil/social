import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  return (
    <div className={styles.profile} >
      <ProfileInfo profile={props.profile}
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        status={props.status}
        updateStatus={props.updateStatus}
        saveProfile={props.saveProfile}
        followed={props.followed}
        followingInProgress={props.followingInProgress}
        follow={props.follow}
        unfollow={props.unfollow} />      
    </div>
  );
};

export default Profile;