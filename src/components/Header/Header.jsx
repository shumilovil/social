import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://yt3.ggpht.com/a/AATXAJw5eCjz8y6UUDI8KzYnrbXkNkJ4KcFmTdiXtg=s900-c-k-c0xffffffff-no-rj-mo' alt='' />
      <div className={s.loginBlock}>
        <div>{props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}</div>
      </div>
    </header>
  );
};

export default Header;


