import React from 'react';
import preloaderImg from '../../../assets/images/preloader.gif';
import style from './Preloader.module.css';


const Preloader = () => {
  return (
    <div className={style.preloaderWrapper}>
      <div className={style.preloader}>
        <img src={preloaderImg} />
      </div>
    </div>
  );
};

export default Preloader;
