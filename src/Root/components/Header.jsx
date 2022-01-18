import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const lg = '1270px';
const md = '769px';
const sm = '481px';

const headerHeight = '20vh';
const splashHeight = '12vh';
const navHeight = '8vh';
const smNavHeight = '4vh';

const Head = styled.nav`
  position: relative;
  width: 100%;
  height: ${headerHeight};
  margin: 0;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
`;

const Splash = styled.div`
  width: 100%;
  height: ${splashHeight};
  background: linear-gradient(180deg, #C0F4FF 0%, #5E89C9 50%, #202B4F 100%);
  display: flex;
  flex-direction: row;
`;

const SplashLogo = styled.div`
  width: ${splashHeight};
  height: ${splashHeight};
  background-image: url('static/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const SplashTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: ${splashHeight};
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
    font-size: 36px;
  }
`;

const Nav = styled.div`
  width: 100%;
  height: ${navHeight};
  background-color: #202B4F;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: ${md}) {
    flex-direction: column;
  }
`;

const NoticeBar = styled.div`
  width: 50%;
  height: ${navHeight};
  margin: 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${md}) {
    width: 90%;
    height: ${smNavHeight};
    padding: 5px 5%;
  }
`;

const NoticeBarText = styled.a`
  position: relative;
  width: 100%;
  height: 60px;
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
  cursor: pointer;
  @media screen and (max-width: ${md}) {
    font-size: 28px;
    line-height: 34px;
    height: 34px;
  }
`;

const ScrollingText = styled.span`
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

const NavBarLinks = styled.div`
  width: 40%;
  height: ${navHeight};
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  margin-left: 10%;
  @media screen and (max-width: ${md}) {
    width: 80%;
    height: ${smNavHeight};
    margin-left: 20%;
  }
  @media screen and (max-width: ${sm}) {
    width: 80%;
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
    left: 46%;
    bottom: -20px;
  }
  @media screen and (max-width: ${md}) {
    width: 80px;
    height: 80px;
    background-size: 48px;
    left: 5%;
    bottom: -10%;
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
  const [noticeLink] = useState('https://sleepy.fish');
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
          <NoticeBarText href={noticeLink}>
            <ScrollingText>{noticeText}</ScrollingText>
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
