import React from 'react';
import styles from './layout.css';

interface ILayouyProps {
  children?: React.ReactNode;
}

export function Layout({children}: ILayouyProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
