import React from 'react';
import styled from 'styled-components';

import { NextLink } from 'components/shared';

const Navbar = () => {
  return (
    <NavbarStyled>
      <NextLink href="/">
        <NavbarLogo src="/assets/logo/main_logo.png" alt="Talis Salon Logo" />
      </NextLink>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`;

const NavbarLogo = styled.img`
  max-height: 70px;
  padding: 0 1.5rem;
`;

export default Navbar;
