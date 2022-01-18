import React from 'react';

import { Foot, SocialLink } from './style';

import { DATA } from '../../../contants';

const Footer = () => (
  <Foot>
    {
      DATA.LINKS.map(({ name, icon, href }) => (
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
