import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';

const Navbar = () => {  
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/users' activeClassName={styles.activeLink}>Users</NavLink>
      </div>     
      <br />
      <br />        
      <div className={styles.friendsBlock}>
        <FriendsContainer />
      </div>
    </nav>
  );
};

export default Navbar;