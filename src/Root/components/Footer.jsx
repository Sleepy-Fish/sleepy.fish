import React from 'react';

const Footer = () => (
  <nav className="absolute bottom-0 left-0 flex flex-row items-center w-full bg-black h-footer-m md:h-footer-d">
    <div className="absolute top-0 w-full h-1 bg-primary bg-gradient-to-r from-primary via-highlight to-secondary" />
    <div className="flex items-center justify-center w-1/3 h-full ml-2 text-lg font-light text-center text-primary hover:text-primary">
      riley@sleepy.fish
    </div>
    <div className="flex items-center justify-center w-1/3 h-full ml-2 text-lg font-light text-center text-primary hover:text-primary">
      caleb@calebjay.com
    </div>
  </nav>
);

export default Footer;
