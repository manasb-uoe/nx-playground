import React from 'react';
import { Anotherlogger } from '@manasb/anotherlogger';

import './decoratedlogger.css';

/* eslint-disable-next-line */
export interface DecoratedloggerProps {}

export const Decoratedlogger = (props: DecoratedloggerProps) => {
  return (
    <div>
      <h1>Welcome to decoratedlogger!</h1>
      <Anotherlogger />
    </div>
  );
};

export default Decoratedlogger;
