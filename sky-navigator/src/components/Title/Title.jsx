import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Title.module.css';

export function Title({ isLoading }) {
  return (
    <div className={`${styles.titleContainer} ${!isLoading ? styles.left : ''}`}>
      <Link to="/general" className={styles.titleLink}>
        Satellite<span className={styles.highlight}>Navigator</span>
      </Link>
    </div>
  );
}
