import React from 'react';

import { Notice } from './style';

const ConstructionNotice = ({ name }) => (
  <Notice>
    <h1>
      {name}
      {' '}
      Under Construction
    </h1>
    <p>Lots of great games, demos, tutorials, and dev logs to come!</p>
  </Notice>
);

export default ConstructionNotice;
