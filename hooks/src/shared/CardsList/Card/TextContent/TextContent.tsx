import React from 'react';
import { UserLink } from '../../../Components/UserLink';
import styles from './textcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink />
        <span className={styles.createdAt}>8 часов назад</span>
      </div>
      <h2 className={styles.title}>
        <a href="#" className={styles.postLink}>Реплицированные с зарубежных источников возможности </a>
      </h2>
    </div>
  );
}
