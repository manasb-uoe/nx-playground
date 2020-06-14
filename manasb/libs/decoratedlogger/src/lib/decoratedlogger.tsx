import React, { useEffect } from 'react';
import { Anotherlogger } from '@manasb/anotherlogger';

import './decoratedlogger.css';

/* eslint-disable-next-line */
export interface DecoratedloggerProps { }

export const Decoratedlogger = (props: DecoratedloggerProps) => {
  useEffect(() => {
    console.log("this is decorated");
  }, []);

  return (
    <div>
      <h1>Welcome to decoratedlogger!!</h1>
      <Anotherlogger />
    </div>
  );
};

export default Decoratedlogger;
