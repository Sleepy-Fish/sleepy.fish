import React from 'react';

const Header = () => (
  <nav className="absolute top-0 left-0 flex flex-row items-center w-full bg-black h-header-m md:h-header-d">
    <div className="flex items-center justify-center w-full h-full ml-2 text-5xl font-light text-center text-primary hover:text-primary">
      Sleepy Fish
    </div>
    <div className="absolute bottom-0 w-full h-1 bg-primary bg-gradient-to-r from-primary via-highlight to-secondary" />
  </nav>
);

export default Header;