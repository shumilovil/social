import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


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
          <span className={props.currentPage === p ? s.selectedPage : s.page} onClick={() => { props.onPageChanged(p) }} >{p}</span>
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
                    ? <button onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '2ae83a5a-f5d2-414f-b52d-28bf04fbed53'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id);
                          };
                        });
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        withCredentials: true,
                        headers: {
                          'API-KEY': '2ae83a5a-f5d2-414f-b52d-28bf04fbed53'
                        }
                      })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id);
                          };
                        });
                    }}>Follow</button>}
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