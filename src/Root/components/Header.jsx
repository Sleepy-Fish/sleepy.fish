import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const lg = '1270px';
const md = '769px';
const sm = '481px';

const Head = styled.nav`
  position: relative;
  width: 100%;
  height: 240px;
  margin: 0;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: ${sm}) {
    height: 200px;
  }
`;

const Splash = styled.div`
  width: 100%;
  height: 160px;
  background: linear-gradient(180deg, #C0F4FF 0%, #5E89C9 50%, #202B4F 100%);
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${sm}) {
    height: 100px;
  }
`;

const SplashLogo = styled.div`
  width: 160px;
  height: 160px;
  background-image: url('static/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: ${sm}) {
    width: 100px;
    height: 100px;
  }
`;

const SplashTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 160px;
  color: white;
  font-family: StickNoBills, Impact, sans-serif;
  font-size:72px;
  vertical-align: bottom;
  text-shadow: 
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
  @media screen and (max-width: ${md}) {
    font-size: 48px;
  }
  @media screen and (max-width: ${sm}) {
    height: 100px;
    font-size: 36px;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #202B4F;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${md}) {
    height: 160px;
    flex-direction: column;
  }
  @media screen and (max-width: ${sm}) {
    height: 100px;
    flex-direction: column;
  }
`;

const NoticeBar = styled.div`
  width: 50%;
  margin: 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  border: 1px solid red;
  @media screen and (max-width: ${md}) {
    width: 90%;
    padding: 5px 5%;
  }
`;

const NoticeBarText = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 30px;
  background-color: black;
  border-radius: 8px;
  color: #74C635;
  font-family: LED, Impact, sans-serif;
  font-size: 40px;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (max-width: ${sm}) {
    font-size: 28px;
    line-height: 34px;
  }
`;

const NavBarLinks = styled.div`
  width: 40%;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin-left: 10%;
  border: 1px solid green;
  @media screen and (max-width: ${md}) {
    width: 80%;
    margin-left: 20%;
  }
  @media screen and (max-width: ${sm}) {
    width: 80%;
    height: 50px;
    margin-left: 60px;
  }
`;

const NavBarLink = styled.a`
  color: white;
  font-family: NTR, sans-serif;
  font-size: 32px;
  line-height: 80px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: ${lg}) {
    font-size: 22px;
    line-height: 40px;
  }
  @media screen and (max-width: ${md}) {
    font-size: 32px;
    line-height: 80px;
  }
  @media screen and (max-width: ${sm}) {
    font-size: 22px;
    line-height: 40px;
  }
`;

const NavIcon = styled.div`
  position: absolute;
  width: 20%;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  background-color: #202B4F;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  left: 48%;
  bottom: -40px;
  background-repeat: no-repeat;
  background-position: center center;
  @media screen and (max-width: ${lg}) {
    width: 120px;
    height: 120px;
    background-size: 64px;
    left: 50%;
    bottom: -20px;
  }
  @media screen and (max-width: ${md}) {
    left: 5px;
    bottom: -100px;
  }
  @media screen and (max-width: ${sm}) {
    width: 60px;
    height: 60px;
    left: 5px;
    background-size: 32px;
    bottom: -10px;
  }
`;

const routes = {
  home: {
    icon: 'fish',
  },
  devlog: {
    icon: 'quill',
  },
  games: {
    icon: 'd-pad',
  },
  team: {
    icon: 'team',
  },
};

const Header = () => {
  const navigate = useNavigate();
  const [route, setRoute] = useState('home');
  const [icon, setIcon] = useState('fish');
  const [noticeText] = useState('News and Alerts Go Here!');
  useEffect(() => {
    if (route) {
      setIcon(routes[route].icon);
      navigate(route !== 'home' ? route : '/');
    }
  }, [route]);
  return (
    <Head>
      <Splash>
        <SplashLogo />
        <SplashTitle>Sleepy Fish Games</SplashTitle>
      </Splash>
      <Nav>
        <NoticeBar>
          <NoticeBarText>
            {noticeText}
          </NoticeBarText>
        </NoticeBar>
        <NavBarLinks>
          <NavBarLink
            style={{ textDecoration: route === 'home' ? 'underline' : 'none' }}
            onClick={() => setRoute('home')}
          >
            Home
          </NavBarLink>
          <NavBarLink
            style={{ textDecoration: route === 'devlog' ? 'underline' : 'none' }}
            onClick={() => setRoute('devlog')}
          >
            Devlog
          </NavBarLink>
          <NavBarLink
            style={{ textDecoration: route === 'games' ? 'underline' : 'none' }}
            onClick={() => setRoute('games')}
          >
            Games
          </NavBarLink>
          <NavBarLink
            style={{ textDecoration: route === 'team' ? 'underline' : 'none' }}
            onClick={() => setRoute('team')}
          >
            Team
          </NavBarLink>
        </NavBarLinks>
      </Nav>
      <NavIcon style={{ backgroundImage: `url(/static/icons/${icon}.svg)` }} />
    </Head>
  );
};

export default Header;
