import React, { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import { Splash, NavIcon, Notice } from './components';

import {
  Head,
  Nav,
  NavBarLinks,
  NavBarLink,
} from './style';

import { DATA } from '../../../contants';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navRoute, setNavRoute] = useState(location.pathname);
  const [navIcon, setNavIcon] = useState('fish');
  const [noticeText] = useState('New Beast Tactics Game is Underway!');
  const [noticeLink] = useState('https://devlog.sleepy.fish/posts/beast-tactics/');

  const setRoute = (route, icon) => {
    setNavIcon(icon);
    setNavRoute(route);
    navigate(route);
  };

  return (
    <Head>
      <Splash />
      <Nav>
        <Notice text={noticeText} href={noticeLink} />
        <NavBarLinks>
          {DATA.ROUTES.map(({
            name,
            display,
            icon,
            route,
          }) => (
            <NavBarLink
              key={name}
              style={{ textDecoration: navRoute === route ? 'underline' : 'none' }}
              onClick={() => setRoute(route, icon)}
            >
              {display}
            </NavBarLink>
          ))}
        </NavBarLinks>
      </Nav>
      <NavIcon icon={navIcon} />
    </Head>
  );
};

export default Header;
