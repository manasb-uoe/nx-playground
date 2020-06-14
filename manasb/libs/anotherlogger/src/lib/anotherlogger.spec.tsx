import React from 'react';
import { render } from '@testing-library/react';

import Anotherlogger from './anotherlogger';

describe(' Anotherlogger', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Anotherlogger />);
    expect(baseElement).toBeTruthy();
  });
});
