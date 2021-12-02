import React from 'react';

const Header = () => (
  <nav className="relative flex flex-row items-center w-full bg-black h-header">
    <div className="flex items-center justify-center w-full h-full ml-2 text-5xl font-light text-center text-textprimary hover:contrast">
      Sleepy Fish
    </div>
    <div className="absolute bottom-0 w-full h-2 bg-primary bg-gradient-to-r from-primary via-highlight to-secondary" />
  </nav>
);

export default Header;
