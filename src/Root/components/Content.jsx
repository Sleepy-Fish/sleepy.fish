import React from 'react';

const Content = () => (
  <div className="w-screen max-w-full h-content ">
    <div className="flex flex-col items-center  justify-start md:justify-center h-full text-highlight text-lg pl-2 pr-2 overflow-y-scroll md:overflow-y-hidden pt-3 pb-3">
      <p className="text-center mb-3">
        Sleepy Fish is a team of accomplished engineers.
      </p>
      <p className="text-center mb-3">
        Companies such as NASA, Capital One, and Google have leveraged our abilities.
      </p>
      <p className="text-center mb-3">
        You can see examples of our work on websites such as
        {' '}
        <a className="text-href underline transition-all border-opacity-0 hover:border-opacity-100 border-2 border-primary border-solid" href="https://careers.google.com">careers.google.com</a>,
        {' '}
        <a className="text-href underline transition-all border-opacity-0 hover:border-opacity-100 border-2 border-primary border-solid" href="https://humcapital.com/">humcapital.com</a>, and
        {' '}
        <a className="text-href underline transition-all border-opacity-0 hover:border-opacity-100 border-2 border-primary border-solid" href="https://curative.com/">curative.com</a>
      </p>
      <p className="text-center mb-3">
        Our expertise includes frontend and backend web development in Javascript, Python, and WASM, multi-platform game development, Artificial Intelligence, and Machine Learning.
      </p>
      <p className="text-center mb-3">
        We're always experimenting. There may be a demo that you can find
        {' '}
        <a className="text-href underline transition-all border-opacity-0 hover:border-opacity-100 border-2 border-primary border-solid"  href="https://demo.sleepy.fish">here</a>
        .
      </p>
      <p className="text-center mb-3">
        If you have a problem you need solved, contact us at the emails below.
      </p>
    </div>
  </div>
);

export default Content;
