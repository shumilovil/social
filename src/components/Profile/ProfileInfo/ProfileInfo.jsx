import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import { useState } from 'react';
import ProfileDataFormReduxForm from './ProfileDataForm';



const ProfileInfo = (props) => {

  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div className={s.descriptionBlock}>
      <div>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt='' />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>

      {editMode
        ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
        : <ProfileData goToEditMode={() => { setEditMode(true) }}
          profile={props.profile}
          isOwner={props.isOwner} />}

      <ProfileStatusWithHooks status={props.status}
        updateStatus={props.updateStatus} />
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && <div><button onClick={props.goToEditMode} >edit</button></div>}
      <div>
        <b>Full name</b>: {props.profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
      </div>
      {props.profile.lookingForAJob &&
        <div>
          <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        </div>
      }
      <div>
        <b>About me</b>: {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
          return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}
      </div>
    </div>
  )
}



const Contacts = (props) => {
  return (
    <div className={s.contacts} ><b>{props.contactTitle}</b>: {props.contactValue}</div>
  )
}

export default ProfileInfo;