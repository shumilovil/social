import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props) => {  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        ava + description
      </div>
      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;