import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  if (!props.isOwner) {
    return (
      <div className={s.status} >
        <b>Status</b><span className={s.statusText} >{props.status}</span>
      </div>
    )
  }

  return (
    <div className={s.status}>
      {!editMode &&
        <div>
          <b>Status</b><span onDoubleClick={activateEditMode} className={s.statusText} >{props.status || "-------"}</span><span>(Double click on status to edit)</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            className={s.inputField} />
        </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;