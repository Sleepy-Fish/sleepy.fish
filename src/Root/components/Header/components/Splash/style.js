import styled from '@emotion/styled';

import {
  COLOR,
  STYLE,
  BREAKPOINT,
  APP,
} from '../../../../../contants';

export const Background = styled.div`
  width: 100%;
  height: ${APP.SPLASH_HEIGHT};
  background: ${STYLE.GRADIENT};
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  width: ${APP.SPLASH_HEIGHT};
  height: ${APP.SPLASH_HEIGHT};
  background-image: url('static/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
  height: ${APP.SPLASH_HEIGHT};
  color: ${COLOR.WHITE};
  font-family: StickNoBills, Impact, sans-serif;
  font-size:72px;
  vertical-align: bottom;
  text-shadow: ${STYLE.STROKE};
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    font-size: 48px;
  }
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    font-size: 36px;
  }
`;
