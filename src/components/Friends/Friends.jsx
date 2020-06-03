import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {  

  const myFriends = props.sidebarPage.friends.map(f => {
    return (
      <div className={s.friend} key={f.id} >
        <img src="https://yt3.ggpht.com/a/AATXAJxprJ9RdcQ-V961aW5tzEWdrdkjxtIR5J6eNg=s900-c-k-c0xffffffff-no-rj-mo" alt='' />
        {f.name}
      </div>
    );
  });

  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      {myFriends}
    </div>
  )
};

export default Friends;