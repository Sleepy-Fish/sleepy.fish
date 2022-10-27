import React from 'react';

import { Content } from '../components';

const Home = () => (
  <Content>
    <iframe title="embedded-aquarium" src="https://aquarium.sleepy.fish" width="100%" height="100%" frameBorder={0}>
      Browser not compatible. Visit aquarium directly
      {' '}
      <a href="https://aquarium.sleepy.fish">here</a>
      .
    </iframe>
  </Content>
);

export default Home;
