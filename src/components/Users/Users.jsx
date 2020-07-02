import React from 'react';
import styles from './Users.module.css';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';


const Users = ({ currentPage, totalUsersCount, pageSize, users, ...props }) => {

  return (
    <div className={styles.usersStyle} >

      <Paginator currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize} />

      {
        users.map(u => {
          return (
            <User key={u.id}
              user={u}
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