import React from 'react';

import { Container, TextWrapper, Text } from './style';

const Notice = ({ text, href }) => (
  <Container>
    <TextWrapper href={href}>
      <Text>{text}</Text>
    </TextWrapper>
  </Container>
);

export default Notice;
