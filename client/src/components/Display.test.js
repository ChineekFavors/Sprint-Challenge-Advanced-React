import React from 'react';

import Display from './Display';
import {render} from '@testing-library/react';

test('it checks if Display render without crashing', () => {
    render(<Display />);
  });

  