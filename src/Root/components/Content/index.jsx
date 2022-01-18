import React from 'react';

import { Background } from './style';

const Content = ({ children }) => (
  <Background>
    {children}
  </Background>
);

export default Content;
