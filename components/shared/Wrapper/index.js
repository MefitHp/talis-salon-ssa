import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 *
 * @param {node} children Html node that should be wrapped
 * @param {boolean} hasShadow Determine if the wrapper should have boxShadow
 */
const Wrapper = ({ children, hasShadow }) => {
  return <WrapperStyles hasShadow={hasShadow}>{children}</WrapperStyles>;
};

const WrapperStyles = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  ${({ hasShadow }) =>
    hasShadow
      ? `
    box-shadow: var(--box-shadow);
  `
      : ''}
`;

Wrapper.propTypes = {
  children: PropTypes.node,
  hasShadow: PropTypes.bool,
};

Wrapper.defaultProps = {
  children: <React.Fragment />,
  hasShadow: false,
};

export default Wrapper;
