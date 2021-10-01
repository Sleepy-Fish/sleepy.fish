import React from 'react';

const Header = () => (
  <nav className="absolute top-0 left-0 flex flex-row items-center w-full bg-black h-header-m md:h-header-d">
    <div className="flex items-center justify-center w-1/4 h-full ml-2 text-5xl font-light text-center text-primary hover:text-primary">
      Sleepy Fish
    </div>
    <div className="flex flex-col items-center justify-center w-1/2 h-full ml-2 text-5xl font-light text-center border-l border-r border-primary text-primary hover:text-primary">
      <div className="w-full border-b">Sleepy Fish</div>
      <div className="flex flex-row items-center justify-evenly">
        <div className="border-l">Hey</div>
        <div className="border-l">Hey</div>
        <div className="border-l">Hey</div>
        <div className="border-l">Hey</div>
      </div>
    </div>
    <div className="flex items-center justify-center w-1/4 h-full ml-2 text-5xl font-light text-center text-primary hover:text-primary">
      Sleepy Fish
    </div>
    <div className="absolute bottom-0 w-full h-1 animate-scroll-x bg-primary bg-gradient-to-r from-primary via-highlight to-secondary" />
  </nav>
);

export default Header;
