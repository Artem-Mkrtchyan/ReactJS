import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://p4.wallpaperbetter.com/wallpaper/82/434/505/pc-nature-hd-pictures-1920x1080-wallpaper-preview.jpg" alt="preview"/>
    </div>
  );
}
