import React from 'react';
import './style.scss';

const Header = () => (
  <>
    <nav id="HeaderComponent" className="flex flex-row absolute top-0 w-full items-center bg-black">
      <h1 className="text-primary text-5xl font-light ml-2">Sleepy Fish</h1>
    </nav>
  </>
);

export default Header;
