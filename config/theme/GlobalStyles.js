import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{box-sizing: border-box;}
:root {
    --primary: ${({ theme }) => theme.colors.primary};
    --primary_light: ${({ theme }) => theme.colors.primary_light};
    --primary_dark: ${({ theme }) => theme.colors.primary_dark};
    --white: ${({ theme }) => theme.colors.white};
    --black: ${({ theme }) => theme.colors.black};
    --gray: ${({ theme }) => theme.colors.gray};
    --box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    min-height: 100vh;
    color: var(--black);
  }
  body {
    background-color: #fffcfc;
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
  button {
    transition: all 200ms ease-in-out;
    padding: 1rem 2rem;
    font-size: 1rem;
    background: var(--primary);
    color: var(--white);
    border-radius: 10px;
    font-weight: 300;
    border: none;
    cursor: pointer;
    box-shadow: var(--box-shadow);
  }
  button:hover{
    color: var(--primary);
    background: #fff;
  }
  button:focus {
    outline:0
  }
`;

export default GlobalStyles;
