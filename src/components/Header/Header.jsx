import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://yt3.ggpht.com/a/AATXAJw5eCjz8y6UUDI8KzYnrbXkNkJ4KcFmTdiXtg=s900-c-k-c0xffffffff-no-rj-mo' alt='' />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;


