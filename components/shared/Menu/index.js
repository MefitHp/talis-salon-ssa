import React, { useState } from 'react';
import styled from 'styled-components';

const MenuButtonStyled = styled.div`
  cursor: pointer;
  top: 40px;
  right: 15px;
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
  background: #231f20;
  transform: translateX(100%);
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  ${({ isOpen }) =>
    isOpen &&
    `
      transition-delay: 0.1s;
      transform: translateX(0);
  `}
`;

const MenuItem = styled.p`
  color: white;
  font-size: 24px;
  font-weight: 450;
`;
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuButtonStyled onClick={() => setOpen(!open)} />
      <MenuBarStyled isOpen={open}>
        <MenuItem>Uno</MenuItem>
        <MenuItem>Dos</MenuItem>
        <MenuItem>Tres</MenuItem>
      </MenuBarStyled>
    </>
  );
};

export default Menu;
