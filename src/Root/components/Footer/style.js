import styled from '@emotion/styled';

import {
  COLOR,
  STYLE,
  BREAKPOINT,
} from '../../../contants';

export const Foot = styled.div`
  position: absolute;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 10px;
  bottom: 20px;
  border-radius: 32px;
  background-color: ${COLOR.BLUE};
  box-shadow: ${STYLE.SHADOW};
  padding-right: 20px;
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    left: 50%;
    transform: translateX(-50%);
    padding-right: 10px;
  }
`;

export const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    margin-left: 10px;
  }
`;
