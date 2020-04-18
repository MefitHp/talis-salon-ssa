import styled from 'styled-components';

const Title = ({ children, ...rest }) => {
  return <StyledTitle {...rest}>{children}</StyledTitle>;
};
const StyledTitle = styled.h2`
  color: var(--black);
  font-size: 2rem;
  ${({ center }) => center && 'text-align: center;'}
`;

export default Title;
