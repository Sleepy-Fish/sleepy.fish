import styled from '@emotion/styled';

import {
  COLOR,
  STYLE,
  BREAKPOINT,
  APP,
} from '../../../contants';

export const Head = styled.nav`
  position: relative;
  width: 100%;
  height: ${APP.HEADER_HEIGHT};
  margin: 0;
  box-shadow: ${STYLE.SHADOW};
`;

export const Nav = styled.div`
  width: 100%;
  height: ${APP.NAV_HEIGHT};
  background-color: ${COLOR.BLUE};
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    flex-direction: column;
  }
`;

export const NavBarLinks = styled.div`
  width: 40%;
  height: ${APP.NAV_HEIGHT};
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin-left: 10%;
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    width: 80%;
    height: ${APP.SM_NAV_HEIGHT};
    margin-left: 20%;
  }
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    width: 80%;
    margin-left: 60px;
  }
`;

export const NavBarLink = styled.a`
  color: white;
  font-family: NTR, sans-serif;
  font-size: 32px;
  line-height: 80px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: ${BREAKPOINT.LG}) {
    font-size: 22px;
    line-height: 40px;
  }
  @media screen and (max-width: ${BREAKPOINT.MD}) {
    font-size: 32px;
    line-height: 80px;
  }
  @media screen and (max-width: ${BREAKPOINT.SM}) {
    font-size: 22px;
    line-height: 40px;
  }
`;

export const NavIcon = styled.div`
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
    width: 120px;
    height: 120px;
    background-size: 64px;
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
