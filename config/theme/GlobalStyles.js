import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    --primary: ${({ theme }) => theme.colors.primary};
    --primary_light: ${({ theme }) => theme.colors.primary_light};
    --primary_dark: ${({ theme }) => theme.colors.primary_dark};
    --white: ${({ theme }) => theme.colors.white};
    --black: ${({ theme }) => theme.colors.black};
    min-height: 100vh;
    background-color: var(--white);
    color: var(--black);
  }
  body {
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
  a, a:visited, a:hover, a:active {
  color: inherit;
  }
  
  a {
      text-decoration: none;
      font-size: 20px;
      transition: color 200ms ease-in-out;
  }
  a:hover{
      color: var(--primary);
  }
`;

export default GlobalStyles;
