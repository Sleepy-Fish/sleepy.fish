import styled from '@emotion/styled';

import {
  COLOR,
  BREAKPOINT,
  APP,
} from '../../../../../contants';

export const Container = styled.div`
  width: 50%;
  height: ${APP.NAV_HEIGHT};
  margin: 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    width: 90%;
    height: ${APP.SM_NAV_HEIGHT};
    padding: 5px 5%;
  }
`;

export const TextWrapper = styled.a`
  position: relative;
  width: 100%;
  height: 60px;
  margin: 0 0 10px 0;
  padding: 0 30px;
  background-color: ${COLOR.BLACK};
  border-radius: 8px;
  color: ${COLOR.GREEN};
  font-family: LED, Impact, sans-serif;
  font-size: 40px;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    font-size: 28px;
    line-height: 34px;
    height: 34px;
  }
`;

export const Text = styled.span`
  position: absolute;
  text-align: center;
  width: 100%;
  top: 3px;
  transform:translateX(100%);
  animation: scroll-left 10s linear infinite;
  @keyframes scroll-left {
    0% {
      transform: translateX(100%);
    }
    100% { 
      transform: translateX(-100%); 
    }
  }
`;
