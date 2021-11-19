import React from 'react';

const Footer = () => (
  <nav className="absolute bottom-0 left-0 flex flex-row items-center w-full bg-black h-footer text-textprimary">
    <div className="absolute top-0 w-full h-2 bg-primary bg-gradient-to-r from-primary via-highlight to-secondary" />
    <div className="w-full flex flex-row flex-wrap justify-evenly">
      <span className="ml-2 text-lg font-light text-center hover:text-primary">
        riley@sleepy.fish
      </span>
      <span className="ml-2 text-lg font-light text-center hover:text-primary">
        caleb@calebjay.com
      </span>
  </div>
  </nav>
);

export default Footer;
