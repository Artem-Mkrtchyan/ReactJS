import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img src="https://oir.mobi/uploads/posts/2019-12/1576100818_10-19.jpg" alt="avatar" className={styles.avatar}/>
      <a href="#" className={styles.username}>Ирина Зверева</a>
    </div>
  );
}
