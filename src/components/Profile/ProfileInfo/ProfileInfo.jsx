import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';



const ProfileInfo = (props) => {  
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div>
        <img src='https://img1.goodfon.ru/original/800x480/c/25/karer-nebo-zemlya.jpg' alt='' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;