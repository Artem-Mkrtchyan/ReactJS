import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less'

function HeaderComponent() {
  return(
    <header>
      <h1 className={styles.example}>Hello React from Russia</h1>
      <p>Hello their</p>
    </header>
  );
};

export const Header = hot(HeaderComponent)
