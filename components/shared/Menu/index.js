import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuButtonStyled onClick={() => setOpen(!open)} />
      <MenuBarStyled isOpen={open}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </MenuBarStyled>
    </>
  );
};

//StyledComponents
const MenuButtonStyled = styled.div`
  cursor: pointer;
  top: 40px;
  right: 35px;
  position: fixed;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  z-index: 1001;
`;

const MenuBarStyled = styled.aside`
  width: 290px;
  position: fixed;
  padding: 112px 30px 40px 45px;
  text-align: left;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.colors.primary_light};
  transform: translateX(100%);
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  ${({ isOpen }) =>
    isOpen &&
    `transition-delay: 0.1s;
    transform: translateX(0);
    `}
`;

export default Menu;
