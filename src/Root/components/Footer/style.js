import styled from '@emotion/styled';

import {
  COLOR,
  STYLE,
} from '../../../contants';

export const Foot = styled.div`
  position: absolute;
  height: 64px;
  display: flex;
  flex-direction: row;
  left: 10px;
  bottom: 20px;
  border-radius: 32px;
  background-color: ${COLOR.BLUE};
  box-shadow: ${STYLE.SHADOW};
  padding-right: 20px;
`;

export const SocialLink = styled.a`
  width: 64px;
  height: 64px;
  margin-left: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;
