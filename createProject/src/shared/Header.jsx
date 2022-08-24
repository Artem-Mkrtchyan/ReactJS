import * as React from 'react';
import { hot } from 'react-hot-loader/root';

function HeaderComponent() {
  return(
    <header>
      <h1>Hello React</h1>
      <p>Hello their</p>
    </header>
  );
};

export const Header = hot(HeaderComponent)