import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
      <ProfileStatus status={props.status}
        updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;