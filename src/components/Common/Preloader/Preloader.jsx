import React from 'react';
import preloaderImg from '../../../assets/images/preloader.gif';
import styles from './Preloader.module.css';


const Preloader = () => {
  return (
    <div className={styles.preloaderWrapper}>
      <div className={styles.preloader}>
        <img src={preloaderImg} alt='' />
      </div>
    </div>
  );
};

export default Preloader;
