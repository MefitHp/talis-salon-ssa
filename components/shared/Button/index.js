import React from 'react';
import styled from 'styled-components';

import switchCase from 'utils/switchCase';

const Button = ({ children, type = 'primary' }) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  ${({ type }) =>
    switchCase({
      secondary: `
      background: #fff;
      border: 1px solid var(--primary);
      color: var(--primary);
      &:hover {
        color: #fff;
        background: var(--primary_light);
        border: 1px solid transparent;
      }
      `,
    })()(type)}
`;
export default Button;
