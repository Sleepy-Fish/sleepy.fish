import React from 'react';

import styled from '@emotion/styled';

import { Home } from './views';

const App = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #282833;
`;

const Root = () => (
  <App>
    <Home />
  </App>
);
export default Root;
