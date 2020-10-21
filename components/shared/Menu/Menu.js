import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuIcons = open ? ['fas', 'times'] : ['fas', 'bars'];
  return (
    <>
      <MenuButtonStyled onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={menuIcons} />
      </MenuButtonStyled>
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
  background-color: var(--primary);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  transition: all ease-in-out 200ms;
`;

const MenuBarStyled = styled.aside`
  width: 290px;
  position: fixed;
  padding: 112px 30px 40px 45px;
  text-align: left;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fffcfc;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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
