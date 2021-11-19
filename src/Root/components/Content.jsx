import React from 'react';

const Content = () => (
  <div className="w-screen max-w-full h-content ">
    <div className="flex flex-col items-center justify-start h-full pt-3 pb-3 pl-2 pr-2 overflow-y-scroll text-lg md:justify-center text-highlight md:overflow-y-hidden">
      <p className="mb-3 text-center">
        Sleepy Fish is a team of accomplished engineers.
      </p>
      <p className="mb-3 text-center">
        Companies such as NASA, Capital One, and Google have leveraged our abilities.
      </p>
      <p className="mb-3 text-center">
        You can see examples of our work on websites such as
        {' '}
        <a className="underline transition-all border-2 border-opacity-0 border-solid text-href hover:border-opacity-100 border-primary" href="https://careers.google.com">careers.google.com</a>
        ,
        {' '}
        <a className="underline transition-all border-2 border-opacity-0 border-solid text-href hover:border-opacity-100 border-primary" href="https://humcapital.com/">humcapital.com</a>
        , and
        {' '}
        <a className="underline transition-all border-2 border-opacity-0 border-solid text-href hover:border-opacity-100 border-primary" href="https://curative.com/">curative.com</a>
      </p>
      <p className="mb-3 text-center">
        Our expertise includes frontend and backend web development in Javascript, Python, and WASM, multi-platform game development, Artificial Intelligence, and Machine Learning.
      </p>
      <p className="mb-3 text-center">
        We&apos;re always experimenting. There may be a demo that you can find
        {' '}
        <a className="underline transition-all border-2 border-opacity-0 border-solid text-href hover:border-opacity-100 border-primary" href="https://demo.sleepy.fish">here</a>
        .
      </p>
      <p className="mb-3 text-center">
        If you have a problem you need solved, contact us at the emails below.
      </p>
    </div>
  </div>
);

export default Content;
