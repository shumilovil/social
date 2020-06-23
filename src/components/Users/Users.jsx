import React from 'react';
import s from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';


const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

  return (
    <div className={s.usersStyle} >

      <Paginator currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize} />

      {
        users.map(u => {
          return (
            <User user={u}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow} />
          );
        })
      }
    </div>
  );

};

export default Users;