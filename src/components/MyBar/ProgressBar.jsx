import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBarContainer}>
      <span className={styles.progressText}>Вы прошли {progress}% из 100%</span>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;