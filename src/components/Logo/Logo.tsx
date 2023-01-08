import React from 'react';
import styles from './logo.module.scss';
import logo from '../../images/logo.png';

const Logo = () => (
  <div className={styles.container}>
    <img className={styles.image} src={logo} alt='logo' />
    <div className={styles.title}>
      samgtudist
    </div>
  </div>
);

export default Logo;
