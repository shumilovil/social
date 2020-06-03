import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  return (
    <div className={s.dialog + ' ' + s.active}>
      <img src="https://yt3.ggpht.com/a/AATXAJxprJ9RdcQ-V961aW5tzEWdrdkjxtIR5J6eNg=s900-c-k-c0xffffffff-no-rj-mo" alt=''/>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};


export default DialogItem;