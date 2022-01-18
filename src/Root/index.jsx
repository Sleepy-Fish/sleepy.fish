import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from '@emotion/styled';

import {
  Home,
  Devlog,
  Games,
  Team,
} from './views';

import { Header, Footer } from './components';

const App = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #282833;
`;

const Root = () => (
  <App>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </App>
);
export default Root;
