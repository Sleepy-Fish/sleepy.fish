import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const Head = styled.nav`
  position: relative;
  width: 100%;
  height: 240px;
  margin: 0;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`;

const Splash = styled.div`
  width: 100%;
  height: 160px;
  background: linear-gradient(180deg, #C0F4FF 0%, #5E89C9 50%, #202B4F 100%);
  display: flex;
  flex-direction: row;
`;

const SplashLogo = styled.div`
  width: 160px;
  height: 160px;
  background-image: url('static/logo.png');
  background-repeat: no-repeat;
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
`;

const Nav = styled.div`
  width: 100%;
  height: 80px;
  background-color: #202B4F;
  display: flex;
  flex-direction: row;
`;

const NoticeBar = styled.div`
  width: 40%;
  margin: 10px 80px;
  padding: 5px 20px;
  background-color: black;
  border-radius: 8px;
  color: #74C635;
  font-family: LED, Impact, sans-serif;
  font-size: 40px;
  line-height: 60px;
  text-shadow: 
    -1px -1px 0 #394432,  
    1px -1px 0 #394432,
    -1px 1px 0 #394432,
    1px 1px 0 #394432;
`;

const NavIcon = styled.div`
  position: absolute;
  width: 20%;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  background-color: #202B4F;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  left: 50%;
  bottom: -40px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const NavBarLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 40%;
  margin-left: 10%;
`;

const NavBarLink = styled.a`
  color: white;
  font-family: NTR, sans-serif;
  font-size: 32px;
  line-height: 80px;
  text-decoration: none;
  cursor: pointer;
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
          {noticeText}
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
