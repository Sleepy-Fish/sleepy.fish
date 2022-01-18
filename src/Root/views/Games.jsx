import React from 'react';

import styled from '@emotion/styled';

import { Content } from '../components';

const ConstructionNotice = styled.div`
  align-self: center;
  text-align: center;
  h1 {
    font-family: StickNoBills, sans-serif;
    color: #B74848;
    font-size: 64px;
    margin: 0;
  }
  p {
    font-family: NTR, sans-serif;
    color: white;
    font-size: 22px;
  }
`;

const Games = () => (
  <Content>
    <ConstructionNotice>
      <h1>Site Under Construction</h1>
      <p>Lots of great games, demos, tutorials, and dev logs to come!</p>
    </ConstructionNotice>
  </Content>
);

export default Games;
