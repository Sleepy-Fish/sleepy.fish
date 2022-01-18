import React from 'react';

import styled from '@emotion/styled';

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 78vh;
  margin-top: -20vh;
  padding-top: 20vh;
  padding-bottom: 2vh;
  background-color: #282833;
  overflow-y: scroll;
  padding-right: 17px;
  box-sizing: content-box;
`;

const Content = ({ children }) => (
  <Background>
    {children}
  </Background>
);

export default Content;
