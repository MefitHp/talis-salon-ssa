import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
  return <WrapperStyles>{children}</WrapperStyles>;
};

const WrapperStyles = styled.div`
  max-width: 1440px;

  margin: 0 auto;
`;

export default Wrapper;
