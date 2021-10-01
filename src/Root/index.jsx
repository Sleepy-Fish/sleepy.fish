import React from 'react';
import styled from '@emotion/styled';
import { Header, Content } from './components';

const StyledRoot = styled.div``;

const Root = () => (
  <StyledRoot className="ml-1 mt-header-m md:mt-header-d">
    <Header />
    <Content />
  </StyledRoot>
);
export default Root;
