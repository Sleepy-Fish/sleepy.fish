import React from 'react';

import { Icon } from './style';

const NavIcon = ({ icon }) => (
  <Icon style={{ backgroundImage: `url(/static/icons/${icon}.svg)` }} />
);

export default NavIcon;
