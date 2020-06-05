import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  };

  return (
    <div className={s.users} >
      {pages.map(p => {
        return (
          <span key={p} className={props.currentPage === p ? s.selectedPage : s.page} onClick={() => { props.onPageChanged(p) }} >{p}</span>
        )
      })}

      {
        props.users.map(u => {
          return (
            <div key={u.id} className={s.userItem} >
              <span>
                <div>
                  <NavLink to={'profile/' + u.id} >
                    <img src={u.photos.large ? u.photos.large : userPhoto} className={s.userPhoto} />
                  </NavLink>
                </div>
                <div>
                  {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                </span>
              </span>
            </div>
          );
        })
      }
    </div>
  );

};

export default Users;