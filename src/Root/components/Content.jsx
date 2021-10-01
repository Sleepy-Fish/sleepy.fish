import React from 'react';

const Content = () => (
  <div className="absolute top-0 left-0 w-screen h-screen p-5 md:p-10 pt-header-m md:pt-header-d pb-footer-m md:pb-footer-d">
    <div className="flex items-center justify-center h-full">
      <p className="text-center text-highlight">
        This site is under construction. There may be a demo running that you can find
        {' '}
        <a className="underline text-primary" href="https://demo.sleepy.fish">here</a>
        .
      </p>
    </div>
  </div>
);

export default Content;
