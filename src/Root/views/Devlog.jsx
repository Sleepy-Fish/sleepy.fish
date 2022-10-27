import React from 'react';

import { Content } from '../components';

const Devlog = () => (
  <Content>
    <iframe title="embedded-devlog" src="https://devlog.sleepy.fish" width="100%" height="100%" frameBorder={0}>
      Browser not compatible. Visit devlog directly
      {' '}
      <a href="https://devlog.sleepy.fish">here</a>
      .
    </iframe>
  </Content>
);

export default Devlog;
