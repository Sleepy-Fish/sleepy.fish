import styled from '@emotion/styled';

import { COLOR, BREAKPOINT } from '../../../../../contants';

export const Icon = styled.div`
  position: absolute;
  width: 20%;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  background-color: ${COLOR.BLUE};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  left: 48%;
  bottom: -40px;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (max-width: ${BREAKPOINT.LG}) {
    width: 110px;
    height: 110px;
    background-size: 58px;
    left: 46%;
    bottom: -20px;
  }
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    width: 80px;
    height: 80px;
    background-size: 48px;
    left: 5%;
    bottom: -10%;
  }
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    width: 60px;
    height: 60px;
    left: 5px;
    background-size: 32px;
    bottom: -10px;
  }
`;
