import React from 'react';
import { render } from '@testing-library/react';

import Decoratedlogger from './decoratedlogger';

describe(' Decoratedlogger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Decoratedlogger />);
    expect(baseElement).toBeTruthy();
  });
});
