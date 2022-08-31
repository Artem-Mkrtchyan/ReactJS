import React from 'react';
import { CommentsButton } from '../Buttons/CommentsButton';
import { SaveButton } from '../Buttons/SaveButton';
import { ShareButton } from '../Buttons/ShareButton';
import { Rating } from '../Rating';
import styles from './cardcontrols.css';

export function CardControls() {
  return (
    <div className={styles.controls}>
      <Rating />
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
