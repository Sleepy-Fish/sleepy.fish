import React from 'react';
import { Header, Content, Footer } from './components';

const Root = () => (
  <div className="ml-1 mt-header-m md:mt-header-d mb-footer-m md:mb-footer-d">
    <Header />
    <Content />
    <Footer />
  </div>
);
export default Root;
