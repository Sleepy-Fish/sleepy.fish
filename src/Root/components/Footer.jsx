import React from 'react';

import styled from '@emotion/styled';

const Foot = styled.div`
  position: absolute;
  height: 64px;
  display: flex;
  flex-direction: row;
  left: 10px;
  bottom: 20px;
  border-radius: 32px;
  background-color: #202B4F;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
  padding-right: 20px;
`;

const SocialLink = styled.a`
  width: 64px;
  height: 64px;
  margin-left: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const links = [
  {
    name: 'discord',
    icon: 'discord',
    href: 'https://discord.gg/hhCsmjjbBh',
  },
  {
    name: 'youtube',
    icon: 'youtube',
    href: 'https://www.youtube.com/channel/UCQill88yan4RLXbmbpfcMyg',
  },
  {
    name: 'itch-io',
    icon: 'itch-io',
    href: 'https://sleepyfishgames.itch.io/',
  },
  {
    name: 'github',
    icon: 'github',
    href: 'https://github.com/Sleepy-Fish',
  },
];

const Footer = () => (
  <Foot>
    {
      links.map(({ name, icon, href }) => (
        <SocialLink
          key={name}
          href={href}
          style={{ backgroundImage: `url(/static/icons/${icon}.svg)` }}
        />
      ))
    }
  </Foot>
);

export default Footer;
