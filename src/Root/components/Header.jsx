import styled from '@emotion/styled';
import React from 'react';

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Header = () => (
  <>
    <NavBar className="bg-black">
      <h1 className="text-primary text-5xl font-light ml-2">Sleep Fish</h1>
      <p className="text-secondary">
        HELLO
      </p>
    </NavBar>
  </>
);

export default Header;
