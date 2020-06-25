import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';



const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt='' />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;